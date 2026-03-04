/**
 * Pre-converts all PNG screenshots in public/screenshots/ to WebP at build time.
 * WebP files are ~50-80% smaller than PNG, significantly improving mobile load time.
 * Run automatically via the `prebuild` npm script.
 */
import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import { join, extname, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const screenshotsDir = join(__dirname, '..', 'public', 'screenshots');

async function convertToWebP() {
    let files;
    try {
        files = await readdir(screenshotsDir);
    } catch (err) {
        console.warn('[webp] Could not read screenshots directory:', err.message);
        return;
    }

    const pngFiles = files.filter(f => extname(f).toLowerCase() === '.png');
    console.log(`[webp] Converting ${pngFiles.length} PNG files to WebP...`);

    let converted = 0;
    let skipped = 0;

    for (const file of pngFiles) {
        const inputPath = join(screenshotsDir, file);
        const outputName = basename(file, '.png') + '.webp';
        const outputPath = join(screenshotsDir, outputName);

        try {
            // Check if WebP already exists and is newer than the PNG
            let shouldConvert = true;
            try {
                const [pngStat, webpStat] = await Promise.all([
                    stat(inputPath),
                    stat(outputPath),
                ]);
                if (webpStat.mtime >= pngStat.mtime) {
                    shouldConvert = false;
                }
            } catch {
                // WebP doesn't exist yet — convert
            }

            if (shouldConvert) {
                await sharp(inputPath)
                    .webp({ quality: 82 })
                    .toFile(outputPath);
                converted++;
                console.log(`[webp]   ✓ ${file} → ${outputName}`);
            } else {
                skipped++;
            }
        } catch (err) {
            console.error(`[webp]   ✗ Failed to convert ${file}:`, err.message);
        }
    }

    console.log(`[webp] Done — ${converted} converted, ${skipped} already up to date.`);
}

convertToWebP();
