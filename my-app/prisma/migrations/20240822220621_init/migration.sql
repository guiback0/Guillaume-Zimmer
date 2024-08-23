-- CreateTable
CREATE TABLE "works" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "type" BOOLEAN NOT NULL,

    CONSTRAINT "works_pkey" PRIMARY KEY ("id")
);
