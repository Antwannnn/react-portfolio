import { model, models, Schema } from "mongoose";

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

const registeredModel = models.User;

export default registeredModel || model("User", UserSchema);