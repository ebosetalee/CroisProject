import express from "express";
import userRoutes from "./routes/users.js"
import "dotenv/config";

const app = express();
const port = process.env.PORT || 7050;

app.use(express.json());


app.get("/hello", (req, res) => res.send("Hello from Homepage."));
app.use("/api/", userRoutes)

app.listen(port, () => {
    console.log(`server is runnng on port: http://127.0.0.1:${port}`);
});
