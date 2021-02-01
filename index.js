exports.handler = async function(event, context, callback) {
console.log(event);
context.succeed('hello world');
};