import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='w-[1520px] mx-auto grid md:grid-cols-2'>
            <img className='w-[550px] mx-auto my-4'src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1672676822/NetflixApp/FC_two_phones.6ec9a842f905769677f9_m91off.webp'
            alt=''
            />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand </h1>
                <p>
                Embrace ultimate convenience with our app, granting you instant access to a boundless array of services whenever you need them. Discover a world where your demands are met swiftly and effortlessly, offering a seamless experience tailored to your preferences. Experience the future of on-demand services at your fingertips, shaping your lifestyle with limitless choices available at a moment's notice. Dive into a realm of boundless possibilities, making every desire a reality with our effortless, on-demand solutions."
                </p>
                <button className='bg-black  text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'> Get Started</button>
            </div>
         </div>
        
    </div>
  )
  }

export default Delivery