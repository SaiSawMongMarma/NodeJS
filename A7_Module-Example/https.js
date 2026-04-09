const { send } = require('./request.js');
const { read } = require('./response.js');
//const{ REQUEST_TIMEOUT } = require('./request');

function makeRequest(url,data){
    send(url,data);
    return read();
}

const responseData = makeRequest('https://google.com', 'hello');
console.log(responseData);

//console.log(require.cache);
  