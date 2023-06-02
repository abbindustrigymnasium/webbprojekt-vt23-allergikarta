import express, { Express, request, Request, Response } from 'express';
import * as fs from 'fs';
import { AddressInfo } from 'net';
import cors from 'cors';

var app = express();

app.use(cors()) //  allow CORS

app.use(express.json());


app.get('/:municipality/:gluten_free/:lactose_free', function (req: Request, res: Response) {
    // first read existing data
    fs.readFile('./data.json', 'utf8', function (err, data) {
        var retrived_data = JSON.parse(data);
        var requested_data = []
        for (var i of retrived_data) {
            if (req.params.municipality == i[Object.keys(i)[1]].municipality && req.params.gluten_free == i[Object.keys(i)[1]].gluten_free && req.params.lactose_free == i[Object.keys(i)[1]].lactose_free)
                requested_data.push(i);
            console.log(i[Object.keys(i)[1]])
        }
        console.log(requested_data)

        res.end(JSON.stringify(requested_data));
    });

});

app.post('/add_restaurant', function (req: Request, res: Response) {
    fs.readFile('./data.json', 'utf8', function (err, data) {
        var json = JSON.parse(data);
        console.log(json);
        let data_to_push = { title: req.body.title, info: { municipality: req.body.municipality, gluten_free: req.body.gluten_free, lactose_free: req.body.lactose_free, rating: req.body.rating } };
        json.push(data_to_push);
        fs.writeFile('./data.json', JSON.stringify(json), (err) => console.log(err));
        res.end(JSON.stringify(json));
    });

});


var server = app.listen(8081, '127.0.0.1', function () {
    var addressinfo = server.address()! as AddressInfo
    console.log('Example app listening at http://%s:%s', addressinfo.address, addressinfo.port)
})