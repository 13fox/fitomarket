import * as nodePath from 'path';
const rootFolder=nodePath.basename(nodePath.resolve());

const buildFolder='./dist';
const srcFolder='./html';

export const path={
   build: {
    files:'${buildFolder}/files/'
   },
    src:{
        files:'${srcFolder}/**/*.*'
    },
    wath:{},
    buildFolder:buildFolder,
    srcFolder:srcFolder,
    rootFolder:rootFolder,
    ftp:``
}