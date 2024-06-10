import dbConnect from "@/utils/dbConnect"
import Project from "@/models/Project"

export async function POST (req, res) {
    try {
        await dbConnect()
        const project = new Project(req.body)
        await project.save()
        res.status(201).json(project)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export async function GET (req, res) {
    try {
        await dbConnect()
        const projects = await Project.find()
        res.status(200).json(projects)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export async function PUT (req, res) {
    try {
        await dbConnect()
        const project = await Project.findByIdAndUpdate
            (req.query.id, req.body
            , { new: true, runValidators: true })
        if (!project) {
            return res.status(404).json({ error: "Project not found" })
        }
        res.status(200).json(project)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export async function DELETE (req, res) {
    try {
        await dbConnect()
        const project = await Project.findByIdAndDelete(req.query.id)
        if (!project) {
            return res.status(404).json({ error: "Project not found" })
        }
        res.status(204).end()
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}