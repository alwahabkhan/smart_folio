import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function EducationForm() {
    const [startDate, setStartDate] = useState(null); 
    const [endDate, setEndDate] = useState(null);

    return (
        <div className="min-h-screen flex flex-col w-4/5 mx-auto justify-center">
            <h1 className="text-2xl font-bold">Tell us about your education</h1>
            <h3 className="text-gray-600 pb-5">Include every school, even if you're still there or didn't graduate.</h3>
            <div className="w-80%">
                <form action="">
                    <div className="flex flex-wrap space-y-4">
                        <div className='w-full flex flex-row'>
                            <div className="w-full md:w-1/2 px-2">
                                <div className="flex flex-col">
                                    <label htmlFor="school_name" className="mb-2">School Name</label>
                                    <input type="text" className='border rounded-lg w-full p-2' placeholder='e.g Foundation University' />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-2">
                                <div className="flex flex-col">
                                    <label htmlFor="school_location" className='mb-2'>School Location</label>
                                    <input type="text" className='border rounded-lg w-full p-2' placeholder='e.g Rawalpindi' />
                                </div>
                            </div>
                        </div>

                        <div className="w-full md:w-1/2 px-2">
                            <div className="flex flex-col">
                                <label htmlFor="degree" className='mb-2'>Degree</label>
                                <select name="" id="" className='border rounded-lg w-full p-2'>
                                    <option value="">Select your degree</option>
                                    <option value="bachelor">Bachelor of Science</option>
                                    <option value="master">Bachelor of Arts</option>
                                    <option value="phd">Bachelor of Education</option>
                                    <option value="bachelor">Bachelor of Business Administration</option>
                                    <option value="master">Bachelor of Liberal Arts</option>
                                    <option value="phd">Bachelor of Social Work</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap space-y-4">
                        <div className='w-full flex flex-row my-3'>
                            <div className="w-full md:w-1/2 px-2">
                                <div className="flex flex-col">
                                    <label htmlFor="field_of_study" className='mb-2'>Field Of Study</label>
                                    <input type="text" className='border rounded-lg w-full p-2' placeholder='e.g Computer Science' />
                                </div>
                            </div>
                            <div className="w-full md:w-1/4 px-2">
                                <div className="flex flex-col">
                                    <label htmlFor="graduation_start_date" className='mb-2'>Graduation Start Date</label>
                                    <DatePicker
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)}
                                        className='border rounded-lg w-full p-2'
                                        placeholderText='Select Date'
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-1/4 px-2">
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

export default EducationForm;
