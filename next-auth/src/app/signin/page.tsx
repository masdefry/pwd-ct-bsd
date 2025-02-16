'use client';
import { signIn } from 'next-auth/react';
import { useState } from 'react';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
    });
    
    if (res?.error) {
      alert(res.error);
    } else {
      alert('Login successfully')
    }
  };

  return (
    <section className='flex flex-col items-center p-5'>
      <h1 className='text-3xl font-bold p-5'>Welcome Back</h1>
      <form onSubmit={handleSubmit} className='flex flex-col w-1/2 gap-3'>
        <input type='email' className='input border border-gray-300 p-3 rounded-md' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' required />
        <input type='password' className='input border border-gray-300 p-3 rounded-md' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' required />
        <button type='submit' className='btn bg-green-600 text-white p-3 rounded-md'>Sign In</button>
        <button className='btn bg-red-500 text-white w-full p-3 rounded-md' onClick={() => signIn('google')}>Login with Google</button>
      </form>
    </section>
  );
}
