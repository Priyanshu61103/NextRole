import jwt from "jsonwebtoken";

export async function jwtVerificationMiddleware(req, resp, next) {
  try {
    const { token } = req.cookies;
    console.log("secret key: ",process.env.JWT_SECRETKEY);
    console.log("token: ",token);
    if(!token){
        return resp.status(401).send({ message: "Unauthorized User", success: false });
    }
    await jwt.verify(token, process.env.JWT_SECRETKEY,{expiresIn:"10d"},(error)=>{
       if(error)
       return resp.status(401).send({ message: "Unauthorized User", success: false , error}); 
       next();
    });
  } catch (error) {
    if (error == "Token Expired Error") {
      return resp.status(401).send({ message: "Unauthorized User", success: false });
    } else {
      console.log(error);
      return resp.status(500).send({ message: "Internal Server Error", success: false });
    }
  }
}