import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google";

import { connectDB } from "@/lib/mongodb";

import User from "@/models/User";

const handler = NextAuth({

  providers: [

    GoogleProvider({

      clientId:
        process.env
          .GOOGLE_CLIENT_ID!,

      clientSecret:
        process.env
          .GOOGLE_CLIENT_SECRET!,

    }),

  ],

  callbacks: {

    async signIn({
      user,
    }) {

      try {

        await connectDB();

        // CHECK USER
        const existingUser =
          await User.findOne({
            email:
              user.email,
          });

        // CREATE USER
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
          error
        );

        return false;
      }
    },

    async redirect() {

      return "/dashboard";
    },

  },

  secret:
    process.env
      .NEXTAUTH_SECRET,

});

export {
  handler as GET,
  handler as POST,
};