import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValidity, setEmailValidity] = useState("");
  const [passwordValidity, setPasswordValidity] = useState("");
  const [visibility, setVisibility] = useState(false);
  const [user, setUser] = useState("student");
  const navigate = useNavigate();

  const emailChecker = () => {
    if (email.trim() == "") {
      setEmailValidity("Please give your Email Address");
      return false;
    }
    if (!email.includes("@")) {
      setEmailValidity("Email must contain @");
      return false;
    }
    if (
      !email.includes(".com") &&
      !email.includes(".in") &&
      !email.includes("org")
    ) {
      setEmailValidity("Invalid Domain Extension");
      return false;
    }

    if (email.toLowerCase() != email) {
      setEmailValidity("Email must be in Lowercase Letters");
      return false;
    }

    return true;
  };

  const passwordChecker = () => {
    if (password.trim() == "") {
      setPasswordValidity("Please give your Password");
      return false;
    }
    let capital = 0,
      small = 0,
      number = 0,
      specialChar = 0,
      space = 0;
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= "a" && password[i] <= "z") small++;
      else if (password[i] >= "A" && password[i] <= "Z") capital++;
      else if (password[i] >= "0" && password[i] <= "9") number++;
      else if (password[i] == " ") space++;
      else specialChar++;
    }

    if (capital == 0) {
      setPasswordValidity("Password must contain a capital letter");
      return false;
    } else if (small == 0) {
      setPasswordValidity("Password must contain a Lowercase letter");
      return false;
    } else if (number == 0) {
      setPasswordValidity("Password must contain a number");
      return false;
    } else if (specialChar == 0) {
      setPasswordValidity("Password must contain a special character");
      return false;
    }

    return true;
  };

  const loginHandler = async (event) => {
    try {
      event.preventDefault();
      if (!emailChecker() || !passwordChecker()) return;
      const loginData = {
        email,
        password,
        user,
      };
      const response = await fetch(
        "http://localhost:3200/login-verification",
        {
          method: "POST",
          body: JSON.stringify(loginData),
          headers: {
            "content-type": "application/json",
          },
        },
      );

      if (!response) {
        alert("Error");
        return;
      }
      const data = await response.json();
      if (data.success) {
        alert(`Welcome back,${data.payload.name}`);
        document.cookie=`token=${data.token}`;
        localStorage.setItem("userName",data.payload.userName);
        localStorage.setItem("user",data.payload.user);
        navigate("/home");
        return;
      }
      alert("Internal Server Error");
    } catch (error) {
      alert("Error Catched");
      console.log("Error :", error);
    }
  };

  return (
    <div>
      <div className="h-fit w-72 lg:w-96 bg-white text-black rounded-t-xl flex justify-center py-7 lg:py-6">
        <div>
          <div className="text-center">
            <h1 className="font-bold text-md lg:text-lg">Login</h1>
            <p className="text-xs lg:text-sm text-gray-400">
              Welcome back! Please Login to continue.
            </p>
          </div>
          <div>
            <div className="h-20 w-full flex justify-center items-center">
              {/* <GoogleLogin
                    width="250"
                    onSuccess={googleAuthHandler}
                    onError={() => console.log("Google Error")}
                  /> */}
              <div className="h-10 w-60 flex justify-center items-center border-2 border-gray-600 rounded-2xl gap-x-2">
                <img
                  src="../google.png"
                  alt=""
                  className="h-6 w-6 rounded-full"
                />
                <p className="text-md text-gray-600 font-semibold">
                  Sign In with Google
                </p>
              </div>
            </div>

            <div className="flex gap-x-4 justify-center items-center">
              <div className="h-0.5 w-28 lg:w-36 bg-gray-100"></div>
              <p className="tet-sm text-gray-500">or</p>
              <div className="h-0.5 w-28 lg:w-36 bg-gray-100"></div>
            </div>
            <form
              action=""
              className="flex flex-wrap gap-8 justify-center"
              onSubmit={loginHandler}
            >
              <div className={"ml-4 lg:ml-0"}>
                <h1
                  htmlFor="email"
                  className="font-semibold text-xs lg:text-sm mb-1"
                >
                  Email address
                </h1>
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="lg:w-80 w-64 border-2 p-2 rounded-lg placeholder:text-xs lg:text-sm outline-none border-gray-200"
                  onChange={(event) => {
                    setEmailValidity("");
                    setEmail(event.target.value);
                  }}
                  style={
                    emailValidity == ""
                      ? { border: "2px solid gray" }
                      : { border: "2px solid red" }
                  }
                />
                <p className="ml-4 lg:ml-0 text-red-500">{emailValidity}</p>
              </div>
              <div className="lg:w-80 w-64">
                <h1 className="font-semibold text-xs lg:text-sm mb-2">
                  Are you a ?
                </h1>
                <div className="flex justify-around">
                  <button
                    className={
                      user == "student"
                        ? "w-30 bg-black font-semibold border-2 border-black rounded-full p-2 text-sm text-white"
                        : "w-30 font-semibold border-2 border-black rounded-full p-2 text-sm text-black"
                    }
                    onClick={(event) => {
                      event.preventDefault();
                      setUser("student");
                    }}
                  >
                    Student
                  </button>
                  <button
                    className={
                      user == "recruiter"
                        ? "w-30 bg-black border-2 border-black font-semibold rounded-full p-2 text-sm text-white"
                        : "w-30 border-2 border-black font-semibold rounded-full p-2 text-sm text-black"
                    }
                    onClick={(event) => {
                      event.preventDefault();
                      setUser("recruiter");
                    }}
                  >
                    Recruiter
                  </button>
                </div>
              </div>
              <div className={"ml-4 lg:ml-0"}>
                <h1
                  htmlFor="email"
                  className="font-semibold text-xs lg:text-sm mb-1"
                >
                  Password
                </h1>
                <div
                  className="flex lg:w-80 w-64 border-2 p-2 rounded-lg border-gray-200 justify-between items-center"
                  style={
                    passwordValidity == ""
                      ? { border: "2px solid gray" }
                      : { border: "2px solid red" }
                  }
                >
                  {!visibility ? (
                    <input
                      type="password"
                      placeholder="Enter your password"
                      className="w-76 outline-none placeholder:text-xs lg:text-sm"
                      onChange={(event) => {
                        setPasswordValidity("");
                        setPassword(event.target.value);
                      }}
                    />
                  ) : (
                    <input
                      type="text"
                      placeholder="Create a password"
                      className="w-76 outline-none placeholder:text-sm"
                      onChange={(event) => {
                        setPasswordValidity("");
                        setPassword(event.target.value);
                      }}
                    />
                  )}
                  <img
                    src="https://ik.imagekit.io/priyanshu61103/password-eye-icon.png"
                    alt=""
                    className="h-6 w-7"
                    onClick={() => setVisibility(!visibility)}
                  />
                </div>
                <p className="text-red-500">{passwordValidity}</p>
              </div>

              <button className="lg:w-80 w-64 p-2 bg-black rounded-lg flex justify-center text-sm lg:text-md items-center font-semibold text-white">
                Continue
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="h-fit w-72 lg:w-96 bg-gray-100 text-black rounded-b-xl flex text-sm">
        <div className="h-12 w-full flex justify-center items-center gap-x-1 text-sm lg:text-md">
          <p>Don't have an account?</p>
          <Link to="/signup">
            <p className="font-semibold">Sign up</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
