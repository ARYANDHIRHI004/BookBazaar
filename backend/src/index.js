import app from "./app.js";
import { PORT } from "./constents.js";
import dotenv from "dotenv";
import connectDB from "./db/db.js";

dotenv.config();

const port = PORT || 4000;

connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
  });
});
