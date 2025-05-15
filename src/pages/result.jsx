import React from 'react'

const result = ({user,score}) => {

  return (
    <div className='mt-30 text-center border w-min text-center mx-auto rounded p-10'>
        <h1 className='text-2xl font-semibold'>Quiz Completed...!</h1>
        <h1 className='mt-4 text-2xl w-max'>Hello <span style={{textTransform:"uppercase"}} className='font-semibold text-gray-500'>{user}</span>, your score is <b className='text-green-500'>{score}</b>.</h1>

        <a href="/home"><button className='border px-4 py-2 mt-4  cursor-pointer bg-blue-500 border-blue-500 rounded-3xl text-white hover:bg-blue-400 hover:border-blue-400'>Back to Home</button></a>

    </div>
  )
}

export default result