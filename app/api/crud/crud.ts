/// This file contains the CRUD operations for the models
import dbConnect from '@/utils/dbConnect';

// This is an enum linking the model name to its associated mongoose model
export const models = Object.freeze({
    'experience': require('@/models/Experience'),
    'project': require('@/models/Project'),
    'skill': require('@/models/Skill'),
});


// Create
export async function POST( model: string, req: any, res: any ){

    if (!model) return res.status(404).json({ message: 'Invalid model name' });

    await dbConnect();
    const Model = models[model];

    const request = await req.json()
    if(request === undefined) {
        return res.status(400).json({ message: 'Bad request' })
    }
    if(Model === undefined) {
        return res.status(404).json({ message: 'Model not found' })
    }

    const exists = await Model.findById(request._id);
    if(exists){
        return res.status(409).json({ message: 'Conflict, entry already exists' })
    }

    const data = await Model.create(request);
    res.status(201).json(data);
}

// Read
export async function GET( model: string, req: any, res: any ){

    if (!model) return res.status(404).json({ message: 'Invalid model name' });

    await dbConnect();
    const Model = models[model];
    const request = await req.json()

    if(Model === undefined) {
        return res.status(404).json({ message: 'Model not found' })
    }

    const data = await Model.findById(request._id);

    if(!model){
        return res.status(404).json({ message: 'Not found' });
    }

    res.status(200).json(data);
}

// Update
export async function PUT( model: string, req: any, res: any ){

    if (!model) return res.status(404).json({ message: 'Invalid model name' });

    await dbConnect();
    const Model = models[model];
    const request = await req.json()

    if(Model === undefined) {
        return res.status(404).json({ message: 'Model not found' })
    }
    const data = await Model.findByIdAndUpdate(request._id, req.body, { new: true });
    if(data === null) {
        return res.status(404).json({ message: 'Not found' });
    }

    res.status(200).json(data);
}

// Delete
export async function DELETE( model: string, req: any, res: any ){

    if (!model) return res.status(404).json({ message: 'Invalid model name' });

    await dbConnect();
    const Model = models[model];
    const request = await req.json()

    if(Model === undefined) {
        return res.status(404).json({ message: 'Model not found' })
    }
    
    const data = await Model.findByIdAndDelete(request._id);
    if(data === null) {
        return res.status(404).json({ message: 'Not found' });
    }
    res.status(200).json(data);
}

