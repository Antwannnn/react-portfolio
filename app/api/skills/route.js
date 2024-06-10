import dbConnect from "@/utils/dbConnect"
import Skill from "@/models/Skill"

export async function POST (req, res) {
    try {
        await dbConnect()
        const skill = new Skill(req.body)
        await skill.save()
        res.status(201).json(skill)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export async function GET (req, res) {
    try {
        await dbConnect()
        const skills = await Skill.find()
        res.status(200).json(skills)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export async function PUT (req, res) {
    try {
        await dbConnect()
        const skill = await Skill.findByIdAndUpdate
            (req.query.id, req.body
            , { new: true, runValidators: true })
        if (!skill) {
            return res.status(404).json({ error: "Skill not found" })
        }
        res.status(200).json(skill)
    }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export async function DELETE (req, res) {
    try {
        await dbConnect()
        const skill = await Skill.findByIdAndDelete(req.query.id)
        if (!skill) {
            return res.status(404).json({ error: "Skill not found" })
        }
        res.status(204).end()
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}