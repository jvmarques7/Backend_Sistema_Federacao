import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateAtuacao1631760606594 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"atuacao",
                columns: [
                    {
                        name: "id",
                        type: "integer",
                        isPrimary: true                       
                    },
                    {
                        name: "atuacao",
                        type: "varchar"
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
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("atuacao");
    }

}
