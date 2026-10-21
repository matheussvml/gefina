const invoices = [{
    id: 1,
    amount: 125039,
    status: 'pending',
    issueDate: '07-10-2026',
    dueDate: '05-11-2026',
    customer: {
        name: 'Construtora Meridiano',
        email: 'contato@meridiano.com.br'
    }
}, {
    id: 2,
    amount: 15340,
    status: 'paid',
    issueDate: '03-09-2026',
    dueDate: '05-10-2026',
    customer: {
        name: 'Gráfica Nova',
        email: 'nova@grafica.com.br'
    }
}, {
    id: 3,
    amount: 4504899,
    status: 'paid',
    issueDate: '01-09-2026',
    dueDate: '01-10-2026',
    customer: {
        name: 'Todos por Um',
        email: 'comercial@todosporum.com'
    }
}];

export function findAllInvoices() {
    return invoices;
}

export function findInvoiceById(id: number) {
    return invoices.find(element => element.id === id);
}
