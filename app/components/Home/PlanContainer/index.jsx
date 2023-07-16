import React from 'react'
import Plan from '../../Commons/Plan';

function PlanContainer() {
    return (
        <div className="max-w-[2520px] m-auto text-center p-14">
            <h2 className='font-bold text-4xl py-8'>Select the <span className='text-purple'> Right Twin </span>for you</h2>
            <p className='mb-10'>Lorem Ipsum is simply dummy text of the printing and type setting industry.</p>
            <div className='flex justify-between'>
                <Plan
                    imgSrc="/images/hap_logo.png"
                    title="BASIC PLAN"
                    description="Lorem Ipsum is simply dummy text of the setting industry."
                    priceDetail={
                        {
                            price: '$0',
                            content: 'a month, until end of 2023'
                        }
                    }
                    active={true}
                    variant="secondary"
                    buyNow='Buy Now'
                />

                <Plan
                    imgSrc="/images/hap_logo.png"
                    title="BASIC PLAN"
                    description="Lorem Ipsum is simply dummy text of the setting industry."
                    priceDetail={
                        {
                            price: '$0',
                            content: 'a month, until end of 2023'
                        }
                    }
                    active={true}
                    variant="secondary"
                    buyNow='Buy Now'
                />


                <Plan
                    imgSrc="/images/hap_logo.png"
                    title="BASIC PLAN"
                    description="Lorem Ipsum is simply dummy text of the setting industry."
                    priceDetail={
                        {
                            price: '$0',
                            content: 'a month, until end of 2023'
                        }
                    }
                    active={false}
                    buyNow='Buy Now'
                />
            </div>
        </div >
    )
}

export default PlanContainer;