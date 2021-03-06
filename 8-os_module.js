const os = require('os')

// info aobut current user
const user = os.userInfo()
console.log(user);

// method returns the system uyptime in seconnds
console.log(`The System Uptime is ${os.uptime} seconds`);

//
const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS);