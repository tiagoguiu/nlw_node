import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AlterYserAddPassword1624490470969 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
//ADICIONANDO MAIS UMA COLUNA DENTRO DA TABELA, PARA NAO RECRIAR A MIGRATION
        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name : "password",
                type : "varchar",
                isNullable: true,
            })
        );
    }
//EM CASO DE REMOÇÃO
    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn( "users", "password" );
    }

}
