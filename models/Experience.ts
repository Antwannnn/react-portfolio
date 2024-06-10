import { Schema, model, models } from 'mongoose';

const ExperienceSchema = new Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: true 
    },
    image: {
        type: String,
        required: true
    },
    company: { 
        type: String, 
        required: true 
    },
    startDate: { 
        type: Date, 
        required: true 
    },
    endDate: { 
        type: Date, 
        required: true 
    },
},
    { timestamps: true }
);

const registeredModel = models.Experiences;

export default registeredModel || model('Experiences', ExperienceSchema);