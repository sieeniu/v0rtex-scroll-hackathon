import { z } from 'zod';

export const createTokenSchema = () =>
  z.object({
    tokenName: z.string(),
    tokenSymbol: z.string(),
  });

export type CreateTokenSchema = z.infer<ReturnType<typeof createTokenSchema>>;
