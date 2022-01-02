import React,{useState,useEffect} from 'react'
import Parcel from '../components/Parcel'
 var axios = require('axios');
var FormData = require('form-data');

const MyParcels = () => {
    const [parcels, setParcels] = useState([]);

    useEffect(() => {
        let token = sessionStorage.getItem('token')
        var data = new FormData();
        var config = {
            method: 'get',
            url: 'https://parcel-next-js.vercel.app/parcel',
            headers: {
                'Authorization': 'Bearer ' + token
            },
            data: data
        };

        axios(config)
            .then(function (response) {
               // console.log(JSON.stringify(response.data));
                setParcels(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

    }, [])

    return (
         <div className='bg-yellow-100 p-10 h-[850px]'>
            <p className='text-5xl text-green-600 font-serif'>Parcels Posted By You</p>
            {parcels.length==0?<p className='text-5xl text-center text-green-600 font-mono mt-40'>No Parcels Posted Yet</p>:parcels.map((parcel,index)=>{
                return <Parcel key={index} data={parcel}/>
            })}
         </div>
    )
}

export default MyParcels
