// src/routes/customer.routes.ts
import express from 'express';
import { createCustomer, getCustomerById, getAllCustomers, updateCustomer, deleteCustomer } from '../controller/customerController';

const router = express.Router();

router.post('/', createCustomer);
router.get('/', getAllCustomers);
router.get('/:id', getCustomerById);
router.put('/:id', updateCustomer);
router.delete('/:id', deleteCustomer);

export default router;
