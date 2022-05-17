import { promises as fs } from 'fs';
import path from 'path';
import { getAllImages, newThumb, thumbsPath } from '../services/images';

describe('Image processing tests', (): void => {
    it('returns all valid files', async (): Promise<void> => {
        const images = await getAllImages();

        expect(images).toEqual(['encenadaport',
        'fjord',
        'icelandwaterfall',
        'palmtunnel',
        'santamonica']);
    });

    it('creates new thumbnail', async (): Promise<void> => {
        const thumbPath = await newThumb('fjord', 200, 200);

        expect(thumbPath).toBe(path.resolve(
            thumbsPath,
            `fjord_200_200.jpg`
        ));
    });
});

afterAll(async (): Promise<void> => {
    const testPath: string = path.resolve(
        thumbsPath,
        'fjord_200_200.jpg'
    );

    await fs.access(testPath)
            .then(() => {
                fs.unlink(testPath);        
            })
            .catch(() => {});
});