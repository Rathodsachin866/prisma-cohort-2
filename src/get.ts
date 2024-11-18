import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Get an employee by their unique ID
  const employee = await prisma.employee.findUnique({
    where: {
      id: 1, // The unique ID of the employee
    },
  });

  console.log("Employee Details:", employee);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
