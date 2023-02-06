import React, {useState} from 'react'
import { usePaystackPayment } from 'react-paystack'
function Paystackinline() {
  
  const [formData, setFormData] = useState({
    email: '',
    amount: '',
  })
  const { email, amount } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }))
  }
  const config = {
    reference: (new Date()).getTime().toString(),
    email: email,
    amount: amount * 100, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
    publicKey: 'pk_test_96989a80f4367bf52f418c928b2723d57ad443bf',
};
const initializePayment = usePaystackPayment(config); 

  const onSubmit = (e) => {
    e.preventDefault();
    initializePayment(onSuccess, onClose)
  }
  // you can call this function anything
  const onSuccess = (reference) => {
    // Implementation for whatever you want to do with reference and after success call.
    console.log(reference);
  };

  // you can call this function anything
  const onClose = () => {
    // implementation for  whatever you want to do when the Paystack dialog closed.
    console.log('closed')
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

export default Paystackinline