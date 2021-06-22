class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value){
    const newNode = new Node(value);
    if(this.length === 0){
        this.first = newNode;
        this.last = newNode;
    }
    else {
      const hold = this.first;
      
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
  }
  dequeue(){

    if(this.isEmpty()) return null;

    if(this.length === 1){
      this.first = null;
      this.last = null;
    }else {
      this.first =this.first.next;

    }
    this.length--;
  }
  isEmpty() {
    if(!this.first && !this.last) return true;
    return false;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Datatatata");
myQueue.enqueue("Datatatata2");
myQueue.enqueue("Datatatata3");
myQueue.peek();
myQueue.dequeue();
myQueue.dequeue();
myQueue.peek();

console.log(myQueue);

//Joy
//Matt
//Pavel
//Samir