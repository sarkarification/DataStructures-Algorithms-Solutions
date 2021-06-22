

class QueueStack {
  constructor(){
    this.arr = [];    
  }
  peek() {
    if(!this.arr) return null;
    return this.arr[0];
  }
  enqueue(value){
    this.arr.push(value);
  }
  dequeue(){
    if(this.arr.length === 1){
        this.arr = null;
        return;
    } else{
      for(let i = 0 ; i< this.arr.length; i++){
        if(i == this.arr.length -1){
          this.arr.length= this.arr.length-1;
          break;
        }
        this.arr[i] = this.arr[i+1]
      }
      // this.array.pop();
    }
  }
    
  //isEmpty
}

const myStack = new QueueStack();
myStack.enqueue("Likhan");
myStack.enqueue("Udemy");
myStack.enqueue("Google");
myStack.enqueue("Discord");
myStack.dequeue();
myStack.dequeue();
// myStack.dequeue();
// myStack.dequeue();
// myStack.dequeue();
// myStack.dequeue();
myStack.peek();
// console.log(myStack);

//Discord
//Udemy
//google



