// src/models/customer.model.ts
import mongoose, { Document, Schema } from 'mongoose';

export interface ICustomer extends Document {
    customerShortId: string;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    branchShortId: string;
}

const customerSchema: Schema = new Schema({
    customerShortId: {type: String, required:true, unique:true, default: ()=>`CUST${Date.now()}`},
    customerName: { type: String, required: true },
    customerEmail: { type: String, required: true, unique: true },
    customerPhone: { type: String, required: true },
    branchShortId: { type: String, required: true }
});

const Customer = mongoose.model<ICustomer>('Customer', customerSchema);
export default Customer;
