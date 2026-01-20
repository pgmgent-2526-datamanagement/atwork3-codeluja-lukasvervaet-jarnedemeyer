// import { DefaultSession, DefaultUser } from "next-auth";

// declare module "next-auth" {
//   interface User extends DefaultUser {
//     role_id?: number;
//   }

//   interface Session {
//     user: {
//       role_id?: number;
//     } & DefaultSession["user"];
//   }
// }

// declare module "next-auth/jwt" {
//   interface JWT {
//     role_id?: number | null;
//   }
// }
