import { faker } from '@faker-js/faker';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  Array(faker.number.int({ min: 1, max: 10 }))
    .fill('')
    .forEach(async () => {
      await prisma.user.create({
        data: {
          email: faker.internet.email(),
          name: faker.person.fullName(),
          posts: {
            createMany: {
              data: Array(faker.number.int({ min: 1, max: 10 }))
                .fill('')
                .map(() => {
                  return {
                    title: faker.lorem.words({ min: 2, max: 10 }),
                    content: faker.lorem.paragraphs({ min: 1, max: 5 }),
                    published: Math.random() < 0.5 ? false : true,
                  };
                }),
            },
          },
          password: faker.internet.password(),
        },
      });
    });
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
