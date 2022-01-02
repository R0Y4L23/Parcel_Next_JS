import React,{useState} from 'react'
import Parcel from '../components/Parcel'

const MyParcels = () => {
    const [parcels, setParcels] = useState([]);
    return (
         <div className='bg-yellow-100 p-10 h-[850px]'>
            <p className='text-5xl text-green-600 font-serif'>Parcels Posted By You</p>
            {parcels.length==0?<p className='text-5xl text-center text-green-600 font-mono mt-40'>No Parcels Posted Yet</p>:parcels.map(parcel=>{
                return <Parcel key={parcel} data={parcel}/>
            })}
         </div>
    )
}

export default MyParcels
