'use client';
import { useSession, signOut } from 'next-auth/react';
import Link from "next/link"

export default function Navbar(){
    const { data: session, status } = useSession();
    console.log('Nav')
    console.log(session)
    console.log(status)
    return(
        <nav className='p-3 bg-green-600 flex justify-between items-center text-white'>
            <h1 className='text-3xl font-bold'>
                Logo 
            </h1>
            {
                session?.user?.name?
                    <section className='flex items-center gap-3'>
                        <h1 className='text-xl font-bold'>
                            Hello, {session?.user?.name}
                        </h1>
                        <button
                            onClick={() => signOut()} 
                            className='btn bg-white text-black p-3 rounded-md'>
                            Sign Out
                        </button>
                    </section>
                :
                    <button className='btn bg-white text-black p-3 rounded-md'>
                        <Link href='/signin'>
                            Sign In 
                        </Link>
                    </button>
            }
        </nav>
    )
}