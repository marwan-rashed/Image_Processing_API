import express, { Request, Response } from 'express';
import imagesRouter from './images';

const router = express.Router();

router.use('/api/images', imagesRouter);

router.get(
    '/',
    (req: Request, res: Response): void => {
        res.end('<h1>Welcome to Image_Processing_API</h1>');
    }
);

export default router;