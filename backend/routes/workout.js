// Import express
import express from 'express';

// Router
const router = express.Router();

// Get all workouts
router.get('/', (req, res) => {
    res.json({ path: '/', message: 'Get all workouts' });
});

// Get workout by ID
router.get('/:id', (req, res) => {
    res.json({ message: 'Get workout', id: req.params.id });
});

// Create workout
router.post('/', (req, res) => {
    res.json({ message: 'Create workout' });
});

// Update workout
router.patch('/:id', (req, res) => {
    res.json({ message: 'Update workout' });
});

// Delete workout
router.delete('/:id', (req, res) => {

// Export router
export default router;