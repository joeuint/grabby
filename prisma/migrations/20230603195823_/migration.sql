-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "trackingId" TEXT NOT NULL,
    "redirect" TEXT NOT NULL,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Clicker" (
    "id" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "userAgent" TEXT,
    "linkId" TEXT,

    CONSTRAINT "Clicker_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_trackingId_key" ON "Link"("trackingId");

-- AddForeignKey
ALTER TABLE "Clicker" ADD CONSTRAINT "Clicker_linkId_fkey" FOREIGN KEY ("linkId") REFERENCES "Link"("id") ON DELETE SET NULL ON UPDATE CASCADE;
