import React from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';

const Checkout = () => {
    return (
        <div>
            <div className='card'>
                <Stepper>
                    <Step>
                        <StepLabel></StepLabel>
                    </Step>
                </Stepper>
            </div>
        </div>
    )
}

export default Checkout