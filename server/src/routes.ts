import express from 'express';

const routes = express.Router();

routes.get('/', ( req, res) => {
    return res.send('200');
});

export default routes;