class Node {
    constructor(data) {
        this.data = data;
        this.next = null;              
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    
    addFront2(val){
        let newNode= new Node(val)
        
        if (this.head){
        newNode.next=this.head;
        this.head =newNode;
        return this.head
        }
        this.head=newNode;
        return this.head
    } 

    removeFront(){
        if (!this.head){
            return null
        }
        this.head=this.head.next
        return this.head
    }

    front(){
        if (!this.head){
        return null
        }
        return this.head.value
    }

    display(){
        var arr =[]
        if(this.head){
                var runner = this.head
                while(runner != null){
                        arr.push(runner.data)
                        runner = runner.next
                    }
                }
            return arr
        }
    }
        

let list = new LinkedList()
list.addFront2(3)
list.addFront2(4)
list.addFront2(5)
list.addFront2(6)
console.log(list.display())







