import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

import { connectDB } from "@/lib/mongodb";

import User from "@/models/User";

const handler = NextAuth({

  providers: [

    GoogleProvider({

      clientId:
        process.env.GOOGLE_CLIENT_ID!,

      clientSecret:
        process.env.GOOGLE_CLIENT_SECRET!,

    }),

  ],

  secret:
    process.env.NEXTAUTH_SECRET,

  callbacks: {

    async signIn({
      user,
    }) {

      try {

        await connectDB();

        const existingUser =
          await User.findOne({
            email:
              user.email,
          });

        if (
          !existingUser
        ) {

          await User.create({
            name:
              user.name,

            email:
              user.email,

            image:
              user.image,
          });

        }

        return true;

      } catch (error) {

        console.log(
          "SIGN IN ERROR:",
          error
        );

        return false;
      }
    },

    async redirect() {

      return "/dashboard";
    },

  },

});

export {
  handler as GET,
  handler as POST,
};