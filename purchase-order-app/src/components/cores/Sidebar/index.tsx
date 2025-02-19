'use client';
import { HiOutlineHome } from 'react-icons/hi2';
import { IoIosLogOut } from 'react-icons/io';
import { usePathname } from 'next/navigation';
import { BsArrowLeftRight } from 'react-icons/bs';
import Link from 'next/link';

const listMenu = [
    { href: '/', name: 'Home', icon: <HiOutlineHome /> },
    { href: '/order', name: 'Order', icon: <BsArrowLeftRight /> }
]
function Sidebar(){
    const pathName = usePathname()
 
    return(
        <section className='px-3 py-2 flex flex-col justify-between h-full'>
           
                <div>
                    <h1 className='text-3xl font-bold text-green-500'>Logo</h1>

                    <div className='flex flex-col overflow-y-auto h-72 mt-5'>
                        {
                            listMenu.map((menu, index) => {
                                return(
                                    <Link key={index} className={`flex items-center gap-5 ${pathName === menu.href? 'bg-green-700 text-white' : 'text-black'} p-2 rounded-md`} href={menu?.href}>
                                        {menu.icon} <h1 className='text-md'>{menu.name}</h1>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
       

            
                <div className='p-3 rounded-md bg-green-300 text-green-900'>
                    <h1 className='font-bold'>Support</h1>
                    <h1>
                        defryan@purwadhika.com
                    </h1>
                    <h1>
                        +62 878 2200 4012
                    </h1>
                </div>

                <div className='border-t-2 border-b-2 py-5 mt-5 flex justify-between'>
                    <div className='flex gap-5'>
                        <div className='bg-gray-500 w-12 h-12 rounded-full flex'></div>
                        <div>
                            <h1 className='font-bold text-gray-500'>Defryan</h1>
                        </div>
                    </div>
                    <div>
                        <IoIosLogOut className='text-lg' />
                    </div>
                </div>
            
        </section>
    )
}

export default Sidebar;