// node JS event loop version lts/iron

// timer phrase

/* 
event loop phrase
    
    timer
      ⭣
    I/O callback
      ⭣
    idle, prepare
      ⭣
    poll
      ⭣ 
    check  (setImmediate)
      ⭣
    close
*/
const fs =require('fs')

fs.writeFile('./file.txt', 'anhdao153', (error)=>{
    if (error) throw error 
    console.log('running i/o callback');
})

setTimeout(() => console.log("timeout timer phrase"),0);
setImmediate(()=> console.log("immediately"))

