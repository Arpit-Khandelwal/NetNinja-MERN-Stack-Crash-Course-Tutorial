import mongoose from "mongoose";

const { Schema } = mongoose;

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


const WorkoutModel = mongoose.model('WorkoutModel', WorkoutSchema);
export default WorkoutModel;