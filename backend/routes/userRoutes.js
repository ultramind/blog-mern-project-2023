import express from "express";
import {
  loginUser,
  registerUser,
  updateProfilePicture,
  updateUserProfile,
  userProfile,
} from "../controllers/userControllers";
import { authGuard } from "../middleware/authMiddleware";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);

router.get("/profile", authGuard, userProfile);
router.put("/updateProfile", authGuard, updateUserProfile);
router.put("/updateProfilePicture", authGuard, updateProfilePicture);

export default router;
