/* eslint-disable react/no-unescaped-entities */
import React from 'react'
var axios = require('axios');
var FormData = require('form-data');

const Main = () => {


    const [parcelNotes, setParcelNotes] = React.useState('')
    const [parcelCost, setParcelCost] = React.useState('')
    const [parcelStartingLocation, setParcelStartingLocation] = React.useState('')
    const [parcelDestination, setParcelDestination] = React.useState('')

    const [senderName, setSenderName] = React.useState('')
    const [senderPhone, setSenderPhone] = React.useState('')
    const [senderAddress, setSenderAddress] = React.useState('')

    const [receiverName, setReceiverName] = React.useState('')
    const [receiverPhone, setReceiverPhone] = React.useState('')
    const [receiverAddress, setReceiverAddress] = React.useState('')


    const postParcel = async () => {

        var data = new FormData();
        data.append('parcelCost', parcelCost);
        data.append('parcelNotes', parcelNotes);
        data.append('parcelStartingLocation', parcelStartingLocation);
        data.append('parcelDestination', parcelDestination);
        data.append('senderName', senderName);
        data.append('senderPhoneNumber', senderPhone);
        data.append('senderAddress', senderAddress);
        data.append('receiverName', receiverName);
        data.append('receiverPhoneNumber', receiverPhone);
        data.append('receiverAddress', receiverAddress);
        data.append('postedBy', sessionStorage.getItem('user'));

        var config = {
            method: 'post',
            url: 'https://parcel-next-js.vercel.app/parcel',
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                alert('Parcel added posted')
                setParcelCost('')
                setParcelNotes('')
                setParcelStartingLocation('')
                setParcelDestination('')
                setSenderName('')
                setSenderPhone('')
                setSenderAddress('')
                setReceiverName('')
                setReceiverPhone('')
                setReceiverAddress('')
            })
            .catch(function (error) {
                for (let i = 0; i < error.response.data.errors.length; i++) {
            alert(error.response.data.errors[i].msg)
          }
               // console.log(error);
            });

    }


    return (
        <div className='p-10'>
            <p className='text-5xl md:text-left text-center my-4 text-green-600 font-serif'>Add A Parcel</p>
            <p className='text-3xl md:text-left text-center my-6 text-green-300 font-serif'>Parcel Info</p>
            <div className='flex md:flex-wrap flex-nowrap md:flex-row md:justify-start md:items-start flex-col justify-center items-center'>
                <div className='md:w-1/3 w-4/5 mx-5 my-3'>
                    <label className="block mb-2 text-sm font-medium text-[#8BCA3A]">Notes About The Parcel</label>
                    <input placeholder='Enter Here....' value={parcelNotes} onChange={(e) => { setParcelNotes(e.target.value) }} type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='md:w-1/3 w-4/5 mx-5 my-3'>
                    <label className="block mb-2 text-sm font-medium text-[#8BCA3A]">Parcel Cost</label>
                    <input placeholder='Enter Here....' value={parcelCost} onChange={(e) => { setParcelCost(e.target.value) }} type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='md:w-1/3 w-4/5 mx-5 my-3'>
                    <label className="block mb-2 text-sm font-medium text-[#8BCA3A]">Parcel Staring Location</label>
                    <input placeholder='Enter Here....' value={parcelStartingLocation} onChange={(e) => { setParcelStartingLocation(e.target.value) }} type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='md:w-1/3 w-4/5 mx-5 my-3'>
                    <label className="block mb-2 text-sm font-medium text-[#8BCA3A]">Parcel Ending Location</label>
                    <input placeholder='Enter Here....' value={parcelDestination} onChange={(e) => { setParcelDestination(e.target.value) }} type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
            </div>
            <p className='text-3xl md:text-left text-center my-6 text-green-300 font-serif'>Sender's Info</p>
            <div className='flex md:flex-wrap flex-nowrap md:flex-row md:justify-start md:items-start flex-col justify-center items-center'>
                <div className='md:w-1/3 w-4/5 mx-5 my-3'>
                    <label className="block mb-2 text-sm font-medium text-[#8BCA3A]">Name</label>
                    <input placeholder='Enter Here....' value={senderName} onChange={(e) => { setSenderName(e.target.value) }} type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='md:w-1/3 w-4/5 mx-5 my-3'>
                    <label className="block mb-2 text-sm font-medium text-[#8BCA3A]">Address</label>
                    <input placeholder='Enter Here....' value={senderAddress} onChange={(e) => { setSenderAddress(e.target.value) }} type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='md:w-1/3 w-4/5 mx-5 my-3'>
                    <label className="block mb-2 text-sm font-medium text-[#8BCA3A]">Phone</label>
                    <input placeholder='Enter Here....' value={senderPhone} onChange={(e) => { setSenderPhone(e.target.value) }} type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
            </div>
            <p className='text-3xl md:text-left text-center my-6 text-green-300 font-serif'>Receiver's Info</p>
            <div className='flex md:flex-wrap flex-nowrap md:flex-row md:justify-start md:items-start flex-col justify-center items-center'>
                <div className='md:w-1/3 w-4/5 mx-5 my-3'>
                    <label className="block mb-2 text-sm font-medium text-[#8BCA3A]">Name</label>
                    <input placeholder='Enter Here....' value={receiverName} onChange={(e) => { setReceiverName(e.target.value) }} type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='md:w-1/3 w-4/5 mx-5 my-3'>
                    <label className="block mb-2 text-sm font-medium text-[#8BCA3A]">Address</label>
                    <input placeholder='Enter Here....' value={receiverAddress} onChange={(e) => { setReceiverAddress(e.target.value) }} type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div className='md:w-1/3 w-4/5 mx-5 my-3'>
                    <label className="block mb-2 text-sm font-medium text-[#8BCA3A]">Phone</label>
                    <input placeholder='Enter Here....' value={receiverPhone} onChange={(e) => { setReceiverPhone(e.target.value) }} type="text" id="small-input" className="block p-2 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-xs focus:ring-blue-500 focus:border-blue-500" />
                </div>
            </div>
            <button className='text-gray-900 mt-8 mx-5 sm:mb-28 mb-40 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2' onClick={postParcel}>Add Parcel</button>
        </div>
    )
}

export default Main
