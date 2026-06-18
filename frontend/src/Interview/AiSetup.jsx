import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Testimonials from "../Testimonials/Testimonials";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
import Interview from "./Interview";
const AiSetup = () => {
  const navigate = useNavigate();
  const [formInfo, setFormInfo] = useState({
    answer: "",
  });
  const webHook =
    "http://localhost:5678/webhook-test/7aaf77fa-f608-4fcf-a053-699a0c857564";
  const webHook2 =
    "http://localhost:5678/webhook-test/bf071c1c-97eb-494a-ad15-fa5fc93b89bd";
  const [question, setQuestion] = useState("");
  const resumeInput = useSelector((state) => state.resumeInput.value);
  const [data, setData] = useState("");
  const [data2, setData2] = useState("");
  const [spinner, setSpinner] = useState(true);
  const [sessionId] = useState(crypto.randomUUID());
  const [trigger, setTrigger] = useState(0);
  const [count, setCount] = useState(0);
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormInfo({ ...formInfo, [name]: value });
  };

  const callN8N = async (candidateAnswer) => {
    setSpinner(true);
    setCount(count+1);
    const payload = JSON.stringify({
      sessionId: sessionId,
      question: question,
      answer: candidateAnswer,
    });
    const response = await fetch(webHook2, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: payload,
    });
    if (response.ok) {
      const info = await response.json();
      setData(info.content.parts[0].text);
      setQuestion(info.content.parts[0].text);
      setFormInfo({
        answer: "",
      });
      setSpinner(false);
    } else {
      console.log("error");
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if(count <= 10)
    callN8N(formInfo.answer);
    else{
       setInterviewEnd(1);
    }
  };

  const endInterview = () => {
     navigate("/aiinterview");
  }

  useEffect(() => {
    if (trigger == 0) {
      if (!resumeInput.payload) {
        console.log("waiting for Response");
        return;
      }

      const formData = new FormData();
      formData.append("resume", resumeInput.payload);
      const sendDataToN8N = async () => {
        const response = await fetch(webHook, {
          method: "POST",
          body: formData,
        });
        if (response.ok) {
          const info = await response.json();
          setData(info.content.parts[0].text);
          setSpinner(false);
          setQuestion(info.content.parts[0].text);
          console.log(info);
          console.log(info.content.parts[0].text);
        } else {
          console.log("error");
        }
      };
      sendDataToN8N();
      setTrigger(1);
      setCount(1);
    }
  }, []);

  return (
    <div
      className="h-1035 w-full"
      style={{ backgroundColor: "rgb(20, 20 , 20)" }}
    >
      <Navbar />
      {spinner && (
        <div className="h-150 w-full flex justify-center items-center">
          <div className="h-10 w-10 border-6 border-cyan-300 border-b-blue-800 rounded-full animate-spin"></div>
        </div>
      )}
      {!spinner && (
        <div>
          <div className="w-320 h-30 rounded-xl flex justify-center items-center border-2 border-cyan-300 mb-10">
            <h1 className="w-280 text-2xl font-semibold text-gray-300">
              Q: {data}
            </h1>
          </div>
          <form onSubmit={onSubmitHandler}>
            <textarea
              rows="10"
              cols="100"
              name="answer"
              value={formInfo.answer}
              placeholder="Give your Answer"
              className="outline-0 border-2 border-cyan-300 p-20 rounded-xl relative font-semibold text-gray-300 left-50 placeholder:text-gray-400 placeholder:font-semibold placeholder:text-xl"
              onChange={onChangeHandler}
            />
            <div className="h-20 w-full flex justify-center items-center gap-10">
              <button className="h-10 w-30 flex justify-center items-center p-5 rounded-xl bg-cyan-300 text-black font-bold">
                Submit
              </button>
 <button className="h-10 w-40 flex justify-center items-center p-5 rounded-xl bg-cyan-300 text-black font-bold" onClick={endInterview}>
                End Interview
              </button>
            </div> 
          </form>
        </div>
      )}

      <Testimonials />
      <Footer />
    </div>
  );
};

export default AiSetup;
