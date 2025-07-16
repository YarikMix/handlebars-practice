import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Пути
const srcDir = path.join('public', 'src');
const buildDir = path.join('public', 'build');

// Создаем директорию для сборки
fs.mkdirSync(buildDir, { recursive: true });

// Рекурсивно ищем все .hbs файлы
const findHbsFiles = (dir) => {
    const files = fs.readdirSync(dir, { withFileTypes: true });
    let hbsFiles = [];

    for (const file of files) {
        const fullPath = path.join(dir, file.name);

        if (file.isDirectory()) {
            hbsFiles = [...hbsFiles, ...findHbsFiles(fullPath)]; // Рекурсивный поиск в подпапках
        } else if (file.isFile() && file.name.endsWith('.hbs')) {
            hbsFiles.push(fullPath);
        }
    }

    return hbsFiles;
};

const hbsFiles = findHbsFiles(srcDir);

// Обрабатываем каждый шаблон
hbsFiles.forEach((hbsFile) => {
    console.log("hbsFile", hbsFile)
    // Определяем путь для выходного JS-файла
    const outputFile = path.join(
        buildDir,
        path.basename(hbsFile).replace('.hbs', '.js')
    );

    const cmd = `npx handlebars -m ${hbsFile} -f ${outputFile}`;
    execSync(cmd, { stdio: 'inherit', shell: true });
    console.log(`Файл ${hbsFile} успешно скомплирован`);
});
