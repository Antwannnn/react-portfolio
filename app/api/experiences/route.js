import dbConnect from "@/utils/dbConnect"
import Experience from "@/models/Experience"

export async function POST (req, res) {
    try {
        await dbConnect()
        const experience = new Experience(req.body)
        await experience.save()
        res.status(201).json(experience)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export async function GET (req, res) {
    try {
        await dbConnect()
        const experiences = await Experience.find()
        res.status(200).json(experiences)
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export async function PUT (req, res) {
    try {
        await dbConnect()
        const experience = await Experience.findByIdAndUpdate
            (req.query.id, req.body
            , { new: true, runValidators: true })
        if (!experience) {
            return res.status(404).json({ error: "Experience not found" })
        }
        
        res.status(200).json(experience)

      }
    catch (error) {
        res.status(400).json({ error: error.message })
    }
}

export async function DELETE (req, res) {
    try {
        await dbConnect()
        const experience = await Experience.findByIdAndDelete(req.query.id)
        if (!experience) {
            return res.status(404).json({ error: "Experience not found" })
        }
        res.status(204).end()
    } catch (error) {
        res.status(400).json({ error: error.message })
    }
}