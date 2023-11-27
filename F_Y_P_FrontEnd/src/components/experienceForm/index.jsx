import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function ExperienceForm() {

  const [startDate, setStartDate] = useState(null); 
  const [endDate, setEndDate] = useState(null);
  return (
    <div className="min-h-screen flex flex-col w-4/5 mx-auto justify-center " >
      <h1 className="text-2xl font-bold">Tell us about your most recent job </h1>
      <h3 className="text-gray-600 pb-5">We'll start there and work backward</h3>
      <div className="w-80%">
        <form action="">

          <div className="flex flex-wrap space-y-4">
            <div className='w-full flex flex-row'>
            <div className="w-full md:w-1/2 px-2">
              <div className="flex flex-col">
                <label htmlFor="first_name" className="mb-2 ">Job Title</label>
                <input type="text" className='border rounded-lg w-full p-2' placeholder='e.g Retail Sales Associate' />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="flex flex-col">
                <label htmlFor="sur_name" className='mb-2' >Employer</label>
                <input type="text" className='border rounded-lg w-full p-2' placeholder='e.g H&M' />
              </div>
            </div>
            </div>
          </div>

          <div className="flex flex-wrap space-y-4">
          <div className='w-full flex flex-row my-3'>
          <div className="w-full md:w-1/2 px-2">
              <div className="flex flex-col">
                <label htmlFor="city" className='mb-2'>City</label>
                <input type="text" className='border rounded-lg w-full p-2' placeholder='e.g Rawalpindi' />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="flex flex-col">
                <label htmlFor="country" className='mb-2'>Country</label>
                <input type="text" className='border rounded-lg w-full p-2' placeholder='e.g Pakistan' />
              </div>
            </div>
            </div>
          </div>

          <div className="flex flex-wrap space-y-4">
            <div className='w-full flex flex-row'>
            <div className="w-full md:w-1/2 px-2">
              <div className="flex flex-col">
              <label htmlFor="start_date" className='mb-2'>Start Date</label>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        className='border rounded-lg w-full p-2'
                                        placeholderText='Select Date'
                                    />
              </div>
            </div>
            <div className="w-full md:w-1/2 px-2">
              <div className="flex flex-col">
              <label htmlFor="graduation_last_date" className='mb-2'>Graduation Last Date</label>
                                    <DatePicker
                                        selected={endDate}
                                        onChange={(date) => setEndDate(date)}
                                        className='border rounded-lg w-full p-2'
                                        placeholderText='Select Date'
                                    />
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
  )
}

export default ExperienceForm;
