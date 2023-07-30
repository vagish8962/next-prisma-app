import { NextAuth } from 'next-auth';
import bcrypt from 'bcrypt';
import GoogleProvider from 'next-auth/providers/google';
import GithubProvider from 'next-auth/providers/Github';
import CredentialsProovider from 'next-auth/providers/credentials';
import prisma from '../../lib/prismadb';

console.log({
  clientid: process.env.GOOGLE_ID,
  clientDession: process.env.GOOGLE_CLIENT_SECRET,
});

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GithubProvider({
      clientId: process.env.GITHUb_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    CredentialsProovider({
      name: 'credentials',
      credentials: {
        email: { label: 'email', type: 'text' },
        password: { label: 'password', type: 'text' },
      },
      async authorize(credentials) {
        if (!credentials.email || !credentials.password) {
          throw new Error('Invalid user');
        }

        const user = prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user) {
          throw new Error('Invalid credentials');
        }

        const isCorrectPassword = await bcrypt.compare(
          credentials.password,
          user.password
        );

        if (!isCorrectPassword) {
          throw new Error('Invalid credentials');
        }

        return user;
      },
      pages: {
        signIn: '/signIn',
      },
      debug: process.env.NODE_ENV === 'development',
      session: {
        strategy: 'jwt',
      },
      secret: process.env.NEXTAUTH_SECRET,
    }),
  ],
  callbacks: {
    async session({ session }) {
      const sessionUser = await User.findOne({ email: session.user.email });
      session.user.id = sessionUser._id.toString();
      return session;
    },
    async signIn(user) {
      try {
        console.log('Mad32');

        await connectToDB();
        const userExits = await User.findOne({
          email: user.profile.email,
        });

        if (!userExits) {
          await User.create({
            email: user.profile.email,
            username: user.profile.name.replace(' ', '').toLowerCase(),
          });
        }

        return true;
      } catch (e) {
        console.log(e);
      }
    },
  },
});

export { handler as GET, handler as POST };
