const util = require('./module/util');

module.exports = {
    draw: util.draw,
    draw2: util.draw2,
};

Promise.all([
    module.exports.draw2('small'),
    module.exports.draw2('medium'),
    module.exports.draw2('large'),
]).then((results)=>{
   // console.log(results);
});
