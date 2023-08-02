import React from 'react'

const Navbar = () => {
  return (
<>
    <div className='w-full h-full bg-black text-white flex justify-center items-center'>
        <div className='p-2 md:p-4 '>
            <h1 className='text-lg text-center font-semibold font-serif md:text-[2.1rem]'>
                JOMO KENYATTA BOYS HIGH SCHOOL
            </h1>
            <h2 className='text-sm font-normal text-center italic py-0 md:text-2xl md:pt-3'>BUILD THE FUTURE</h2>
        </div>
    </div>
    <div className='w-full h-full bg-white text-black hidden justify-center items-center my-2 md:flex'>
        <ul className='mx-8 pb-2 text-[14px] font-serif hover:border-b-2 md:border-blue-800 cursor-pointer'>Home</ul>
        <ul className='mx-8 pb-2 text-[14px] font-serif hover:border-b-2 md:border-blue-800 cursor-pointer'>Students</ul>
        <ul className='mx-8 pb-2 text-[14px] font-serif hover:border-b-2 md:border-blue-800 cursor-pointer'>Exams</ul>
        <ul className='mx-8 pb-2 text-[14px] font-serif hover:border-b-2 md:border-blue-800 cursor-pointer'>Contacts</ul>
        <ul className='mx-8 pb-2 text-[14px] font-serif hover:border-b-2 md:border-blue-800 cursor-pointer'>Staff</ul>
        <ul className='mx-8 pb-2 text-[14px] font-serif hover:border-b-2 md:border-blue-800 cursor-pointer'>Projects</ul>
    </div>
    <div className='w-full h-full relative mb-10'>
        <img src='https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' className='w-full h-[80vh] object-cover object-center'/>
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40'/>
    </div>
</>
  )
}

export default Navbar