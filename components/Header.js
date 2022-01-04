import React from 'react'
import  Image  from 'next/image';
import { SearchIcon, HomeIcon, FlagIcon, PlayIcon, ShoppingCartIcon, UserGraphIcon } from '@heroicons/react/outline'
import HeaderIcon from './HeaderIcon';


export default function Header() {
    return (
        <div>
            <div className="flex items-center">
                <Image width={40} height={40} layout='fixed' src="http://links.papareact.com/5me" />
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600"/>
                    <input type="text" className="
                    flex ml-2  outline-none items-center bg-transparent" placeholder="Search Facebook" />
                </div>
            </div>
            
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2">
                    <HeaderIcon  Icon={HomeIcon} />
                    <HeaderIcon  Icon={FlagIcon} />
                    <HeaderIcon  Icon={PlayIcon} />
                    <HeaderIcon  Icon={ShoppingCartIcon} />

                </div>
            </div>
            <div>
            </div>
        </div>
    )
}
