import React from 'react'

const Parcel = ({ data }) => {
    return (
        <div className='border border-green-400 py-5 px-10 rounded-lg my-5'>
            <p className='my-2 text-lg text-green-800'><span className='uppercase text-xl underline text-green-600'>Cost</span> : Rs. 90</p>
            <p className='my-2 text-lg text-green-800'><span className='uppercase text-xl underline text-green-600'>Notes</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem eum fuga itaque voluptas cumque non incidunt, facere explicabo neque asperiores.</p>
            <div className='w-full flex my-3'>
                <p className='w-1/2 text-lg text-green-800'><span className='uppercase text-xl underline text-green-600'>Starting Location</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vero quam veritatis saepe, voluptatem commodi.</p>
                <p className='w-1/2 text-lg text-green-800'><span className='uppercase text-xl underline text-green-600'>Destination</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, quasi. Facere nam nesciunt assumenda explicabo?</p>
            </div>
            <div className='w-full flex my-5'>
                <div className='w-1/2 text-center p-5'>
                    <p className='text-3xl my-3 font-serif text-green-500'>Sender</p>
                    <p className='my-2 text-lg text-green-800'><span className='uppercase text-xl underline text-green-600'>Name</span> : Subham Roy</p>
                    <p className='my-2 text-lg text-green-800'><span className='uppercase text-xl underline text-green-600'>Phone</span> : 9831950676</p>
                    <p className='my-2 text-lg text-green-800'><span className='uppercase text-xl underline text-green-600'>Address</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus omnis quae at laudantium cum ipsam modi eaque molestiae nisi exercitationem.</p>
                </div>
                <div className='w-1/2 text-center p-5'>
                    <p className='text-3xl my-3 font-serif text-green-500'>Receiver</p>
                    <p className='my-2 text-lg text-green-800'><span className='uppercase text-xl underline text-green-600'>Name</span> : Subham Roy</p>
                    <p className='my-2 text-lg text-green-800'><span className='uppercase text-xl underline text-green-600'>Phone</span> : 9831950676</p>
                    <p className='my-2 text-lg text-green-800'><span className='uppercase text-xl underline text-green-600'>Address</span> : Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus omnis quae at laudantium cum ipsam modi eaque molestiae nisi exercitationem.</p>
                </div>
            </div>
        </div>
    )
}

export default Parcel
