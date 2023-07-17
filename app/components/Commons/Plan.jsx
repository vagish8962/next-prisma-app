import React from 'react';
import Image from "next/image";
import classNames from 'classnames';
import Button from '../Commons/Button'

function Plan({ imgSrc, title, description, priceDetail, active: isActive, buyNow }) {
    return (
        <div className={classNames('flex justify-center flex-col rounded-3xl p-8 border-2', isActive ? 'bg-medium-blue text-white' : 'bg-light-blue text-medium-blue border-light-blue')}>
            <Image
                className="max-w-md mx-auto"
                src={imgSrc}
                height="100"
                width="100"
                alt="HAP"
            />
            <h3 className='my-4'>{title}</h3>
            <p className='my-4'>{description}</p>
            <h2 className='my-4 text-4xl'>{priceDetail?.price}</h2>
            <p className='my-4'>{priceDetail.content}</p>
            {
                isActive ? <Button variant="secondary" size="large">{buyNow}</Button>
                    : <Button variant="primary" size="large">{buyNow}</Button>

            }
        </div>
    )
}
export default Plan
