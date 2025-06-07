import mongoose from "mongoose";


//create schema for notes
//create a model based on the schema
const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
        },
        updatedAt: {
            type: Date,
        },
    }, 
    {timestamps: true} // Automatically manage createdAt and updatedAt fields
);

const Note = mongoose.model('Note', noteSchema);

export default Note;