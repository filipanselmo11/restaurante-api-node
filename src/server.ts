import express from 'express';
import { routes } from './routes';
import cors from 'cors';

const server = express();

server.use(express.json());
server.use(cors());
server.use(routes);

const PORT = 3333;

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});