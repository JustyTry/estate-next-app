import type { AuthOptions, User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

const users = [
  {
    id: '1',
    username: '101',
    name: 'Misha Nep',
    password: '123',
    role: 'admin',
  },
];

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        username: { label: 'username', type: 'text', required: true },
        password: { label: 'password', type: 'password', required: true },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials.password) return null;

        const currentUser = users.find((user) => user.username === credentials.username);

        if (currentUser && currentUser.password === credentials.password) {
          const { password, ...userWithoutPass } = currentUser;

          return userWithoutPass as User;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/signin',
  },
};
