import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';


export default function Accordian() {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<div className='text-white text-3xl'>+</div>}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    className='bg-hard-blue text-white text-lg py-3'
                >
                    <label >Accordion 1</label>
                </AccordionSummary>
                <AccordionDetails>
                    <label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </label>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<div className='text-hard-blue text-3xl'>+</div>}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                    className='text-hard-blue bg-white text-lg py-3'
                >
                    <label>Accordion 2</label>
                </AccordionSummary>
                <AccordionDetails>
                    <label>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget.
                    </label>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<div className='text-white text-3xl'>+</div>}
                    aria-controls="panel3a-content"
                    id="panel3a-header"
                    className='bg-hard-blue text-white text-lg py-3'
                >
                    <label>Accordion</label>
                </AccordionSummary>
            </Accordion>
        </div>
    );
}