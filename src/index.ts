import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Insert a new employee
  const newEmployee = await prisma.employee.create({
    data: {
      firstName: "arnav",
      lastName: "ade",
      email: "jn.sss@example.com",
      position: "Software Engineer",
      salary: 75000.00,
      department: "IT", // Optional
    },
  });

  console.log("New Employee Created:", newEmployee);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
