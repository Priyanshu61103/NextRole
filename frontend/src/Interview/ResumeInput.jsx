import React, {useRef} from 'react'

const ResumeInput = ({setResumeFile,onClose}) => {
    const fileInput = document.querySelector("#file_input");
    const fileRef = useRef(null);
    const handleFileSubmit = (event)=>{
        event.preventDefault();
        const file = fileRef.current?.files;
        if(!file||file.length===0){
            return
        }
        setResumeFile(file[0]);
        fileRef.current.value="";
        onClose();
    }
    return (
        <form onSubmit={handleFileSubmit} className="flex  flex-col   items-center gap-5 ">
            <label className="block mb-2 text-2xl font-medium text-gray-900 dark:text-white" htmlFor="file_input">Choose a file.
                PDF & DOCX only</label>
            <input
                ref={fileRef}
                className="block w-4/5 text-lg  text-gray-900 border border-gray-300 rounded-lg placeholder-zinc-800 cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 "
                id="file_input" accept=".pdf,.docx" type="file"/>
            <button type="submit" className="text-amber-50 font-medium text-lg active:bg-pink-700 bg-pink-500 px-6 py-2 rounded-md">Submit</button>
        </form>
    )
}
export default ResumeInput
