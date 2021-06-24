import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class CreateCompliments1624495253870 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        //RELACIONAMENTO ENTRE TABELAS
        await queryRunner.createTable(
            new Table({
                name : "compliments",
                columns : [
                    {
                        name : "id",
                        type : "uuid",
                        isPrimary : true,
                    },
                    {
                        name : "user_sender",
                        type : "uuid",
                    },
                    {
                        name : "user_receiver",
                        type : "uuid"
                    },
                    {
                        name : "tag_id",
                        type : "uuid",
                    },
                    {
                        name : "message",
                        type : "varchar",
                    },
                    {
                        name : "created_at",
                        type : "timestamp",
                        default : "now()",
                    },
                ],
                foreignKeys : [
                    {
                        name : "FKUserSenderCompliments",
                        referencedTableName : "users",
                        referencedColumnNames : ["id"],
                        columnNames : ["user_sender"],
                        onDelete : "SET NULL",
                        onUpdate: "SET NULL",
                    },
                    {
                        name : "FKUserReceiverCompliments",
                        referencedTableName : "tags",
                        referencedColumnNames : ["id"],
                        columnNames : ["tag_id"],
                        onDelete : "SET NULL",
                        onUpdate: "SET NULL",
                    },
                ]
            })
        );
        /* await queryRunner.createForeignKey(
            "compliments",
            new TableForeignKey({
                        name : "FKUserSenderCompliments",
                        referencedTableName : "users",
                        referencedColumnNames : ["id"],
                        columnNames : ["user_sender"],
                        onDelete : "SET NULL",
                        onUpdate: "SET NULL",
            })
            ESTE É OUTRO JEITO DE FAZER

        ); */
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("compliments");
    }

}
