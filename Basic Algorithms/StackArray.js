
class Stack {
  constructor(){
    this.arr = [];    
  }
  peek() {
    return this.arr;
  }
  push(value){
    this.arr.push(value);
  }
  pop(){
    if(this.arr.length === 1){
        this.arr = null;
        return;
    } else{
      // this.arr.length= this.arr.length-1;
      this.array.pop();
    }
  }
    
  //isEmpty
}

const myStack = new Stack();
myStack.push("Likhan");
myStack.push("Udemy");
myStack.push("Google");
myStack.push("Discord");
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.peek();
// console.log(myStack);

//Discord
//Udemy
//google



