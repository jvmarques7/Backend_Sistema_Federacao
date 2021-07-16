import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUser1625864637088 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.createTable(
            new Table({
                name:"users",
                columns:[
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid"
                    },
                    {
                        name: "nomeCompleto",
                        type: "varchar"
                    },
                    {
                        name: "rg",
                        type: "varchar"
                    },
                    {
                        name: "cpf",
                        type: "varchar"
                    },
                    {
                        name: "nacionalidade",
                        type: "varchar"
                    },
                    {
                        name: "dt_nascimento",
                        type: "timestamp"
                    },
                    {
                        name: "email",
                        type: "varchar"
                    },
                    {
                        name: "sexo",
                        type: "varchar"
                    },
                    {
                        name: "modalidade_id",
                        type: "integer"
                    },
                    {
                        name: "categoria_id",
                        type: "integer"
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                    {
                        name:"updated_at",
                        type:"timestamp",
                        default:"now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKModalidade",
                        referencedTableName: "modalidade",
                        referencedColumnNames: ["id"],
                        columnNames: ["modalidade_id"],
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKCategoria",
                        referencedTableName: "categoria",
                        referencedColumnNames: ["id"],
                        columnNames: ["categoria_id"],
                        onDelete: "RESTRICT",
                        onUpdate: "CASCADE"
                    }                    
                ]
            })
        );

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
