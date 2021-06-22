class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    return this.top;
  }
  push(value){
    const newNode = new Node(value);
    if(value === undefined) return null;

    if(this.length === 0) {
      this.bottom = newNode;
      this.top = this.bottom;

    } else if(this.length > 0) {
      const hold = this.top;
      this.top = newNode;
       this.top.next = hold;
       
    }
    this.length++;
    return this;
  }
  pop(){
    if(this.length === 1){
      this.top = null;
      this.bottom = null;
      this.length = 0;
    } else if(this.length > 1) {
      // const hold = this.top.next;
      // this.top = null;
      this.top = this.top.next;
      this.length--;
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



