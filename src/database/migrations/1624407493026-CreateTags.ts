import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateTags1624407493026 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
           new Table({
               name : "tags",
               columns : [
                   {
                       name : "id",
                       type : "uuid",
                       isPrimary : true
                   },
                   {
                       name : "name",
                       type : "varchar"
                   },
                   {
                       name : "created_at",
                       type : "timestamp",
                       default : "now()"
                   },
                   {
                       name : "updated_at",
                       type : "timestamp",
                       default : "now()"
                   },//esse ponto e virgula é necessario
               ]
           })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.dropTable("tags");
    }

}
