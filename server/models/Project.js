const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        comments: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
                comment: { type: String, required: true },
                createdAt: { type: Date, default: Date.now },
            },
        ],
        watch: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        code: {
            html: { type: String, default: "" },
            css: { type: String, default: "" },
            js: { type: String, default: "" },
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
