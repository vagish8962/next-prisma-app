'use client';
import { BiSearch } from 'react-icons/bi';

function Search() {
    return (
        <div
            className="
                p-4 
                bg-pin-blue
                rounded-full 
                text-hard-blue
                font-bolder
            "
        >
            <BiSearch size={20} />
        </div>
    );
}

export default Search;