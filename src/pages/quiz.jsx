import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const questions = [
    {
        question: "How many days are there in a week?",
        options: ["7", "6", "8"],
        answer: "7",
    },
    {
        question: "How many hours are there in a day?",
        options: ["25hrs", "23hrs", "24hrs"],
        answer: "24hrs",
    },
        {
        question: "How many letters are there in the English alphabet?",
        options: ["25", "26", "27"],
        answer: "26",
    },
];

const quiz = ({setScore}) => {
    const [questionIdx, setQuestionIdx] =useState(0)
    const navigator = useNavigate()
    const handleAnswer = (selectedAnswer) =>{
        const isCorrect = selectedAnswer === questions[questionIdx].answer;
        if(isCorrect){
            setScore((prevScore) => prevScore + 1);
        }

        if(questionIdx < questions.length - 1){
         setQuestionIdx((prevIdx)=> prevIdx + 1);
        }else{
            navigator("/result");
        }

    }

  return (
    <div className='text-center mt-30 border rounded w-min mx-auto p-10'>
        <h1 className='text-4xl font-bold'>Questions!</h1>
        <h2 className='mt-6 text-xl w-full font-semibold text-gray-700'>{questionIdx + 1}.{questions[questionIdx].question}</h2>
        <div className='flex justify-center gap-3'>
            {
          questions[questionIdx].options.map((options, idx)=>(
                <button key={idx} className='border rounded-lg p-2 mt-4 mb-4 px-4 py-2 cursor-pointer bg-gray-200 hover:bg-gray-500 hover:text-white hover:border-gray-500' onClick={()=>handleAnswer(options)} >{options}</button>

            ))
        }
            </div>
        <br />
        <div className='mb-4'><hr /></div>
        <a href="/home"><button className='border px-4 py-2  cursor-pointer bg-blue-500 border-blue-500 rounded-3xl text-white hover:bg-blue-400 hover:border-blue-400'>Back to Home</button></a>

    </div>
  )
}

export default quiz