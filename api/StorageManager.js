import fs from 'fs';

export default class StorageManager {

    static GetStorageData(path) {
        try { return JSON.parse(fs.readFileSync(path)) }
        catch (e) {
            console.log(e)
            console.log("Create new data...")
            this.CreateEmptyStorage(path)
            return JSON.parse(fs.readFileSync(path))
        }
    }

    static WriteNewData(path, data) {
        fs.writeFileSync(path, JSON.stringify(data))
    }

    static CreateEmptyStorage(path) {
        fs.openSync(path, 'w', 0o666)
        fs.writeFileSync(path, JSON.stringify(this.GetEmptyData()))
        console.log('EmptyData is created by ' + path)

    }

    static GetEmptyData() {
        let data = {
            "dark_stack_0": {
                "01-0": [],
                "02-0": [],
                "03-0": [],
                "04-0": [],
                "05-0": [],
                "06-0": [],
                "07-0": [],
                "08-0": [],
                "09-0": [],
            },

            "grey_stack_0": {
                "01-1": [],
                "02-1": [],
                "03-1": [],
                "04-1": [],
                "05-1": [],
                "06-1": [],
                "07-1": [],
                "08-1": [],
                "09-1": [],
                "10-1": [],
                "09-1": [],
            },

            "grey_stack_1": {
                "01-2": [],
                "02-2": [],
                "03-2": [],
                "04-2": [],
                "05-2": [],
                "06-2": [],
                "07-2": [],
                "08-2": [],
                "09-2": [],
                "10-2": [],
                "11-2": [],
                "12-2": [],
            },

        }

        return data;

    }
}