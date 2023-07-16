import React from 'react'

function InnerWidget({ title, desp }) {
    return (
        <div className='p-10 rounded-3xl bg-container-blue border-lighter-blue border m-10 flex items-center justify-center flex-col'>
            <h3 className='text-yellow text-4xl'>{title}</h3>
            <h5 className='text-white text-sm mt-5'>{desp}</h5>
        </div>
    )
}

export default InnerWidget