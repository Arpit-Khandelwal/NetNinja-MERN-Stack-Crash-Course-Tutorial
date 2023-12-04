import mongoose from "mongoose";

const Schema = new mongoose.Schema

const WorkoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    reps: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Workout', WorkoutSchema);
