import mongoose, { Schema, Document } from "mongoose";

export interface IStudent extends Document {
    id: number;
    name: string;
    age: number;
}

const studentSchema: Schema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    age: { type: Number, required: true }
});

export default mongoose.model<IStudent>("Student", studentSchema);