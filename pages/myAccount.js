import { data } from 'autoprefixer';
import React,{useEffect} from 'react'
 var axios = require('axios');

const MyAccount = () => {

    const [dataOfUser, setDataOfUser] = React.useState(null)


    useEffect(() => {
        let token = sessionStorage.getItem('token')
        let user = sessionStorage.getItem('user')
        var config = {
            method: 'get',
            url: 'https://parcel-next-js.vercel.app/user/'+user,
            headers: {
                'Authorization': 'Bearer ' + token
            }
        };
        axios(config)
            .then(function (response) {
                //console.log(JSON.stringify(response.data));
                setDataOfUser(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });
    }, [])

    return (
        <div className='p-10 bg-yellow-100 h-[850px]'>
            <p className='text-5xl my-5 text-green-600 font-serif'>Your Account</p>
            {dataOfUser==null?(<p className='text-center text-3xl mt-32'>Loading...</p>):(<><p className='my-10 font-mono text-lg text-green-800'><span className='text-2xl uppercase underline text-green-400'>Email</span> : {dataOfUser.email}</p>
            <p className='my-10 font-mono text-lg text-green-800'><span className='text-2xl uppercase underline text-green-400'>Username</span> : {dataOfUser.username}</p>
            <p className='my-10 font-mono text-lg text-green-800'><span className='text-2xl uppercase underline text-green-400'>Address</span> : {dataOfUser.address}</p></>)}
        </div>
    )
}

export default MyAccount
