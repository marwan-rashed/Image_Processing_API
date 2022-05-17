import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

export default class Files {
    static fullImagePath  = `${__dirname}/../../assets/images/full`;
    static thumbImagePath = `${__dirname}/../../assets/images/thumbnails`;
    
    static async getAvailableImages(): Promise<string[]> {
        const images: string[] = [];
        (await fs.readdir(Files.fullImagePath)).forEach((fileName) => {
            images.push(fileName.split('.')[0]);
        });

        return images;
    }

    static async thumbIsExist(params: {filename: string, width: number, height: number}): Promise<string> {
        const filePath = path.resolve(
            Files.thumbImagePath,
            `${params.filename}_${params.height}_${params.width}.jpg`
        );

        const thumb: string = 
                await fs.access(filePath)
                        .then(() => {
                            return filePath;
                        })
                        .catch(() => {
                            return '';
                        });
        return thumb;
    }

    static async createThumb(params: {
        filename: string, width: number, height: number
    }): Promise<string> {
        const fullPath = `${Files.fullImagePath}/${params.filename}.jpg`;

        const thumbPath = path.resolve(
            Files.thumbImagePath,
            `${params.filename}_${params.height}_${params.width}.jpg`
        );

        const thumb: string = 
                await sharp(fullPath)
                        .resize(params.width, params.height)
                        .toFormat('jpg')
                        .toFile(thumbPath)
                        .then(() => {
                            return thumbPath
                        })
                        .catch(() => {
                            return '';
                        });
        return thumb;
    }
}