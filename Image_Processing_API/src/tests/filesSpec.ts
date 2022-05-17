import { promises as fs } from 'fs';
import path from 'path';
import Files from '../services/imgProcessing';

describe('Image processing tests', (): void => {
    it('returns all valid files', async (): Promise<void> => {
        const images = await Files.getAvailableImages();

        expect(images).toEqual(['encenadaport',
        'fjord',
        'icelandwaterfall',
        'palmtunnel',
        'santamonica']);
    });

    it('creates new thumbnail', async (): Promise<void> => {
        const thumbPath = await Files.createThumb({
            filename: 'fjord',
            width: 200,
            height: 200,
        });

        expect(thumbPath).toBe(path.resolve(
            Files.thumbImagePath,
            `fjord_200_200.jpg`
        ));
    });
});

afterAll(async (): Promise<void> => {
    const testPath: string = path.resolve(
        Files.thumbImagePath,
        'fjord_200_200.jpg'
    );

    await fs.access(testPath)
            .then(() => {
                fs.unlink(testPath);        
            })
            .catch(() => {});
});