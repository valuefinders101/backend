import express from 'express';
import request from 'request';

export const InitializePayment = async (req, res) => {
    // initialize paystact payment
    const email = req.body.email;
    const amount = req.body.amount;
    const callback_url = 'http://localhost:3000/borrowVerifyOrder/';


    const options = {
        url: 'https://api.paystack.co/transaction/initialize/',
        method: 'POST',
        headers: {
            
            'Accept': 'application/json',
            'Accept-Charset': 'utf-8',
            'Content-Type': 'application/json',
            'Authorization' :'Bearer sk_test_1ae4fcb00d9fe5e4ac4bc7a3474ba883c836f0b2',
        },
       
        form: {
            'email': `${email}`,
            'amount': `${amount}`,
            'callback_url': `${callback_url}`,
            
        }
       
    };
            request(options, function(error, response, body){
                if(error) {
                    console.log(error.status);
                } else {
                let data = JSON.parse(body);
                res.status(200).send({ data});
                 console.log(body)
                 // res.send(data);
                }
            });

}

