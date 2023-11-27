import React from 'react';

function ContactForm() {
  return (
    <div className="min-h-screen flex flex-col w-4/5 mx-auto justify-center">
      <h1 className="text-2xl font-bold">Resume Heading</h1>
      <h3 className="text-gray-600 pb-5">We suggest including an email and phone number</h3>
      <div className="w-80%">
        <form action="">

          <div className="flex flex-wrap space-y-4">
            <div className='w-full flex flex-row'>
            <div className="w-full md:w-1/2 px-2">
              <div className="flex flex-col">
                <label htmlFor="first_name" className="mb-2">First Name</label>
                <input type="text" className='border rounded-lg w-full p-2' placeholder='e.g Alwahab' />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="flex flex-col">
                <label htmlFor="sur_name" className='mb-2'>Sur Name</label>
                <input type="text" className='border rounded-lg w-full p-2' placeholder='e.g Khan' />
              </div>
            </div>
            </div>
            
            <div className="w-full px-2">
              <div className="flex flex-col">
                <label htmlFor="profession" className='mb-2'>Profession</label>
                <input type="text" className='border rounded-lg w-full p-2' placeholder='e.g Software Engineer' />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap space-y-4">
          <div className='w-full flex flex-row my-3'>
          <div className="w-full md:w-1/3 px-2">
              <div className="flex flex-col">
                <label htmlFor="city" className='mb-2'>City</label>
                <input type="text" className='border rounded-lg w-full p-2' placeholder='e.g Rawalpindi' />
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2">
              <div className="flex flex-col">
                <label htmlFor="country" className='mb-2'>Country</label>
                <input type="text" className='border rounded-lg w-full p-2' placeholder='e.g Pakistan' />
              </div>
            </div>
            <div className="w-full md:w-1/3 px-2">
              <div className="flex flex-col">
                <label htmlFor="postal_code" className='mb-2'>Postal Code</label>
                <input type="text" className='border rounded-lg w-full p-2' placeholder='e.g 46000' />
              </div>
            </div>
            </div>
          </div>

          <div className="flex flex-wrap space-y-4">
            <div className='w-full flex flex-row'>
            <div className="w-full md:w-1/2 px-2">
              <div className="flex flex-col">
                <label htmlFor="phone_no" className='mb-2'>Phone No</label>
                <input type="text" className='border rounded-lg w-full p-2' placeholder='e.g +92123456789' />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="flex flex-col">
                <label htmlFor="email" className='mb-2'>Email</label>
                <input type="text" className='border rounded-lg w-full p-2' placeholder='e.g abc@gmail.com' />
              </div>
            </div>
            </div>   
          </div>

          <div className="flex justify-between px-2 py-5">
            <button className='p-2 bg-white-500 border border-black text-black rounded-full px-10'>Back</button>
            <button className='p-2 bg-yellow-500 text-black rounded-full px-10'>Save & Next</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
