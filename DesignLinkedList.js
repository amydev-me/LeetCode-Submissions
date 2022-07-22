var Node = function(value){ 
    this.value = value;
    this.next = null; 
}

var MyLinkedList = function() { 
  this.length = 0; 
  this.head = null;  
};

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
  if (index < 0 || index >= this.length) return -1;
  
  let currNode = this.head;let value = undefined, count = 0;
  
  while(currNode){   
     
    if(count == index){
      return currNode.value;
    }
    currNode = currNode.next;
    count++;
  }  
};
 
/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = new Node(val);
    if(this.head == null){
      this.head = newNode;  
    }else{
      newNode.next = this.head;
      this.head = newNode; 
    }
    this.length++; 
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
  let newNode = new Node(val); 
  if(!this.head){
    this.addAtHead(val);
    return;
  } 
  let currNode = this.head;
 
  while(currNode.next != null){
    currNode = currNode.next;
  }
  currNode.next = newNode;
  this.length++; 
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) { 
  if(index > this.length){ return; }
  if(index === 0){
    this.addAtHead(val)
    return;
  }
   
  if(this.length === index) {
    this.addAtTail(val);
    return;
  }
   
  let newNode = new Node(val); 
  let count = 0;
  let prev = this.head;
  
  while(count !== index - 1){
    prev = prev.next;
    count++; 
  } 
  
  let next = prev.next;
  newNode.next = next;
  prev.next = newNode; 
  this.length++;
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) { 
  
  if(index < 0 || index >= this.length){ return; }
  
  if(index === 0){
    this.head = this.head.next;
     this.length--;
    return;
  }
  
  let count = 0;
  let prev = this.head; 
  while(count !== (index - 1)){
    prev = prev.next;
    count++; 
  } 
  prev.next = prev.next.next; 
  this.length--;
};
