import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Update an existing employee
  const updatedEmployee = await prisma.employee.update({
    where: {
      id: 1, // The ID of the employee to update
    },
    data: {
      position: "Senior Software Engineer",
      salary: 90000.00,
      department: "Engineering",
    },
  });

  console.log("Updated Employee:", updatedEmployee);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
