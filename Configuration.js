import { dirname } from 'path';
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url)) + '\\';

import * as dotenv from 'dotenv';
dotenv.config();





const PORT = process.env.PORT
const STORAGE_PATH = __dirname + process.env.DEFAULT_STORAGE_PATH;


export default {
    getServerPort() {
        return PORT;
    },
    getDataPath() {
        return STORAGE_PATH;
    }
}