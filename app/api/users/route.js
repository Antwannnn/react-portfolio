import dbConnect from "@/utils/dbConnect"
import User from "@/models/User"

export async function POST (req, res) {
    try {
        await dbConnect()
        const user = new User(req.body)
        await user.save()
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export async function GET (req, res) {
    try {
        await dbConnect()
        const users = await User.find()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export async function PUT (req, res) {
    try {
        await dbConnect()
        const user = await User.findByIdAndUpdate
            (req.query.id, req.body
            , { new: true, runValidators: true })
        if (!user) {
            return res.status(404).json({ error: "User not found" })
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
        const user = await User.findByIdAndDelete(req.query.id)
        if (!user) {
            return res.status(404).json({ error: "Project not found" })
        }
        res.status(204).end()
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}