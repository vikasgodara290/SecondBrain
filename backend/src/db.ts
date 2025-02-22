import mongoose, {model, Schema} from "mongoose";
const contentTypes = ["video", "audio", "article", "image"]

const UserSchema = new Schema(
    {
        username: {type: String, unique: true, required: true},
        password: {type: String, required: true}
    }
)

const ContentSchema = new Schema(
    {
        link: {type: String, required: true},
        type: {type: String, required: true, enum: contentTypes},
        title: {type: String, required: true},
        tags: {type: mongoose.Types.ObjectId, ref: "tags"},
        userId: {type: mongoose.Types.ObjectId, ref: "users"}
    }
)

const TagSchema = new Schema(
    {
        tag: {type: String, required: true, unique: true}
    }
)

export const UserModel = model("User", UserSchema);
export const ContentModel = model("Content", ContentSchema);
