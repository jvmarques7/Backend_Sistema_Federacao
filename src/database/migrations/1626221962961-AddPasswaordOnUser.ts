import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddPasswaordOnUser1626221962961 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn(
            "users",
            new TableColumn({
                name: "password",
                type: "varchar",
                isNullable: false,
            })
        )

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn("users", "password");
    }

}
