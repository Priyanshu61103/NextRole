import axios from "axios";

const API_URL = 'http://localhost:8080/internship';

export const createInternship = async (postInternshipData) => {
    const formData = new FormData();
    formData.append("title" , postInternshipData.title);
    formData.append("description" , postInternshipData.description);
    formData.append("eligibility" , postInternshipData.eligibility);
    formData.append("skills" , postInternshipData.skills);
    formData.append("about" , postInternshipData.about);
    formData.append("numberOfOpenings" , postInternshipData.numberOfOpenings);
    formData.append("location" , postInternshipData.location);
    formData.append("stipend" , postInternshipData.stipend);
    formData.append("modeOfInternship" , postInternshipData.modeOfInternship);
    formData.append("applyBy" , postInternshipData.applyBy);
    formData.append("duration" , postInternshipData.duration);
    formData.append("startDate" , postInternshipData.startDate);
    formData.append("company" , postInternshipData.company);
    formData.append("domain" , postInternshipData.domain);
    formData.append("imageFile" , postInternshipData.imageFile);

    try{
        const response = await axios.post(
            API_URL+"/createInternship" , 
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
        console.error('Error posting internship' , error);
        console.error('Error status' , error.response?.status);
        throw error;
    }
    
};

export const getAllInternships = async() =>{
    try{
    const response = await axios.get(
        API_URL+"/getAllInternships" 
    );
    console.log(response.data);
    return response.data;
    
    }catch(error){
        console.error('Error fetching food list:', error);
        console.error('Error response:', error.response?.data);
        console.error('Error status:', error.response?.status);
        throw error;
    }
};