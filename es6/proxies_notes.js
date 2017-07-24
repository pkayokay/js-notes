// Something that represents someone else
// Add one object as a stand in for another object, to handle all the interactions for that object
// Requests, data.

new Proxy();

// Takes two items
// 1. Object that it will be the proxy for (who the boss is)
// 2. An object containing the list of methods it will handle for the proxies object (the type of work)

var richard = {status: 'looking for work'};
var agent = new Proxy(richard, {});
agent.status; // returns 'looking for work'

// the above is not not doing anything special with the proxy, it just passes the request diretly to the source object


// the key to making Proxies usefull is to use the handler object that's passed as the second object in the constructor


// 'get' trap is used to intercept call sto properties
const richard = {status: 'looking for work'};
const handler = {
    get(target, propName) {
        console.log(target); // the `richard` object, not `handler` and not `agent`
        console.log(propName); // the name of the property the proxy (`agent` in this case) is checking
    }
};
const agent = new Proxy(richard, handler);
agent.status; // logs out the richard object (not the agent object!) and the name of the property being accessed (`status`)