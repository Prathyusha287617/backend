// branchController.ts
import { Request, Response } from 'express';
import Branch from '../models/branchModel';

// Create a branch
export const createBranch = async (req: Request, res: Response): Promise<void> => {
    try {
        const { branchName, location, regionId, branchManager } = req.body;
        const branch = new Branch({ branchName, location, regionId, branchManager });
        await branch.save();
        res.status(201).json(branch);
    } catch (error) {
        res.status(500).json({ message: 'Error creating branch', error });
    }
};

// Get a single branch by ID
export const getBranchById = async (req: Request, res: Response): Promise<void> => {
    try {
        const branch = await Branch.findById(req.params.id);
        if (!branch) {
            res.status(404).json({ message: 'Branch not found' });
        }
        res.json(branch);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching branch', error });
    }
};

// Get all branches
export const getAllBranches = async (req: Request, res: Response): Promise<void> => {
    try {
        const branches = await Branch.find();
        res.json(branches);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching branches', error });
    }
};

// Update a branch by ID
export const updateBranch = async (req: Request, res: Response): Promise<void> => {
    try {
        const { branchName, location, regionId, branchManager } = req.body;
        const branch = await Branch.findByIdAndUpdate(
            req.params.id,
            { branchName, location, regionId, branchManager, updatedAt: new Date() },
            { new: true }
        );
        if (!branch) {
            res.status(404).json({ message: 'Branch not found' });
        }
        res.json(branch);
    } catch (error) {
        res.status(500).json({ message: 'Error updating branch', error });
    }
};

// Delete a branch by ID
export const deleteBranch = async (req: Request, res: Response): Promise<void> => {
    try {
        const branch = await Branch.findByIdAndDelete(req.params.id);
        if (!branch) {
            res.status(404).json({ message: 'Branch not found' });
        }
        res.json({ message: 'Branch deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting branch', error });
    }
};
