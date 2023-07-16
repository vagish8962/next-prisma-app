'use client';
import { BiSearch } from 'react-icons/bi';

function Search() {
    return (
        <div
            className="
                p-4 
                bg-hard-blue
                rounded-full 
              text-white
            "
        >
            <BiSearch size={18} />
        </div>
    );
}

export default Search;