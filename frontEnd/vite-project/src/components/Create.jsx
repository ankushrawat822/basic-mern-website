import React , {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Create = () => {

    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [age , setAge] = useState("")

    const handleNameChange=(e)=>{
        setName(e.target.value)
    }

    const handleEmailChange=(e)=>{
        setEmail(e.target.value)
    }

    const handleAgeChange=(e)=>{
        setAge(e.target.value)
    }

    const handleSubmitBtn= async ()=>{
        console.log(name + " " + email + " " + age)
        setName("")
        setAge("")
        setEmail("")

     const addUser = {name , email , age}
     const response = await fetch("http://localhost:4000" , {
        method:"POST",
        body: JSON.stringify(addUser),
        headers:{
            "Content-Type": "application/json"
        }
     })

     const result = await response.json()

     if(!response.ok){
        console.log(result.error)
     } else{
        console.log(result)
        navigate("/all")

     }

    }

  return (
   <>
   <main className='w-screen flex items-center justify-center h-screen'>
     <div className=' create-box-shadow py-10 flex flex-col gap-8 items-center justify-center m-5 w-screen md:w-[80vw] lg:w-[50vw] mb-[160px]'>
        <h2 className='font-bold text-[30px]'>Enter details</h2>
        <input type="text" value={name} onChange={handleNameChange} placeholder='enter name' className=' w-full text-[24px] px-10'/>

        <input type="email" value={email} onChange={handleEmailChange} placeholder='enter email' className=' w-full text-[24px] px-10'/>

        <input type="number" value={age} onChange={handleAgeChange} placeholder='enter age' className=' w-full text-[24px] px-10'/>
        
        <button className='text-[23px] px-3 py-1 bg-slate-200 rounded-[7px] hover:bg-slate-400' onClick={handleSubmitBtn}> Submit</button>
     </div>
   </main>
   </>
  )
}

export default Create