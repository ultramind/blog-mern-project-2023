import { verify } from "jsonwebtoken";
import User from "../model/User";

export const authGuard = async (req, res, next) => {
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      const token = req.headers.authorization.split(" ")[1];

      const { id } = verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(id).select("-password");
      next();
    } catch (error) {
      let err = new Error("Not authorized, Token Failed");
      err.statusCode = 401;
      next(err);
    }
  } else {
    let error = new Error("Not authorized no token");
    error.statusCode = 401;
    next(error);
  }
};
