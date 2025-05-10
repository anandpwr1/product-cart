import express from "express"
import { connectDB } from "./config/db.js"
import productRoutes from "./routes/product.route.js"
import dotenv from "dotenv"
import path from "path";

dotenv.config();

const __dirname = path.resolve();

const app = express()
const PORT = process.env.PORT || 5000
app.use(express.json()) //allows us to use json data in req.body

app.use("/api/products", productRoutes)

//returning dist file for loading frontend
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "/frontend/dist")))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"))
    })
}

app.listen(PORT, () => {
    connectDB()
    console.log("Server started at http://localhost:" + PORT)
})