import { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    level: {
        type: Number,
        required: true
    },
    logo: {
        type: String,
        required: true
    },
},
    { timestamps: true }
);

const registeredModel = models.Projects;

export default registeredModel || model('Projects', ProjectSchema);