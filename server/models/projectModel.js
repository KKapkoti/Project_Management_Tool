//models/model.js
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    order: { 
        type: Number, 
        default: 0 
    },
    stage: { 
        type: String, 
        default: "Requested" 
    },
    index: { 
        type: Number, 
        default: 0 
    },
    attachment: [{ 
        type: String, 
        url: String 
    }],
    created_at: { 
        type: Date, 
        default: Date.now 
    },
    updated_at: { 
        type: Date, 
        default: Date.now 
    },
});

const projectSchema = new mongoose.Schema({
    title: { 
        type: String, 
        unique: true, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    task: [taskSchema]
}, { timestamps: true });

export default mongoose.model("Project", projectSchema);
