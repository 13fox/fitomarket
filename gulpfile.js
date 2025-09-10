import gulp from "gulp";
import { path } from "./gulp/config/path.js";
//Передаем значения в глобалную переменную
global.app={
    path:path,
    gulp:gulp
}

//Импорт задач
import { copy } from "./gulp/task/copy.js";

//задача по умолчанию
gulp.task('default',copy);