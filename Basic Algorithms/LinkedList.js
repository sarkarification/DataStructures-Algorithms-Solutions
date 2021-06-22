class Node {
  constructor(value){
        this.value= value,
        this.next= null
  }

}

class LinkedList {
  constructor(value){
    this.head = {
        value: value,
        next: null
    }
    
    this.tail = this.head;
    this.length = 1;

  }

  append = (value) => {

    const newNode = new Node(value);
      this.tail.next = newNode;
       this.tail = newNode;
       this.length++;

      //  return this;
  }

  prepend = (value) => {
    const newNode = new Node(value);

    const oldHead = this.head;
    this.head = newNode;
     this.head.next = oldHead;
    this.length++;
    //  return this;
  }

  printList = () => {
    const Array =  [];
    let currentNode = this.head;

    while(currentNode !== null) {
        Array.push(currentNode.value);
        currentNode = currentNode.next;
    }
    return Array;
  }

  traversetoIndex = (index) => {
      let counter =0;
      let currentNode = this.head;

      while(counter !== index) {
          currentNode = currentNode.next;
          counter ++
      }
      return currentNode;

  }

  insert = (position, value ) => {
      if (position === 0) {
        this.prepend(value);
        return this.printList();
      } 
      if(position >= this.length) {
        this.append(value);
        return this.printList();
      }
      
      const newNode = new Node(value);
      const leader = this.traversetoIndex(position-1);
      const nextNode = leader.next;
      leader.next = newNode;
      newNode.next = nextNode;
  }

  remove = (position) => {
      if (position === 0) {
        this.head = this.head.next;
      } 
      else if(position >= this.length || position < 0){
        console.log("Index Not found")
      } 
      else {
        const preremovenode = this.traversetoIndex(position-1);
        const removeNode = preremovenode.next;
        preremovenode.next = removeNode.next;
        this.length--;
      }
  }

  reverse = ()=> {
      if(!this.head.next) {
        return this.head
      }
      let first = this.head; 
      this.tail = this.head; 
      let second = first.next; 
      while(second) {
        const temp = second.next; 
        second.next = first; 
        first =second;
        second =temp;
      }
      this.head.next = null;
      this.head = first; 
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(95)
myLinkedList.prepend(25)
myLinkedList.insert(3,96)
// myLinkedList.remove(3);
myLinkedList.reverse();
myLinkedList.printList();

// console.log(myLinkedList)
