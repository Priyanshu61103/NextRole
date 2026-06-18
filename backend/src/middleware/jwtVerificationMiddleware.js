import jwt from "jsonwebtoken";

export function jwtVerificationMiddleware(req, resp, next) {
  try {
    const { token } = req.cookies;
    if(!token){
        return resp.status(401).send({ message: "Unauthorized User", success: false });
    }
    const flag = jwt.verify(token, process.env.JWT_SECRETKEY);
    if (!flag) {
      return resp.status(401).send({ message: "Unauthorized User", success: false });
    }
    next();
  } catch (error) {
    if (error == "Token Expired Error") {
      return resp.status(401).send({ message: "Unauthorized User", success: false });
    } else {
      console.log(error);
      return resp.status(500).send({ message: "Internal Server Error", success: false });
    }
  }
}