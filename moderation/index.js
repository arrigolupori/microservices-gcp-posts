const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
    const { type, data } = req.body;

    if (type === 'CommentCreated') {
        const status = data.content.include('orange') ? 'rejected' : 'approved';

        await axios.post('https://redesigned-space-eureka-gww46gjpwqv2vjv9-4005.app.github.dev/', {
            type: 'CommentModerated',
            data: {
                id: data.id,
                postId: data.postId,
                status,
                content: data.content
            }
        })
    }

    res.send({});
});

app.listen(4003, () => {
    console.log('Listening on 4003');
});
