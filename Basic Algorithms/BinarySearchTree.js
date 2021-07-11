class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
    this.height = 0;
  }

  insert(value){
    const newNode = new Node(value);
    if(this.root === null){
      this.root = newNode;
    }
    else{
      let currentNode = this.root;
      while(true){
        if(newNode.value > currentNode.value){
          if(!currentNode.right) {currentNode.right = newNode; break;}
          else {currentNode = currentNode.right}
        }
        if(newNode.value < currentNode.value){
          if(!currentNode.left) {currentNode.left = newNode; break;}
          else {currentNode = currentNode.left}
        }
        if(newNode.value === currentNode.value) {
          console.log("No Duplicates"); 
          return null;}
      }
    }
    

  }

  lookup(value){
    if(this.root.value === null){
      return false;
    }
      let currentNode = this.root;
      while(true){
        if(value > currentNode.value){
          if(!currentNode.right) return false;
          const rightNode = currentNode.right;
          if(rightNode.value === value) return rightNode; //return true; 
          currentNode  = rightNode;
        }
        if(value < currentNode.value){
          if(!currentNode.left) return false;
          const leftNode = currentNode.left;
          if(leftNode.value === value) return leftNode; //return true
          currentNode  = leftNode;
        }
        if(value === currentNode.value){
          return currentNode; // return true
        }
      }
      return false;
    }

  remove(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    let parentNode = null;
    while(currentNode){
      if(value < currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.left;
      } else if(value > currentNode.value){
        parentNode = currentNode;
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        //We have a match, get to work!
        
        //Option 1: No right child: 
        if (currentNode.right === null) {
          if (parentNode === null) {
            this.root = currentNode.left;
          } else {
            
            //if parent > current value, make current left child a child of parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.left;
            
            //if parent < current value, make left child a right child of parent
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = currentNode.left;
            }
          }
        
        //Option 2: Right child which doesnt have a left child
        } else if (currentNode.right.left === null) {
          currentNode.right.left = currentNode.left;
          if(parentNode === null) {
            this.root = currentNode.right;
          } else {
            
            //if parent > current, make right child of the left the parent
            if(currentNode.value < parentNode.value) {
              parentNode.left = currentNode.right;
            
            //if parent < current, make right child a right child of the parent
            } else if (currentNode.value > parentNode.value) {
              parentNode.right = currentNode.right;
            }
          }
        
        //Option 3: Right child that has a left child
        } else {

          //find the Right child's left most child
          let leftmost = currentNode.right.left;
          let leftmostParent = currentNode.right;
          while(leftmost.left !== null) {
            leftmostParent = leftmost;
            leftmost = leftmost.left;
          }
          
          //Parent's left subtree is now leftmost's right subtree
          leftmostParent.left = leftmost.right;
          leftmost.left = currentNode.left;
          leftmost.right = currentNode.right;

          if(parentNode === null) {
            this.root = leftmost;
          } else {
            if(currentNode.value < parentNode.value) {
              parentNode.left = leftmost;
            } else if(currentNode.value > parentNode.value) {
              parentNode.right = leftmost;
            }
          }
        }
      return true;
      }
    }
  }
  
  breadthFirstSearch(){
    //level order Traversal
    let currentNode = this.root;
    let list = [];
    let queue = [];
    queue.push(currentNode);
    while (queue.length > 0){
      currentNode = queue.shift();
      list.push(currentNode.value)
      if(currentNode.left){
        queue.push(currentNode.left)
      }
      if(currentNode.right){
        queue.push(currentNode.right)
      }
    }
    return list;
  }

  breadthFirstSearchRecursive(queue,list){
    if(queue.length === 0) {
      return list;
    }
    let currentNode = queue.shift();
    list.push(currentNode.value)
    if(currentNode.left){
        queue.push(currentNode.left)
      }
      if(currentNode.right){
        queue.push(currentNode.right)
      }
    return this.breadthFirstSearchRecursive(queue,list);
  }

  printPreorder(node) {
      //ROOT, LEFT, RIGHT
        if (node != null){
          console.log(node.value + " ");
          this.printPreorder(node.left);
          this.printPreorder(node.right);
          }
        
    }

printInorder(node) {
        //LEFT, ROOT, RIGHT
        if (node != null){
          this.printInorder(node.left);
          console.log(node.value + " ");
          this.printInorder(node.right);
        }
    }

printPostorder(node) {
        //LEFT, RIGHT, ROOT
        if (node != null){
          this.printPostorder(node.left);
          this.printPostorder(node.right);
          console.log(node.value + " ");
        }
    }

}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
// tree.breadthFirstSearch();
// tree.breadthFirstSearchRecursive([tree.root],[])
// tree.lookup(1)
// tree.remove(20);
// console.log(JSON.stringify(traverseNode(tree.root)));
console.log('----------------------');
tree.printPreorder(tree.root);
console.log('----------------------');
tree.printInorder(tree.root);
console.log('----------------------');
tree.printPostorder(tree.root);
//     9
//  4     20
//1  6  15  170

function traverseNode(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverseNode(node.left);
  tree.right = node.right === null ? null : traverseNode(node.right);
  return tree;
}


    
    