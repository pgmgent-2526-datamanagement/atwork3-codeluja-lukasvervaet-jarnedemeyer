import { PrismaClient } from "../src/generated/prisma/index.js";
import fs from "fs";
import { parse } from "csv-parse/sync";

const prisma = new PrismaClient();

async function main() {
  const file = fs.readFileSync("scripts/hosts.csv");
  const records = parse(file, { columns: true, delimiter: ";" });

  for (const record of records) {
    await prisma.host.create({
      data: {
        firstName: record.VOORNAAM,
        lastName: record.ACHTERNAAM,
        active: true,
      },
    });
  }
  console.log("Hosts imported!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
