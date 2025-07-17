import express from 'express';
import reload from "reload"
import {execSync} from "child_process";

// создаем объект приложения
const app = express();

// указываем путь до папки со статикой
app.use(express.static('public'))

// определяем обработчик для маршрута "/"
app.get("/", function(request, response){
    // отправляем ответ
    response.sendFile("/public/index.html", {'root': './'});
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000, () => {
    console.log("Server listening 3000");
});

reload(app).then(function () {
    execSync("npm run build", { stdio: 'inherit', shell: true });
});
