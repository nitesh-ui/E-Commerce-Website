import React from 'react';
import { useForm, Controller } from 'react-hook-form';

const AddressForm = () => {

    const {control, handleSubmit} = useForm();
    const onSubmit = (data) => {
        alert(data);
    }

    return (
        <>
            <h6 className='p-2'>Shipping Address</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='container'>
                    <div className='row'>
                        <div className="col-xs-12 col-sm-6">
                            <Controller
                                name="firstName"
                                control={control}
                                rules={{ required: true }}
                                render={({field}) => <input type="text" className='form-control mb-3' placeholder="First name" />}
                            />
                        </div> 
                        <div className="col-xs-12 col-sm-6">   
                            <Controller
                                name="lastName"
                                control={control}
                                render={({field}) => <input type="text" className='form-control mb-3' placeholder="Last name" />}
                            />
                        </div>    
                        <div className="col-xs-12 col-sm-6">
                            <Controller
                                name="address"
                                control={control}
                                render={({field}) => <input type="text" className='form-control mb-3' placeholder="Address" />}
                            />
                        </div>    
                        <div className="col-xs-12 col-sm-6">
                            <Controller
                                name="email"
                                control={control}
                                render={({field}) => <input type="text" className='form-control mb-3' placeholder="Email" />}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <Controller
                                name="city"
                                control={control}
                                render={({field}) => <input type="text" className='form-control mb-3' placeholder="City" />}
                            />
                        </div>
                        <div className="col-xs-12 col-sm-6">
                            <Controller
                                name="zipcode"
                                control={control}
                                render={({field}) => <input type="text" className='form-control mb-3' placeholder="Zip Code" />}
                            />
                        </div>
                    </div>
                </div>
                <div className='d-flex justify-content-space-between'>
                    <button type="submit">Next</button>
                </div>
            </form>
        </>
    )
}

export default AddressForm