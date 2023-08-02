import React from 'react'

const Facilities = () => {
  return (
    <>
       <div className='w-full h-full my-10'>
            <div className='max-w-[1200px] my-6 mx-auto px-6'>
                <h1 className='text-[2.1rem] py-[1rem]'>About <span className='text-blue-400'>|</span></h1>
                <div className='grid gap-6 grid-cols-2'>
                    <div>
                        <h2 className='text-2xl font-serif mb-4 '>Learn with us</h2>
                        <p className='text-sm font-light text-gray-600 space-y-70'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis excepturi at ullam illo reprehenderit exercitationem et eligendi dolore voluptates assumenda eveniet nihil tempora reiciendis, unde, nobis odio voluptatum. Natus quidem placeat eligendi deserunt ducimus numquam reiciendis aliquid et excepturi!</p>
                    </div>
                    <div>
                        <img src='https://images.unsplash.com/photo-1599725427295-6ed79ff8dbef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80' alt='' className='h-[300px] '/>
                    </div>
            </div>
            </div>
           
        </div>
    </>
  )
}

export default Facilities