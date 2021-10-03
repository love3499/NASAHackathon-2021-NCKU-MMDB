
class Map_Point {
    constructor(name, lat, lon, type, level, earthquake, rainfall, rock_flow) {
        this.name = name;
        this.lat = lat;
        this.lon = lon;
        this.type = type;
        this.level = level;
        this.earthquake = earthquake;
        this.rainfall = rainfall;
        this.rock_flow = rock_flow;
    }
}


var express = require('express');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
//app.use('/public', express.static('public'));

app.get('/', function (req, res) {
    var points = [];
    points.push(new Map_Point("新威大橋", 22.891489, 120.636051, "bridge", "orange", "No record", "563mm (2021-09-29)", "No record"));
    points.push(new Map_Point("湖義路", 22.54134, 120.589545, "road", "red", "N/A", "N/A", "N/A"));
    points.push(new Map_Point("大津橋", 22.88006, 120.647541, "bridge", "green", "N/A", "N/A", "N/A"));
    points.push(new Map_Point("六龜大橋", 22.995832, 120.639753, "bridge", "green", "N/A", "N/A", "N/A"));
    points.push(new Map_Point("高美大橋", 22.842108, 120.573683, "bridge", "orange", "N/A", "N/A", "N/A"));
    points.push(new Map_Point("高樹大橋", 22.782504, 120.54526, "bridge", "green", "N/A", "N/A", "N/A"));
    points.push(new Map_Point("屏156線", 22.070183, 120.774746, "road", "orange", "N/A", "N/A", "N/A"));
    points.push(new Map_Point("溫泉路", 22.084287, 120.738354, "road", "green", "N/A", "N/A", "N/A"));
    points.push(new Map_Point("新曆路", 22.044071, 120.734646, "road", "orange", "N/A", "N/A", "N/A"));
    points.push(new Map_Point("獅子一巷", 22.232049, 120.681081, "road", "green", "N/A", "N/A", "N/A"));
    res.render('map', { points: points, req: req });
})

var server = app.listen(8081, function () {

    var host = server.address().address;
    var port = server.address().port;

    console.log("啟動成功, Port: %s", port);

})