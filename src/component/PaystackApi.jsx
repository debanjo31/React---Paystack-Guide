import React, {useState, useEffect} from 'react'
import axios from "axios";
import qs from 'qs';

// Axios is to make a POST request to an API endpoint with a query string, then sets the response data to the state and displays it as a stringified JSON object.

function PaystackApi() {
    
  const [formData, setFormData] = useState({
    email: '',
    amount: '',
  })
  const { email, amount } = formData;
  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  
var data = qs.stringify({
  'email': 'person@email.com',
  'amount': (amount*100).toString(),
  'currency': 'NGN',
  'callback_url': 'https://example.com/',
  'invoice_limit': '10',
  'metadata': '{"cart_id":398,"custom_fields":[{"display_name":"Invoice ID","variable_name":"Invoice ID","value":209},{"display_name":"Cart Items","variable_name":"cart_items","value":"3 bananas, 12 mangoes"}]}',
  'transaction_charge': '12300',
  'bearer': 'subaccount' 
});
var config = {
  method: 'post',
maxBodyLength: Infinity,
  url: 'https://api.paystack.co/transaction/initialize',
  headers: { 
    'Content-Type': 'application/x-www-form-urlencoded', 
    'Accept': 'application/json', 
    'Authorization': 'Bearer sk_test_cd00c421a5189ede975cad7f3363c730b298bddf', 
    'Cookie': 'sails.sid=s%3AN_XC2DKyr5Ox5s_RJd6Q69z9MRZWOjlZ.hSYd5i0HBVFFT4PQCHzGG9JptlqLaS116XExCMC1NgM'
  },
  data : data
};

const onSubmit = (e) => {
    e.preventDefault();
   
    
        axios(config)
        .then(function (response) {
          const paystack = (JSON.stringify(response.data));
          console.log(paystack)
          const url = JSON.parse(paystack);
          let authorization_url = url.data.authorization_url;
          console.log(authorization_url)
          window.location.href = authorization_url;
        })
        .catch(function (error) {
          console.log(error);
        });
       
   
  }

  

  return (
    <div>
         <form onSubmit={onSubmit} className='mt-2'>
                  <input type="text" placeholder='Email' value={email} name="email" id="email" onChange={onChange} className='block rounded-lg bg-[#f2d7f4] p-1 pl-2 w-80 mx-auto mb-2' />
                  <input type="number" placeholder='amount' value={amount} name="amount" id="amount"  onChange={onChange} className='block rounded-lg bg-[#f2d7f4] p-1 pl-2 w-80 mx-auto mb-4'/>
                  <button  className='bg-[#340438] text-white hover:bg-white border-2  border-[#340438] hover:text-[#340438] p-2 px-16 rounded-xl'>Pay</button>
               </form>
    </div>
  )
}

export default PaystackApi