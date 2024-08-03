// import React from 'react'
import { Link } from 'react-router-dom'
import { IoLogOutOutline } from "react-icons/io5";

function UserIconOptions() {
  return (
    <div className='absolute top-3/4 right-5 w-52 border p-3 bg-white rounded-lg shadow'>
        <div>
            <ul>
                <li className='p-1 hover:bg-gray-100 cursor-pointer'><Link>My Profile</Link></li>
                <li className='p-1 hover:bg-gray-100 cursor-pointer'><Link>Favorites</Link></li>
                <hr className='border-2 my-1'/>
                <li className='p-1 hover:bg-gray-100 cursor-pointer'>
                    <Link to={"/signin"}>
                        <div className='flex items-center gap-3'>
                            <span>Log out</span>
                            <IoLogOutOutline size={20}/>
                        </div>
                    </Link>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default UserIconOptions