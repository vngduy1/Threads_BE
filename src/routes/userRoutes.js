import express from "express";
import {
  signupUser,
  loginUser,
  logoutUser,
  followAndUnfollowUser,
  updateUser,
  getUserProfile,
} from "../controller/userController.js";

import protectRoute from "../middlewares/protectRoute.js";

const router = express.Router();

//user
router.get("/profile/:username", getUserProfile);
router.post("/signup", signupUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.post("/follow/:id", protectRoute, followAndUnfollowUser);
router.put("/update/:id", protectRoute, updateUser);

export default router;
