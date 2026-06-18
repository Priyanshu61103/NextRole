import axios from "axios";

const API_URL = 'http://localhost:8080/job';

export const createJob = async (postJobData) => {
    const formData = new FormData();
    formData.append("title" , postJobData.title);
    formData.append("description" , postJobData.description);
    formData.append("eligibility" , postJobData.eligibility);
    formData.append("skills" , postJobData.skills);
    formData.append("about" , postJobData.about);
    formData.append("numberOfOpenings" , postJobData.numberOfOpenings);
    formData.append("location" , postJobData.location);
    formData.append("ctc" , postJobData.ctc);
    formData.append("modeOfJob" , postJobData.modeOfJob);
    formData.append("applyBy" , postJobData.applyBy);
    formData.append("experience" , postJobData.experience);
    formData.append("startDate" , postJobData.startDate);
    formData.append("company" , postJobData.company);
    formData.append("domain" , postJobData.domain);
    formData.append("imageFile" , postJobData.imageFile);

    try{
        const response = await axios.post(
            API_URL+"/createJob" , 
            formData,{
            headers: {
                "Content-Type": "multipart/form-data",
              },
              responseType: "text",
    });
        if(response.status == 201){
            return response.data;
        }else{
            return "ERROR CREATING";
        }
    }
    catch(error){
        console.error('Error posting Job' , error);
        console.error('Error status' , error.response?.status);
        throw error;
    }
    
};

export const getAllJobs = async() =>{
    try{
    const response = await axios.get(
        API_URL+"/getAllJobs" 
    );
    return response.data;
    }catch(error){
        throw error;
    }
};