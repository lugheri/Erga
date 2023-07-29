import { z } from "zod";
import md5 from "md5";

//Authenticate data
export const UserAccessDTO = z.object({
  username: z.string(),
  password: z.string().min(5,'A senha deve ter mais de 5 dígitos;')
})
export type UserAccessType = z.infer<typeof UserAccessDTO>;

//User data
export const UserDataDTO = z.object({
  name:z.string(),
  username:z.string(),
  credential: z.number(),
  password:z.string().transform(v=>md5(v)),
  reset: z.optional(z.number()).default(1),
  logged: z.optional(z.number()).default(0),
  status: z.optional(z.literal(1).or(z.literal(0))).default(1),
})
export type UserDataType = z.infer<typeof UserDataDTO>;

//CREDENTIALS
export const CredentialAccessDTO = z.object({
  name:z.string(),
  administrator: z.number(),
  description: z.optional(z.string()).default('Sem Descrição'),
  status: z.optional(z.literal(1).or(z.literal(0))).default(1),
})
export type CredentialAccessType = z.infer<typeof CredentialAccessDTO>;
