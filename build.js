import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Пути
const srcDir = path.join('public', 'src');
const buildDir = path.join('public', 'build');

// Создаем директорию для сборки
fs.mkdirSync(buildDir, { recursive: true });

// Маппинг шаблонов и их выходных файлов
const templates = [
    { input: 'components/home.hbs', output: 'home.js' },
    { input: 'components/posts.hbs', output: 'posts.js' },
    { input: 'components/settings.hbs', output: 'settings.js' },
];

// Обрабатываем каждый шаблон
templates.forEach(({ input, output }) => {
    const hbsFile = path.join(srcDir, input)
    if (!fs.existsSync(hbsFile)) {
        console.log(`Файл ${hbsFile} не найден`);
        return;
    }

    const outputFile = path.join(buildDir, output);
    const cmd = `npx handlebars -m ${hbsFile} -f ${outputFile}`;
    execSync(cmd, { stdio: 'inherit', shell: true });
    console.log(`Файл ${hbsFile} успешно скомплирован`);
});
