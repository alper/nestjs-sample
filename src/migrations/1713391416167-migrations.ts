import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1713391416167 implements MigrationInterface {
    name = 'Migrations1713391416167'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE SEQUENCE IF NOT EXISTS "book_id_seq" OWNED BY "book"."id"`);
        await queryRunner.query(`ALTER TABLE "book" ALTER COLUMN "id" SET DEFAULT nextval('"book_id_seq"')`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "book" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`DROP SEQUENCE "book_id_seq"`);
    }

}
