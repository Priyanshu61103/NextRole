import React, {useState} from 'react'

const JobDescription = ({setFormData, onClose}) => {
    const [data,setData] = useState({jobTitle:"",jobDescription:""});

    function handleChange(e){
        const {name,value} = e.target;

        setData(prev=>({...prev,[name] : value}))
    }
    function handleFormSubmit(e){
        e.preventDefault()
        if(data.jobTitle===""||data.jobDescription===""){
            alert("fill all the fields");
        }
        setFormData(data);
        onClose();
    }
    return (
        <form onSubmit={handleFormSubmit} className="flex flex-col gap-3 justify-between mt-5">
            <div className="flex flex-col gap-2 justify-center text-amber-50">
                <label className="text-[1.2rem]">Job Title</label>
                <input
                    type="text"
                    name="jobTitle"
                    value={data.jobTitle}
                    onChange={handleChange}
                    className='focus:border-cyan-500 px-4 py-2 rounded-[6px] border-white border-1 focus:outline focus:outline-cyan-500 ' required placeholder="Ex. Full Stack Developer"/>
            </div>
            <div className="flex flex-col gap-2 justify-center text-amber-50">
                <label>Job Description</label>
                <textarea
                    name="jobDescription"
                    value={data.jobDescription}
                    onChange={handleChange}
                    className='focus:border-cyan-500 px-4 py-2 rounded-[6px] border-white border-1 focus:outline focus:outline-cyan-500' required placeholder="Enter or paste job description"/>
            </div>
            <button
                type="submit"
                className="bg-pink-600 text-white font-medium inline-flex items-center justify-center gap-2 rounded-md px-3 py-2
             hover:bg-pink-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-300 active:bg-pink-700"
                aria-label="Create interview"
            >submit</button>
        </form>
    )
}
export default JobDescription
