import React, { useState } from 'react'
import { IoMdPerson } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaLocationDot, FaPhone } from "react-icons/fa6";
import useFetch from '../hooks/useFetch';

const User = () => {

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [location, setLocation] = useState("");
    // const [phone, setPhone] = useState("");
    // const [photo, setPhoto] = useState("");

    const { fetchData, result, loading, error } = useFetch('https://randomuser.me/api/');

    const handleRefresh = () => {
        fetchData()
        // setName(data.results[0].name.first + " " + data.results[0].name.last)
        // setEmail(data.results[0].email)
        // setLocation(data.results[0].location.country)
        // setPhone(data.results[0].phone)
        // setPhoto(data.results[0].picture.large)
    }

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="w-[65%] h-[65%] pt-16 m-32 text-center bg-slate-100 border-r-2 border-slate-300 border-b-2 shadow-md">
            <div className="flex flex-col items-center justify-center">
                <img 
                src={result.results[0].photo}
                alt='photo'
                className='w-48 h-48 rounded-full'
                />
                <p className="text-5xl font-sans pt-4 text-gray-700">Hello!</p>
                <button 
                className='w-36 h-14 mt-4 text-slate-100 bg-purple-700 rounded-full text-xl font-sans hover:bg-purple-500 hover:text-white hover:shadow-md'
                onClick={handleRefresh}
                >Refresh</button>

                <div className="group pt-4">
                <p className="text-2xl font-sans pt-2 text-gray-600">My name is <span className='text-purple-600'>{result.results[0].name}</span></p>
                <p className="text-2xl font-sans pt-2 text-gray-600">My email address is <span className='text-purple-600'>{}</span></p>
                <p className="text-2xl font-sans pt-2 text-gray-600">I am from <span className='text-purple-600'>{}</span></p>
                <p className="text-2xl font-sans pt-2 text-gray-600">My phone number is <span className='text-purple-600'>{}</span></p>
                
                </div>
                <div className="flex flex-row items-center justify-center pt-6 gap-6">
                    <IoMdPerson className="w-12 h-12 text-purple-900 hover:text-purple-400 "  />
                    <MdEmail className="w-12 h-12 text-purple-900 hover:text-purple-400" />
                    <FaLocationDot className="w-10 h-10 text-purple-900 hover:text-purple-400" />
                    <FaPhone className="w-10 h-10 text-purple-900 hover:text-purple-400" />
                </div>
            </div>
        </div>
  )
}

export default User