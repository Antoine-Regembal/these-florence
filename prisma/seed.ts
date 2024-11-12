import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function seedUser() {
  const adminSecret = process.env.ADMIN_SECRET;

  if (!adminSecret) {
    throw Error(`Invalid admin secret "${adminSecret}"`);
  }

  prisma.user.upsert({
    where: { email: "fake@email.com" },
    update: {},
    create: {
      password: adminSecret,
      name: "Antoine",
      surname: "REGEMBAL",
      email: "fake@email.com",
      role: "admin",
    },
  });
}

async function seedItems() {
  prisma.item.upsert({
    where: { name: "Plaid en laine" },
    update: {},
    create: {
      name: "Plaid en laine",
      url: "https://www.le-tshirt-propre.fr/boutique/345--le-plaid-geant-chevron-chaume-3701539801751.html?",
    },
  });
}

async function main() {
  await seedUser();
  await seedItems();
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
