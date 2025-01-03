import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import connectDB from './Database/connection.js';
const app = express();
import routes from "./routes/index.js"
dotenv.config();

app.use(express.json());


// Enable CORS for all routes
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use('/', routes);


app.get('/getData', (req, res) => {
  
});


const PORT = process.env.PORT || 5000;

//Api to get all the application of today






app.listen(PORT, () => {
   connectDB()
       .then(() => {
           console.log(`Server is up running on port ${PORT} 🚀 `);
       }).catch((err) => {
       console.log('Server is running, but database connection failed', err);
   });
});
