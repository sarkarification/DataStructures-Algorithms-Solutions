class Node {
  constructor(value) {
    this.value = value,
      this.prev = null,
      this.next = null

  }

}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null
    }

    this.tail = this.head;
    this.length = 1;

  }

  append = (value) => {
    const newNode = new Node(value);
    newNode.prev = this.tail
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;

  }

  prepend = (value) => {
    const newNode = new Node(value);

    const oldHead = this.head;

    this.head = newNode;
    this.head.prev = null;
    this.head.next = oldHead;
    this.length++;
    //  return this;
  }

  printList = () => {
    const Array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      Array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return Array;
  }

  traversetoIndex = (index) => {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++
    }
    return currentNode;

  }

  insert = (position, value) => {
    if (position === 0) {
      this.prepend(value);
      return this.printList();
    }
    if (position >= this.length) {
      this.append(value);
      return this.printList();
    }

    const newNode = new Node(value);
    const leader = this.traversetoIndex(position - 1);
    const nextNode = leader.next;
    leader.next = newNode;
    newNode.next = nextNode;
    newNode.prev = leader;

    this.length++;
  }

  remove(position) {
    if (position === 0) {
      this.head = this.head.next;
      this.head.prev = null;
    }
    else if (position >= this.length || position < 0) {
      console.log("Index Not found")
    }
    else {
      const leader = this.traversetoIndex(position - 1);
      const unwantedNode = leader.next;
      const nextNode = unwantedNode.next
      leader.next = unwantedNode.next;
      nextNode.prev = leader

      this.length--;
      // return this.printList();
    }
  }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5)
myLinkedList.append(16)
myLinkedList.append(95)
myLinkedList.prepend(25)
myLinkedList.insert(1,96)
myLinkedList.remove(0)
myLinkedList.printList();

// console.log(myLinkedList);