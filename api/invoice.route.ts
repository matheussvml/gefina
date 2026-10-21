import { Router } from 'express';

import { findAllInvoices, findInvoiceById } from './invoice.service.ts';

const router = Router();

router.get('/api/invoices', (request, response) => {
    const invoices = findAllInvoices();

    response.status(200).json(invoices);
});

router.get('/api/invoices/:id', (request, response) => {
    const id = Number(request.params.id);

    const invoice = findInvoiceById(id);

    if (!invoice) response.status(404).json({ error: {
        status: 404,
        message: 'Invoice not found.'
    }});

    response.status(200).json(invoice);
});

export default router;
