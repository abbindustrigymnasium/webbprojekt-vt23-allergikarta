import express, { Express, Request, Response } from 'express';
import * as fs from 'fs';
import { AddressInfo } from 'net';

var app = express();


app.get('/:municipality/:restaurant_name/:gluten_free/:lactose_free', function (req: Request, res: Response) {
    // First read existing users.
    fs.readFile("./data.json", 'utf8', function (err, data) {
        var retrived_data = JSON.parse(data);
        console.log(retrived_data);
        res.end(JSON.stringify(retrived_data));
    });
})

app.post('/add_restaurant', function (req: Request, res: Response) {
    fs.readFile('./data.json', 'utf8', function (err, data) {
        var json = JSON.parse(data);
        json.push('restaurant: {title:' + req.body.name + ', municipality:' + req.body.municipality + ', gluten_free:' + req.body.gluten_free + ', lactose_free:' + req.body.lactose_free + '}');
        fs.writeFile("./data.json", JSON.stringify(json), (err) => console.log(err));
    });
})



var server = app.listen(8081, "127.0.0.1", function () {
    var addressinfo = server.address()! as AddressInfo
    console.log("Example app listening at http://%s:%s", addressinfo.address, addressinfo.port)
})