// function print1(callback){
    
//     console.log('Print 1')
//     callback();
// }

// function print2(){
//     console.log('Print 2')
// }

// print1(print2);
 


let print1 = () => {
  console.log("print 1");
}

let print2 = (callback) => {
  console.log("print 2");
  callback();
}

print2(print1);