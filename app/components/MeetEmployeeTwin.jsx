import React from 'react'
import Image from "next/image";
import PropTypes from 'prop-types'

function MeetEmployeeTwin(props) {
    return (
        <div className="max-w-[2520px] m-auto bg-light-blue">
            <div className="flex flex-col px-32">
                <h2 className='font-bold text-4xl p-8 text-hard-blue'>Meet your <b className='text-purple font-extrabold'>Employee Twin</b></h2>
                <div className='flex justify-center items-center'>
                    <img
                        className="w-full max-h-80 align-middle justify-center mt-20"
                        src='/images/ee.webp'
                    />
                    <div className="text-3xl text-hard-blue p-12 tracking-wider font-medium">
                        <p>It is a digital team member trained to carry out a business process just like any employee, <b className='opacity-50'>only faster and without mistakes. The Future of work will have Al join the team, with Employee twins working alongside humans in the future.</b></p>
                        <p className="mt-16 opacity-50">
                            Our Objective - All team members to interact with the Employee twin, triggering actions, reports, asking queries and therefore, focus on strategic activities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

MeetEmployeeTwin.propTypes = {}

export default MeetEmployeeTwin
