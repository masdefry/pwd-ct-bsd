'use client';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function OrderPage(){
    const router = useRouter();
    const searchParams = useSearchParams();

    const updateSearchParams = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>, key: string) => {
        const params = new URLSearchParams(searchParams.toString());
        if(e.target.value){
            params.set(key, e.target.value);
        }else{
            params.delete(key)
        }
        router.push(`?${params.toString()}`, { scroll: false });
    };

    const fetchPurchaseOrders = async() => {
        try {
            const params = Object.fromEntries(searchParams.entries()); // to Object Conversion
            
            const res = await fetch(`/api/purchase-orders?${searchParams.toString()}`);
        } catch (error) {
            console.log(error)
        }
    }
    
    useEffect(() => {
        // fetchPurchaseOrders()
    }, [searchParams])

    const {data: queryPurchaseOrders} = useQuery({
        queryKey: ['get-purchase-orders', searchParams.toString()],
        queryFn: async() => {
            console.log('Query')
            console.log(searchParams.toString())
            const params = Object.fromEntries(searchParams.entries());
            const res = await fetch(`/api/purchase-orders?${searchParams.toString()}`);
        }
    })

    return(
        <section className='px-5 py-10'>
            <div className='flex justify-between items-center'>
                <label className='input input-bordered flex items-center gap-2 rounded-full'>
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
                    <input type='text' onChange={(e) => updateSearchParams(e, 'search')} className='grow' placeholder='Search' />
                </label>
                <details className='dropdown'>
                    <summary className='btn m-1 bg-green-700 text-white rounded-full'>Create Order</summary>
                    <ul className='menu dropdown-content bg-base-100 rounded-box z-[1] w-32 p-2 shadow'>
                        <li><a>Purchase Order</a></li>
                        <li><a>Sales Order</a></li>
                    </ul>
                </details>
            </div>

            <div className='flex items-center justify-between'>
                <select onChange={(e) => updateSearchParams(e, 'order-type')} className='select select-bordered w-full max-w-xs text-gray-300'>
                    <option value='' selected>Purchase Type</option>
                    <option value='order'>Order</option>
                    <option value='sales'>Sales</option>
                </select>
                <div className='flex justify-end items-center gap-3 flex-1'>
                    <select className='select select-bordered w-xs max-w-xs text-gray-300'>
                        <option disabled selected>Order Type</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <select className='select select-bordered w-xs max-w-xs text-gray-300'>
                        <option disabled selected>Status</option>
                        <option>Han Solo</option>
                        <option>Greedo</option>
                    </select>
                    <h1 className='text-gray-300'>
                        1-3 Pages
                    </h1>
                </div>
            </div>
            
            <div className='py-10'>
                <div className='overflow-x-auto'>
                    <table className='table'>
                        <thead className='text-lg'>
                            <tr>
                                <th>
                                <label>
                                    <input type='checkbox' className='checkbox' />
                                </label>
                                </th>
                                <th>Name</th>
                                <th>Job</th>
                                <th>Favorite Color</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                    </th>
                                    <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Avatar Tailwind CSS Component" />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                    </th>
                                    <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Avatar Tailwind CSS Component" />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                    </th>
                                    <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Avatar Tailwind CSS Component" />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                    </th>
                                    <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Avatar Tailwind CSS Component" />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                    </th>
                                    <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Avatar Tailwind CSS Component" />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                    </th>
                                    <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Avatar Tailwind CSS Component" />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                    </th>
                                    <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Avatar Tailwind CSS Component" />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                            <tr>
                                <th>
                                    <label>
                                        <input type="checkbox" className="checkbox" />
                                    </label>
                                    </th>
                                    <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                            alt="Avatar Tailwind CSS Component" />
                                        </div>
                                        </div>
                                        <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">United States</div>
                                        </div>
                                    </div>
                                    </td>
                                    <td>
                                    Zemlak, Daniel and Leannon
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                                    </td>
                                    <td>Purple</td>
                                    <th>
                                    <button className="btn btn-ghost btn-xs">details</button>
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}