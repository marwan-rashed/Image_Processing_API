import express, { Request, Response } from 'express';
import validate from '../middlewares/validation';
import { getAllImages, isThumbExist, newThumb } from '../services/images';

const router = express.Router();

router.get(
    '/',
    validate,
    async (req: Request, res: Response) => {
        const { filename, width, height } = req.query;

        const images = await getAllImages();

        if(typeof filename !== 'string' || !images.includes(filename)) {
            return res.status(400).end('Please enter a valid file name !');
        } else {
            if (typeof width == 'string' && typeof height == 'string') {
                const exist = await isThumbExist(filename, (parseInt(width)), (parseInt(height)));
                if(exist) {
                    return res.status(200).sendFile(exist);
                } else {
                    const thumb = await newThumb(filename, (parseInt(width)), (parseInt(height)));
                    if(thumb) {
                        return res.status(200).sendFile(thumb);
                    } else {
                        return res.status(500).end('Server error');
                    }
                }
            }
        }
    }
);

export default router;