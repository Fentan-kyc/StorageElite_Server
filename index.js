import express from 'express';
import StorageManager from "./api/StorageManager.js";
import Configuration from "./Configuration.js";





const port = Configuration.getServerPort();
const dataPath = Configuration.getDataPath();

let data = StorageManager.GetStorageData(dataPath)
console.log(data)

const server = express()
server.use(express.json())
server.listen(port, () => { console.log(`Server started on ${port} port, pid:${process.pid}`) })

server.get("/", function (request, response) {

    response.json(data)
});

server.post("/", (req, res) => {
    console.log("Something coming...")
    const newData = req.body;

    StorageManager.WriteNewData(dataPath, newData)
    res.send("OK")
    console.log("end")

    data = StorageManager.GetStorageData(dataPath)
    console.log(data)
})