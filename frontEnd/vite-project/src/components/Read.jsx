import React , {useState ,useEffect} from 'react'

const Read = () => {

 const [data, setData] = useState([])

 const [flag , setFlag] = useState(true)

 const [showPopUP , setShowPopUP]= useState(false)

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch(`http://localhost:4000/`);
    //         const newData = await response.json();
    //         setData(newData);

    //         fetchData();
    // }, []);

    // // console.log(data)

    useEffect(() => {
        const fetchData = async () => {
                    const response = await fetch(`http://localhost:4000/`);
                    const newData = await response.json();
                    setData(newData);
                }
                fetchData();  
    }, [flag])
    
    console.log(data)


    const handleDeleteBtn = async (_id)=>{
        const response = await fetch(`http://localhost:4000/${_id}` , {
            method : 'DELETE',

        }  )

        const data = await response.json()

        if(!response.ok){
            console.log(result.error)
         } else{
            
                setShowPopUP(true)
            setTimeout(() => {
               setFlag((prev)=> !prev)
               setShowPopUP(false)
            }, 2000);
          
    
         }
    }

  return (
  <>
    <main className='w-screen p-3 md:p-10  flex flex-wrap items-center justify-center gap-5 md:gap-10 mt-10'>
  
  {showPopUP && <div className='bg-red-100 flex items-center justify-center text-center w-screen h-[60px]'>
        <h2 className='font-bold text-[24px]'>Deleted Successfully</h2>
     </div>}

{   data.map((item)=>(   <div key={item._id} className='card-box-shadow w-[340px] sm:w-[400px] md:w[550px] flex flex-col items-center justify-center pt-7 pb-3'>
    <h2 className='font-bold md:text-[23px]'> name : {item.name} </h2>
    <p className='text-[20px]'> email : {item.email}</p>
    <p className='text-[20px]'>age : {item.age}</p>
    <div className='flex gap-6 mt-5'>
        <button className='text-[15px] px-3 py-1 bg-slate-200 rounded-[7px] hover:bg-slate-400'>Edit</button>
        <button className='text-[15px] px-3 py-1 bg-slate-200 rounded-[7px] hover:bg-slate-400' onClick={()=> handleDeleteBtn(item._id)} >Delete</button>
    </div>
     </div> 

      ))}

    </main>
  </>
  )
}

export default Read