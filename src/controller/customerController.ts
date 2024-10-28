// src/controllers/customer.controller.ts
import { Request, Response } from 'express';
import Customer from '../model/customerModel';

export const createCustomer = async (req: Request, res: Response):Promise<void> => {
        try {
            const { customerShortId, customerName, customerEmail, customerPhone, branchShortId } = req.body;
            const customer = new Customer({ customerShortId, customerName, customerEmail, customerPhone, branchShortId });
            await customer.save();
            res.status(201).json(customer);
        } catch(error) {
            res.status(500).json({message: 'Error creating customer', error});
        }
};

export const getCustomerById = async (req: Request, res: Response): Promise<void> => {
    try {
        const customer = await Customer.findById(req.params.id);
        if (!customer) {
            res.status(404).json({ message: 'Customer not found' });
        }
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching customer', error });
    }
};
 
// Get all branches
export const getAllCustomers = async (req: Request, res: Response): Promise<void> => {
    try {
        const customers = await Customer.find();
        res.json(customers);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching customers', error });
    }
};

export const updateCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
        const { customerShortId, customerName, customerEmail, customerPhone, branchShortId } = req.body;
        const customer = await Customer.findByIdAndUpdate(
            req.params.id,
            { customerShortId, customerName, customerEmail, customerPhone, branchShortId, updatedAt: new Date() },
            { new: true }
        );
        if (!customer) {
            res.status(404).json({ message: 'Branch not found' });
        }
        res.json(customer);
    } catch (error) {
        res.status(500).json({ message: 'Error updating customer', error });
    }
};
 
// Delete a branch by ID
export const deleteCustomer = async (req: Request, res: Response): Promise<void> => {
    try {
        const customer = await Customer.findByIdAndDelete(req.params.id);
        if (!customer) {
            res.status(404).json({ message: 'Customer not found' });
        }
        res.json({ message: 'Customer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting customer', error });
    }
};
 

 
