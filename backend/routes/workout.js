// Import express
import express from 'express';
import WorkoutModel from '../models/WorkoutModel.js';
import mongoose from 'mongoose';

// Create router
const router = express.Router();

// Root route
router.get('/', (req, res) => {
    // Send JSON response
    res.json({ path: '/', message: 'Get all workouts' });
});


router.get('/:id', (req, res) => {
    // Send JSON response
    res.json({ message: 'Get workout info for', id: req.params.id });
});

router.post('/', async (req, res) => {
    const { title, reps, weight } = req.body;

    try {
        const workout = await WorkoutModel.create({ title, reps, weight });

        res.status(200).json(
            {
                'message': 'Created Workout Successfully',
                workout
            }
        );
        console.log({ title, reps, weight }, '\nInserted into Workout Successfully');
        
    }
    catch (err) {
        res.status(400).json({ message: "Error creating workout", error: err.message });
        console.log(err);
    }
    // Send JSON response
    // res.json({ message: 'Create new workout' });
});

router.patch('/:id', (req, res) => {
    // Send JSON response
    res.json({ message: 'Update workout' });
});

router.delete('/:id', (req, res) => {
    // Send JSON response
    res.json({ message: 'Delete workout' });
});

// Export router
export default router;