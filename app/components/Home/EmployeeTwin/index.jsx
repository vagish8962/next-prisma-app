import React from 'react';
import TwinCard from '../../Commons/TwinCard';
import Button from '../../Commons/Button';

// HardCode data this will come from DB
const empTwinsData = [
    {
        empTwinImg: '/images/twin1.png',
        empTwinCode: 'ET1234',
        empTwinContent: 'Digital persona for the beauty and wellbeing team. Unilever Digital Twin is a smart digital worker with employee experience at its core. It not only enhances workforce productivity by automating various day to day operational tasks such as generation of complex reports, setting up meetings, notifying users and others on the go but also offers personalized employee interactions which paves way for a high degree of user experience.'
    },
    {
        empTwinImg: '/images/twin2.png',
        empTwinCode: 'ET1234',
        empTwinContent: 'Digital persona for the beauty and wellbeing team. Unilever Digital Twin is a smart digital worker with employee experience at its core. It not only enhances workforce productivity by automating various day to day operational tasks such as generation of complex reports, setting up meetings, notifying users and others on the go but also offers personalized employee interactions which paves way for a high degree of user experience.'
    },
    {
        empTwinImg: '/images/twin3.png',
        empTwinCode: 'ET1234',
        empTwinContent: 'Digital persona for the beauty and wellbeing team. Unilever Digital Twin is a smart digital worker with employee experience at its core. It not only enhances workforce productivity by automating various day to day operational tasks such as generation of complex reports, setting up meetings, notifying users and others on the go but also offers personalized employee interactions which paves way for a high degree of user experience.'
    },
    {
        empTwinImg: '/images/twin4.png',
        empTwinCode: 'ET1234',
        empTwinContent: 'Digital persona for the beauty and wellbeing team. Unilever Digital Twin is a smart digital worker with employee experience at its core. It not only enhances workforce productivity by automating various day to day operational tasks such as generation of complex reports, setting up meetings, notifying users and others on the go but also offers personalized employee interactions which paves way for a high degree of user experience.'
    }
]

function EmployeeTwin() {
    return (
        <div className="max-w-[2520px] m-auto text-center p-20 bg-off-white rounded-tl-30 border-separate rounded-tl-3xl custom-border-left-top">
            <h2 className="font-semibold text-hard-blue text-5xl py-8">
                Employee Twin
            </h2>
            <div className='flex mb-12'>
                {
                    empTwinsData.map((empTwinData) => <TwinCard
                        empTwinImg={empTwinData.empTwinImg}
                        empTwinCode={empTwinData.empTwinCode}
                        empTwinContent={empTwinData.empTwinContent}
                    />)
                }
            </div>
            <Button variant="primary" size="large">All Employee Twin</Button>
        </div>
    )
}

export default EmployeeTwin