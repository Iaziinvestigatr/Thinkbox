import express from 'express';
import notesRoutes from './routes/notesRoutes.js';
import {connectDB} from '../config/db.js';
import dotenv from 'dotenv';
dotenv.config();

connectDB();

const app = express();

app.use("/api/notes", notesRoutes);


app.listen(5001, () => {
  console.log('Server is running on port 5001');
});

//mongodb+srv://vjchristof:123@cluster0.topuhlb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0