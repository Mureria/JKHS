import React from 'react'
import {BiLogoFacebookCircle, BiLogoWhatsapp} from 'react-icons/bi'
import {CgMail} from 'react-icons/cg'

const Footer = () => {
  return (
    <>
        <div className='w-full h-full text-gray-500  my- pt-2 md:pt-10 bg-black'>
            <div className='max-w-[1100px] my- py-10 mx-auto px-6'>
                <div className='grid grid-cols-3 gap-2 md:gap-20  md:grid-cols-4'>
                    <div>
                        <h1 className='text-sm font-light text-gray-400 leading-8'>Lorem</h1>
                        <h1 className='text-sm font-light text-gray-400 leading-8'>Loremi</h1>
                        <h1 className='text-sm font-light text-gray-400 leading-8'>Loremi</h1>
                        <h1 className='text-sm font-light text-gray-400 leading-8'>Loremi</h1>
                        <h1 className='text-sm font-light text-gray-400 leading-8'>Loremi</h1>
                        <h1 className='text-sm font-light text-gray-400 leading-8'>Loremi</h1>
                    </div>
                    <div>
                        <h1 className='text-sm font-light text-gray-400 leading-8'>Lindicus</h1>
                        <h1 className='text-sm font-light text-gray-400 leading-8'>Lindicus</h1>
                        <h1 className='text-sm font-light text-gray-400 leading-8'>Lindicus</h1>
                        <h1 className='text-sm font-light text-gray-400 leading-8'>Lindicus</h1>
                        <h1 className='text-sm font-light text-gray-400 leading-8'>Lindicus</h1>
                        <h1 className='text-sm font-light text-gray-400 leading-8'>Lindicus</h1>
                    </div>
                  <div>
                      <h1 className='text-sm font-light text-gray-400 leading-8'>Loremuiy</h1>
                      <h1 className='text-sm font-light text-gray-400 leading-8'>Loremuiy</h1>
                      <h1 className='text-sm font-light text-gray-400 leading-8'>Loremuiy</h1>
                      <h1 className='text-sm font-light text-gray-400 leading-8'>Loremuiy</h1>
                      <h1 className='text-sm font-light text-gray-400 leading-8'>Loremuiy</h1>
                      <h1> clasLoremuiy</h1>
                  </div>
                    <div className='text-center mt-6 col-span-3 md:text-start md:mt-0 md:col-span-1'>
                        <h1 className='text-sm font-light text-gray-400 leading-8'>Contact us</h1>
                        
                        <form className="space-y-3" action="#" method="POST">
                            <div>
                                
                                <div className="mt-2">
                                    <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    placeholder='Email'
                                    required
                                    className="block w-full border border-gray-500  bg-black/5 py-1.5 pl-4 text-gray-400  placeholder:text-gray-400 focus:border-gray-500 sm:text-sm sm:leading-6 focus-visible:outline-none"
                                    />
                                </div>
                            </div>

                            <div>
                            <div className="flex items-center justify-between">
                               
                               
                            </div>
                            <div className="mt-1">
                                <input
                                id="password"
                                name="password"
                                type="password"
                                placeholder='Password'
                                autoComplete="current-password"
                                required
                                className="block w-full border border-gray-500  bg-black/5 py-1.5 pl-4 text-gray-400  placeholder:text-gray-400   sm:text-sm sm:leading-6 focus-visible:outline-none"
                                />
                            </div>
                         </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center  bg-black/5 px-3 py-1.5 text-sm font-semibold leading-6 border border-gray-500 text-gray-400 hover:border-gray-400 hover:text-gray-300 ease-in-out duration-300"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                            
                                    
                    </div>
                                
                </div>
                <div className='max-w-[300px] mx-auto flex justify-center items-center'>
                    <div className='mx-4 my-6'><BiLogoFacebookCircle size={20} color='gray'/></div>
                    <div className='mx-4 my-6'><CgMail size={20} color='gray'/></div>
                    <div className='mx-4 my-6'><BiLogoWhatsapp size={20} color='gray'/></div>
                    <div></div>
                </div>
                <h1 className='text-center font-light text-sm'>© 2023 jkbhs. All rights reserved.</h1>


            </div>

        </div>

    
    </>
    )
}

export default Footer