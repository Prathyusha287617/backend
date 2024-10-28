import express from 'express';
import {
    createBranch,
    getBranchById,
    getAllBranches,
    updateBranch,
    deleteBranch,
} from '../controllers/branchController';

const router = express.Router();

router.post('/', createBranch);
router.get('/', getAllBranches);
router.get('/:id', getBranchById);
router.put('/:id', updateBranch);
router.delete('/:id', deleteBranch);

export default router;
