import { Schema, model, models } from 'mongoose';

const ProjectSchema = new Schema({
    title: { 
        type: String, 
        required: true 
    },
    description: { 
        type: String, 
        required: false 
    },
    techs: {
        type: [String],
        required: false
    },
    image: {
        type: String,
        required: false
    },
    project_url: {
        type: String,
        required: false
    },

},
    { timestamps: true }
);

const registeredModel = models.Projects;

export default registeredModel || model('Projects', ProjectSchema);