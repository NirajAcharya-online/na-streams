import { asyncHandler } from "../utils/async-handler.js";

const registerUser = asyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Niraj is don!",
  });
});

export {registerUser}