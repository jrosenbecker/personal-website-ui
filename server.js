//Install express server
const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

const forceSSL = function() {
    return function (req, res, next) {
        if (req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect(
            ['https://', req.get('Host'), req.url].join('')
        );
        }
        next();
    }
}
// Instruct the app
// to use the forceSSL
// middleware
if (process.env.ENVIRONMENT === 'PROD') {
    console.log('Forcing SSL');
    app.use(forceSSL());
}

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/index.html'));
});

// Start the app by listening on the default Heroku port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});