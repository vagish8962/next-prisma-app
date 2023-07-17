import React from 'react'
import Accordian from './Accordian';

function FrequentlyAskQues() {
    return (
        <div className='flex justify-around py-10'>
            <div className='flex flex-col font-semibold text-hard-blue text-6xl  leading-snug'>
                <h3><span className='text-green'>F</span>requently</h3>
                <h3><span className='text-green'>A</span>sked </h3>
                <h3><span className='text-green'>Q</span>uestions</h3>
            </div>
            <Accordian />
        </div>
    )
}

export default FrequentlyAskQues