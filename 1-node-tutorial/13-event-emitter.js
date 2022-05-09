const Events = require('events');

const customEmitter = new Events();

customEmitter.on('response', (param1, param2)=>{
     console.log(`data received param1: ${param1}, param2: ${param2}`);
});
customEmitter.on('response', ()=>{
     console.log('data another');
});

customEmitter.emit('response','thiện',22);