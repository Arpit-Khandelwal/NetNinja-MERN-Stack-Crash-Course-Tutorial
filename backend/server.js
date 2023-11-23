// Import necessary modules
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';
import workoutRouter from './routes/workout.js';
import mongoose from 'mongoose';


// Load environment variables from .env file
dotenv.config();

// Get the directory of the current module
const __dirname = dirname(fileURLToPath(import.meta.url));

// Initialize express application
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
    // Middleware logic goes here
    console.log('Hello from middleware');
    console.log(req.method, req.url)
    next();
});

// Define routes
app.use('/api/workouts', workoutRouter);


// Root route
// app.get('/', (req, res) => {
//     // Log a message to the console
//     console.log('Hello from root route');
//     res.send('Hello from server');
//     // Send the index.ts file as a response
//     // res.sendFile(__dirname+'/index.ts');
// });


// Connect to MongoDB database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        console.log('Connected to MongoDB database');
        // Start the server and listen on the port specified in the environment variables
        app.listen(process.env.PORT, () => {
            console.log('Server running on port', process.env.PORT);
        });
    })
    .catch((err) => {
        console.log('Error connecting to MongoDB database');
        console.log(err);
    });

