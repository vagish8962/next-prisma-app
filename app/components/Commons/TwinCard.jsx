import React from 'react';
import Button from './Button';

function TwinCard({ empTwinImg, empTwinCode, empTwinContent }) {
    return (
        <div className='flex flex-col py-4 px-8 bg-white shadow-2xl rounded-2xl mx-5 relative'>
            <div class="flex text justify-center">
                <img src={empTwinImg} alt="" />
            </div>
            <h4 className='bg-hard-blue text-white font-semibold border border-sky-500 rounded-3xl justify-center w-32 m-auto mt-2 mb-10'>{empTwinCode}</h4>
            <p className='mb-12'>{empTwinContent}</p>
            <div className='absolute -bottom-10 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                <Button variant="live" size="normal">. Live</Button>
            </div>
        </div>
    )
}

export default TwinCard