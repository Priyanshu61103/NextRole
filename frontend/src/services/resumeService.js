import axios from "axios";

const API_URL = 'http://localhost:8080/resume/analyzer';

export const analyzeResume = async(resumeAnalyzerData) => {
    const formData = new FormData();
    formData.append("resume" , resumeAnalyzerData.resume);

    // if(id){
    //     formData.append("id" , id);
    // }
    try{
        const response = await axios.post(API_URL , formData ,
            {
                headers:{
                    "Content-Type":"multipart/form-data",
                },
                responseType:"text",
            }
        );
        if(response.status == 200){
            return response.data;
        }else{
            console.log(response.status);
            return "ERROR ANALYZING RESUME";
        }
    }catch(error){
        console.error("Failed to analyze resume." , error)
        throw error;
    }
};
