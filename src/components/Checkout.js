import React, { useEffect, useState } from 'react';
import { Stepper, Step, StepLabel } from '@mui/material';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Confirmation from './Confirmation';
import { commerce } from '../lib/commerce';

const steps = ['Shipping Address', 'Payment Details']

const Checkout = ({cart}) => {

    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, {type: 'cart'});
                console.log("Token-->" + token);
                setCheckoutToken(token);
            }
            catch {
                
            }
        }
        generateToken();
    }, [cart]);
    console.log({checkoutToken});

    const Form = () => activeStep === 0 
    ? <AddressForm checkoutToken={checkoutToken} nextStep={nextStep} /> 
    : <PaymentForm checkoutToken={checkoutToken}  nextStep={nextStep} backStep={backStep} />

    return (
        <div className='container my-3'>
            <div className='card p-4'>
                <h4 className='text-center'>Checkout</h4>
                <Stepper activeStep={activeStep} className="stepper my-3">
                    {steps.map((step) => (
                        <Step key={step}>
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                {activeStep === steps.length ? <Confirmation/> : checkoutToken && <Form/>}
            </div>
        </div>
    )
}

export default Checkout