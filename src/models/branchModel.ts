import mongoose, { Document, Schema } from 'mongoose';

export interface IBranch extends Document {
    branchName: string;
    location: string;
    regionId: string; // Reference to Regions (can be a UUID)
    branchManager: string; // Reference to User (can be a UUID)
    createdAt: Date;
    updatedAt: Date;
}

const branchSchema: Schema = new Schema({
    branchName: { type: String, required: true },
    location: { type: String, required: true },
    regionId: { type: String, required: true }, // Adjust according to your implementation
    branchManager: { type: String, required: true }, // Adjust according to your implementation
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Branch = mongoose.model<IBranch>('Branch', branchSchema);
export default Branch;
