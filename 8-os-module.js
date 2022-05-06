const os = require('os');

const user = os.userInfo();
console.log(user);

// return time using of this laptop
console.log(`the time i was used on this mac is: ${os.uptime()} second`);

const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs);