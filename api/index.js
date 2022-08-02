
const server = require('./src/app.js');

server.set('port', process.env.PORT || 3001);

server.listen(server.get('port'), () => {
    console.log('Listen server on port', server.get('port'));
});
