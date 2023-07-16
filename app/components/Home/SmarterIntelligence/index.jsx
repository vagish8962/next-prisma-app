import React from 'react'
import Widget from '../../Commons/Widget';
import InnerWidget from '../../Commons/InnerWidget';

const widgetData = [
    {
        title: 31440,
        description: 'Manual Hour Saving'
    },
    {
        title: 20.56,
        description: 'FTE Saving'
    },
    {
        title: '24/7',
        description: 'availability Reduction of manual efforts '
    }
]

function SmarterIntelligence() {
    return (
        <div className="max-w-[2520px] m-auto bg-medium-blue" >
            <div className="flex flex-col px-32">
                <h2 className='font-bold text-4xl px-64 py-8 text-white'>Smarter and Intelligence <b className='text-green font-extrabold'>Digital Worker to carry out Business Processes</b></h2>
            </div>
            <div className='flex'>
                <Widget bgColor="#111795">
                    <div className='p-10 rounded-3xl bg-container-blue border-lighter-blue border'>
                        <div className='text-white text-2xl'>Workforce of the future =</div>
                        <div className='text-yellow text-2xl'>Human + </div>
                        <div className='text-yellow text-2xl'>Digital</div>
                    </div>
                </Widget>
                <div className='m-20'>
                    {
                        widgetData.map((eachWidget, key) => {
                            return (<Widget >
                                <InnerWidget title={eachWidget.title} desp={eachWidget.description} key={key} />
                            </Widget>)
                        })}
                </div>
            </div>
        </div >
    );
}

export default SmarterIntelligence