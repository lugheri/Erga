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
  type_user: z.string(),
  password:z.string().transform(v=>md5(v)),
  reset: z.optional(z.number()).default(1),
  logged: z.optional(z.number()).default(0),
  status: z.optional(z.literal(1).or(z.literal(0))).default(1),
})
export type UserDataType = z.infer<typeof UserDataDTO>;

export const UserDataPartialDTO = UserDataDTO.partial();
export type UserDataPartialType = z.infer<typeof UserDataPartialDTO>;


export const PaginationUserDTO = z.object({
  status: z.optional(z.literal(1).or(z.literal(0))).default(1),
  page: z.optional(z.number()).default(1),
  order: z.optional(z.enum(['ASC','DESC'])).default('ASC'),
  orderedBy: z.optional(z.string()).default('id'),
})  
export type PaginationUserType = z.infer<typeof PaginationUserDTO>;


