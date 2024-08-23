import { PrismaClient } from "@prisma/client";

export async function getStaticProps() {
   const prisma = new PrismaClient();
   const skills = await prisma.skills.findMany();

   return {
      props: { skills },
   };
}
