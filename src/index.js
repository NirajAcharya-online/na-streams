import connectDb from "./db/index.js";
import "dotenv/config";
import { app } from "./app.js";
const port = process.env.PORT || 4000;
connectDb()
  .then(() => {
    app.listen(port, () => {
      console.log(`Server is runnig at port: ${port}`);
    });
    app.on("error", (error) => {
      console.log("Err:", error);
    });
  })
  .catch((error) => {
    console.log("Mongo db connection failed!!", error);
  });
