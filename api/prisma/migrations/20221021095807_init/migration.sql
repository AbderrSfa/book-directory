-- CreateTable
CREATE TABLE "books" (
    "id" BIGSERIAL NOT NULL,
    "title" VARCHAR(200) NOT NULL,
    "author" VARCHAR(200) NOT NULL,
    "genre" VARCHAR(200) NOT NULL,
    "rating" DECIMAL(2,1) NOT NULL,
    "image" VARCHAR(200) NOT NULL,
    "isbn" VARCHAR(200) NOT NULL,

    CONSTRAINT "books_pkey" PRIMARY KEY ("id")
);
