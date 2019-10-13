const Node = require('./node');

class LinkedList {
    constructor() {
        this._head = null;
      this._tail = null;
      this.length = 0;
    }

    append(data) {
        let node = new Node(data)
        if( this._tail===null) {
            this._head = node;
            this._tail = node;
            this.length++;

        }
        else{
            node.next = null;
            node.prev = this._tail;
            this._tail.next = node;
            this._tail = node;
            this.length++;
        }
        return this;
    }

    head() {
        if (this._head === null) {
            return null
        }
        else{
            return this._head.data
        }
     }
    

    tail() {
        if (this._tail === null) {
            return null
        }
        else{
        return this._tail.data
    }
    }

    at(index) { 
        let NodeYouNeed = this._head;

        for(var i=0; i<this.length; i++){
                      
            if (i === index){
                return NodeYouNeed.data;
            }

            NodeYouNeed = NodeYouNeed.next;
        }

    }

    insertAt(index, data) {
        let node = new Node(data)
        let NodeYouChange = this._head;
        for(var i=0; i<this.length; i++){
            if (i === index){
                if (i===0) {
                    node.prev = null;
                    node.next = this._head;
                    this._head.prev = node;
                    this._head = node;
                    this.length++;
                    break;
                }
                else{          
                    node.prev = NodeYouChange.prev;   
                    node.next = NodeYouChange;
                    NodeYouChange.prev = node;
                    node.prev.next = node;
                    this.length++; 
                    break;
                }
            }
            NodeYouChange = NodeYouChange.next;

        }
        return this;
    }
    isEmpty() {

        if (this._head === null) {
            return true
        }
        else {return false}

    }

    clear() {
       
        this._head = null;
        this._tail = null;
        this.length =0;
        return this;
    }

    deleteAt(index) {
        let NodeYouDelete = this._head;
        let NodeYouDeleted = null;
        for(var i=0; i<this.length; i++){
            
            if (i === index){
               if(i===0){
                NodeYouDelete.next = this._head;
                NodeYouDelete = NodeYouDeleted;
                break;
                }
                if(i === this.length-1){
                NodeYouDelete.prev = this._tail;
                NodeYouDelete = NodeYouDeleted;
                break;
                }
                else{
                NodeYouDelete.prev.next=NodeYouDelete.next;
                NodeYouDelete.next.prev=NodeYouDelete.prev;
                NodeYouDelete = NodeYouDeleted;
                break;
                }
        }
            NodeYouDelete = NodeYouDelete.next;
        }
        return this;
    }

    reverse() {
        let NodeStart = this._head;
        let NodeEnd = this._tail;
        let node;
        for(var i=0; i<this.length/2; i++){
            node = NodeEnd.data;
            NodeEnd.data = NodeStart.data;
            NodeStart.data = node;
            NodeStart = NodeStart.next;
            NodeEnd = NodeEnd.prev;
        }
        return this;
    }

    indexOf(data) {
        let NodeYouNeed = this._head;
        for (var i=0; i<this.length; i++) {
            
            if (NodeYouNeed.data === data){
                return i;
            }

            NodeYouNeed = NodeYouNeed.next;
        }
        return -1;
    }
}

module.exports = LinkedList;
