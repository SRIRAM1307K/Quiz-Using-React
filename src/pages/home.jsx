import React from 'react'
import { useNavigate } from 'react-router-dom'

const home = ({user, setUser}) => {
    const navigator = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigator("/quiz")
    }
  return (
    <div className='text-center mt-30 border w-min mx-auto p-10 rounded'>
        <h1 className='text-3xl font-bold'>Welcome to Quiz..!</h1>
        <form onSubmit={handleSubmit}>
            <section className='mt-6 flex justify-center gap-3 items-center'>
                <label htmlFor="name" className='text-xl'>Name:</label>
                <input type="text" id="name" name="name" className="border rounded p-2" required
                 onChange={(e)=>{
                    const {value} = e.target;
                    setUser(value);
                }} />
            </section>
            <br />
            <button disabled={user.length === 0} className='border px-4 py-2 cursor-pointer bg-blue-500 border-blue-500 rounded-3xl text-white hover:bg-blue-400 hover:border-blue-400' type='submit'>Submit</button>

        </form>
    </div>
  )
}

export default home