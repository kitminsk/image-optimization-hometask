const sharp = require("sharp");

async function resizeImageAndConvertToWebP() {
    const imageWidthsArr = [320, 768, 1024, 1920];
    try {
        for (const width of imageWidthsArr) {
            for (let i = 1; i<= 10; i++) {
                await sharp(`images/image${i}.jpeg`)
                    .resize({ width })
                    .webp({ lossless: true })
                    .toFile(`images/${ width }/image${i}.webp`);
            }
        }
    } catch (error) {
        console.log(error);
    }
}

async function resizeImageAndConvertToJpeg() {
    const imageWidthsArr = [320, 768, 1024, 1920];
    try {
        for (const width of imageWidthsArr) {
            for (let i = 1; i<= 10; i++) {
                await sharp(`images/image${i}.jpeg`)
                    .resize({ width })
                    .jpeg({ quality: 80 })
                    .toFile(`images/${ width }/image${i}.jpeg`);
            }
        }
    } catch (error) {
        console.log(error);
    }
}

resizeImageAndConvertToWebP();
resizeImageAndConvertToJpeg();
