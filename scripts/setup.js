import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const rootDir = path.join(path.dirname(fileURLToPath(import.meta.url)), '..');
console.log(rootDir);
const configPath = path.join(rootDir, 'repo_config.json');
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));

// Update vite.config.ts
const viteConfigPath = path.join(rootDir, 'vite.config.ts');
let viteConfig = fs.readFileSync(viteConfigPath, 'utf8');
viteConfig = viteConfig.replace(
    /base:\s*['"]\/.*['"]/,
    `base: '/${config.repo_name}/'`
);
fs.writeFileSync(viteConfigPath, viteConfig);

// Update index.html
const indexPath = path.join(rootDir, 'index.html');
let indexHtml = fs.readFileSync(indexPath, 'utf8');
indexHtml = indexHtml.replace(
    /<link rel="icon".*>/,
    `<link rel="icon" type="image/${config.logo_type}" sizes="32x32" href="/${config.logo_name}" />`
);
indexHtml = indexHtml.replace(
    /<title>.*<\/title>/,
    `<title>${config.title}</title>`
);
fs.writeFileSync(indexPath, indexHtml);

console.log('Setup complete. Configuration applied successfully.');
