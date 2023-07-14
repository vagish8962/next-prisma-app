'use client';
import { BiSearch } from 'react-icons/bi';

function Search() {
    return (
        <div
            className="
              p-4 
              bg-blue-500 
              rounded-full 
              text-white
            "
        >
            <BiSearch size={18} />
        </div>
    );
}

export default Search;