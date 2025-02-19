import { FaRegUserCircle } from 'react-icons/fa';
import { MdOutlineNotificationsNone } from 'react-icons/md';
import { TiThMenu } from 'react-icons/ti';

export default function Header(){
    return(
        <header className='py-5 px-5 flex justify-between'>
            <div className='flex items-center gap-5'>
                <TiThMenu className='text-2xl' />
                <h1 className='text-2xl font-bold'>
                    Order
                </h1>
            </div>
            <div className='flex items-center gap-5'>
                <MdOutlineNotificationsNone className='text-2xl' />
                <FaRegUserCircle className='text-2xl' />
            </div>
        </header>
    )
}