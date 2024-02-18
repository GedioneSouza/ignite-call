import { PrismaClient } from '@prisma/client'

// Aqui é onde fazemos nossas queryes e inserções
export const prisma = new PrismaClient({
  log: ['query'],
})
