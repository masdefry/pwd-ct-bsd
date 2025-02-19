import { BsBuildings } from 'react-icons/bs';
import { PiPackageLight } from 'react-icons/pi';
export default function CreateOrder(){
    return(
        <section className='grid grid-cols-5 p-5'>
            <div className='col-span-4'>
                <div className='py-3'>
                    <label className='flex items-center gap-3'>
                        <BsBuildings className='text-xl' />
                        <h1 className='text-lg'>
                            Seller Info
                        </h1>
                    </label>
                    <label className='input input-bordered flex items-center gap-2 rounded-full mt-5'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 16 16'
                            fill='currentColor'
                            className='h-4 w-4 opacity-70'>
                            <path
                            fillRule='evenodd'
                            d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                            clipRule='evenodd' />
                        </svg>
                        <input type='text' className='grow' placeholder='Search' />
                    </label>
                </div>
                <div className='py-3'>
                    <label className='flex items-center gap-3'>
                        <PiPackageLight className='text-xl' />
                        <h1 className='text-lg'>
                            Add Product
                        </h1>
                    </label>
                    <label className='input input-bordered flex items-center gap-2 rounded-full mt-5'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 16 16'
                            fill='currentColor'
                            className='h-4 w-4 opacity-70'>
                            <path
                            fillRule='evenodd'
                            d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                            clipRule='evenodd' />
                        </svg>
                        <input type='text' className='grow' placeholder='Search' />
                    </label>
                </div>
            </div>
            <div>

            </div>
        </section>
    )
}