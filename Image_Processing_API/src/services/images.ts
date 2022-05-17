import { promises as fs } from 'fs';
import path from 'path';
import sharp from 'sharp';

export const imagesPath = `${__dirname}/../../assets/images/full`;
export const thumbsPath = `${__dirname}/../../assets/images/thumbnails`;

export async function getAllImages() {
    const images: string[] = [];
    (await fs.readdir(imagesPath)).forEach((fileName) => {
        images.push(path.parse(fileName).name);
    });
    
    return images;
}

export async function isThumbExist(filename: string, width: number, height: number) {
    const filePath = path.resolve(
        thumbsPath,
        `${filename}_${height}_${width}.jpg`
    );

    const thumbPath: string = 
                await fs.stat(filePath)
                        .then(() => {
                            return filePath;
                        })
                        .catch(() => {
                            return '';
                        });
    return thumbPath;
}

export async function newThumb(filename: string, width: number, height: number) {
    const fullPath  = path.resolve(
        imagesPath,
        `${filename}.jpg`
    );
    const thumbPath = path.resolve(
        thumbsPath,
        `${filename}_${height}_${width}.jpg`
    );

    const thumb: string = 
            await sharp(fullPath)
                    .resize(width, height)
                    .toFile(thumbPath)
                    .then(() => {
                        return thumbPath;
                    })
                    .catch(() => {
                        return '';
                    });
    return thumb;
}
