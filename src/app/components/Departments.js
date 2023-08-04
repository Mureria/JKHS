import React from 'react'
import {HiLanguage} from 'react-icons/hi2'
import {BiMath} from 'react-icons/bi'
import {GiDramaMasks} from 'react-icons/gi'
import {MdOutlineScience, MdOutlineDirectionsRun, MdOutlineHandshake} from 'react-icons/md'

const Departments = () => {
  return (
   <>
   <div className='w-full h-full pb-16 my-28'>
        <div className='max-w-[1200px] my-6 mx-auto px-6'>
        <h1 className='text-[2.1rem] pb-[5rem] py-[3rem]'>Departments <span className='text-blue-400'>|</span></h1>
        <div className='flex flex-wrap justify-between items-center gap-4'>
            <div className='relative flex flex-col justify-center items-center border  py-10 px-4'>
                <h1 className=' bg-white rounded-sm'><MdOutlineScience size={60}/></h1>
                <h1 className='text-xl font-medium font-mono mt-6'>Sciences</h1>
            </div>
            <div className='relative flex flex-col justify-center items-center border  py-10 px-4'>
                <h1 className=' bg-white rounded-sm'><HiLanguage size={60}/></h1>
                <h1 className='text-xl font-medium font-mono mt-6'>Languages</h1>
            </div>
            <div className='relative flex flex-col justify-center items-center border py-10 px-4'>
                <h1 className=' bg-white rounded-sm'><MdOutlineDirectionsRun size={60}/></h1>
                <p className='text-xl font-medium font-mono mt-6'>Physical Education</p>
            </div>
            <div className='relative flex flex-col justify-center items-center border  py-10 px-4'>
                <h1 className=' bg-white rounded-sm'><BiMath size={60}/></h1>
                <p className='text-xl font-medium font-mono mt-6'>Mathematics</p>
            </div>
            <div className='relative flex flex-col justify-center items-center border  py-10 px-4'>
                <h1 className=' bg-white rounded-sm'><MdOutlineHandshake size={60}/></h1>               
                <p className='text-xl font-medium font-mono mt-6'>Social Sciences</p>
            </div>
            <div className='relative flex flex-col justify-center items-center border  py-10 px-4'>
                <h1 className=' bg-white rounded-sm'><GiDramaMasks size={60}/></h1>
                <p className='text-xl font-medium font-mono mt-6'>Extra-curriculum</p>
            </div>
        </div>
        </div>  

   </div>
   </>
  )
}

export default Departments