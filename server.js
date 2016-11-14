var express = require('express'),
    multer = require('multer');

var upload = multer();

var app = express();
app.set('port', process.env.PORT ||  8080);

//index/upload page
app.use('/', express.static('public'));

//handle post request
app.post('/filesize', upload.single('analyse'), function(req, res) {
    //if no file is uploaded
    if(!req.file) {
        return res.send(JSON.stringify({error: 'no file selected'}));
    }

    res.send(JSON.stringify({size: req.file.size}));
});

app.listen(app.get('port'));
