import React from 'react';
import { Button } from 'react-bootstrap';

const SendRequest = () => {
    return (
        <div className='py-2'>
            <h6 style={{ backgroundColor: "#EEF2FE", padding: "10px" }}>Your wallet is connected to Ethereum Kovan, so you are requesting Ethereum Kovan Link/ETH.</h6>
            <form action="">
                <div>
                    <label style={{ color: "#9B1FE9" }} className="fw-bold" htmlFor="">Wallet Address</label> <br />
                    <input className='w-50 p-2 border' type="text" name="" id="" placeholder='Wallet Adress...'/>
                </div>
                <div>
                    <label style={{ color: "#9B1FE9" }} className="fw-bold" htmlFor="">Request Type</label> <br />
                    <div>
                        <input className='me-2 mb-2 w-25 p-2' type="text" name="" id="" disabled placeholder='20 Test Link' />
                        <input className='w-25 p-2' type="text" name="" id="" disabled placeholder='0.5 ETH'/>
                    </div>
                </div>
                <Button>Send Request</Button>
            </form>
        </div>
    );
};

export default SendRequest;