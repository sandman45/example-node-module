const example = require('example-node-module');

example.draw();

Promise.all([
    example.draw2('small'),
    example.draw2('medium'),
    example.draw2('large'),
]).then((results)=>{
    // console.log(results);
});
