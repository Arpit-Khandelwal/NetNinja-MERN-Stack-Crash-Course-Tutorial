// Import express
import express from 'express';

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

router.post('/', (req, res) => {
    // Send JSON response
    res.json({ message: 'Create new workout' });
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