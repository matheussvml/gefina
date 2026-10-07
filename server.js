import express from 'express';

const app = express();

app.get('/api/health', (request, response) => {
    response.status(200).json({ sucess: {
        status:200,
        message: 'Server is running.'
    }});
});

app.use((request, response) => {
    response.status(404).json({ error: {
        status:404,
        message: 'Resource not found.'
    }});
})

app.listen(3000);
