'use client';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';
import type { FormEventHandler } from 'react';

const Page = () => {
  const router = useRouter();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);

    const res = await signIn('credentials', {
      username: formData.get('username'),
      password: formData.get('password'),
      redirect: false,
    });

    if (res && !res.error) {
      router.push('/create');
    } else {
      console.log(res);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label>Email</label>
        <input type="text" name="username" placeholder="username" required />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" placeholder="Enter password" required />
      </div>
      <button type="submit">Sign In</button>
    </form>
  );
};

export default Page;
