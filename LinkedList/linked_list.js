class Node{

    /*
    An object for storing a single node in a linked list

    Attributes:
        data: Data stored in node
        next_node: Reference to next node in linked list
    */

    constructor(data, next_node = null){
        this.data = data;
        this.next_node = next_node;
    }
    __repr__(){
        return "Node data: " +  this.data;
    }

}

class SinglyLinkedList{
    /*
    Linear data structure that stores values in nodes. The list maintains a reference to the first node, also called head. Each node points to the next node in the list

    Attributes:
        head: The head node of the list
    */

    constructor(){
        this.head = null;
        // Maintaining a count attribute allows for len() to be implemented in
        //constant time
        this.__count = 0;
    }
    is_empty(){
        /*
        Determines if the linked list is empty
        Takes O(1) time
        */

        return this.head==null ? true : false;
    }

    length(){
        /*
        Returns the length of the linked list
        Takesn O(1) time
        */

        return this.__count;
    }

    add(data){
        /*
            Adds new Node containing data to head of the list
            Also called prepend
            Takes O(1) time
        */

        const new_head = Node(data, next_node=this.head)
        this.head = new_head
        this.__count += 1
    }
    search(key){
        /*
        Search for the first node containing data that matches the key
        Returns the node or `None` if not found
        Takes O(n) time
        */

        current = this.head

        while (current){
            if (current.data == key){
                return current
            }
            else
                current = current.next_node
        }
        return Null
    }
    insert(data, index){
        /*
        Inserts a new Node containing data at index position
        Insertion takes O(1) time but finding node at insertion point takes
        O(n) time.
        Takes overall O(n) time.
        */

        if (index >= this.__count){
            throw 'index out of range'
        }
        if (index == 0){
            this.add(data)
            return
        }
        if (index > 0){
            newNode = Node(data)
            position = index
            current = this.head

            while (position > 1){
                current = current.next_node
                position -= 1
            }
            prev_node = current
            next_node = current.next_node

            prev_node.next_node = newMode
            newNode.next_node = next_node
        }
        this.__count += 1
    }
    node_at_index(index){
        /*
        Returns the Node at specified index
        Takes O(n) time
        */

        if(index >= this.__count){
            throw 'index out of range'
        }
        if(index == 0){
            return this.head
        }

        current = this.head
        position = 0

        while (position < index){
            current = current.next_node
            position += 1
        }
        return current
    }
    remove(key){
        /*
        Removes Node containing data that matches the key
        Returns the node or `None` if key doesn't exist
        Takes O(n) time
        */

        current = this.head
        previous = null
        found = False

        while (current && !found){
            if (current.data === key && current === this.head){
                found = true;
                this.head = current.next_node;
                this.__count -= 1;
                return current;
            }
            else if(current.data == key){
                found = true
                previous.next_node = current.next_node
                this.__count -= 1
                return current
            }
            else{
                previous = current
                current = current.next_node
            }
        }
        return null
    }
    remove_at_index(index){
        /*
        Removes Node at specified index
        Takes O(n) time
        */

        if(index >= this.__count){
            throw 'index out of range';
        }
        current = this.head

        if(index == 0){
            this.head = current.next_node
            this.__count -= 1
            return current
        }
        position = index

        while(position > 1){
            current = current.next_node
            position -= 1
        }

        prev_node = current
        current = current.next_node
        next_node = current.next_node

        prev_node.next_node = next_node
        this.__count -= 1

        return current
    }
    //End of Single linked list implementation

}

//Double linked list
class Node{
    constructor(data, prev_node=None, next_node=None){
        this.data = data
        this.prev_node = prev_node
        this.next_node = next_node
    }
    __repr__(self){
        return `Node data: ${this.data}`
    }
}
class DoublyLinkedList{ 
    constructor(){
        this.head = null
        this.__count = 0
    }
    is_empty(){
        return this.head ===null ? true : false
    }

    __len__(){
        return  this.__count
    }
    add(data){
        /*
            Adds new Node containing data to head of the list
            Also called prepend
            Takes O(1) time
        */

        let new_head = Node(data, prev_node=null, next_node=this.head)

        if(!this.is_empty()){
            this.head.prev_node = new_head
        }
        this.head = new_head
        this.__count += 1
    }
    search(key){
        /*
            Search for the first node containing data that matches the key
            Returns the node or `None` if not found
            Takes O(n) time
        */

        let current = this.head

        while(current){
            if(current.data === key)
                return current
            else
                current = current.next_node
        }
        return null
    }
    node_at_index(index){
        /*
            Returns the Node at specified index
            Takes O(n) time
        */

        if(index >= this.__count)
            throw 'index out of range'

        if(index == 0)
            return this.head

        current = this.head
        position = 0

        while(position < index){
            current = current.next_node
            position += 1
        }
        return current
    }
    insert(data, index){
        /*
            Inserts a new Node containing data at index position
            Insertion takes O(1) time but finding node at insertion point takes
            O(n) time.
            Takes overall O(n) time.
        */

        if(index >= this.__count)
            throw 'index out of range'

        if(index == 0){
            this.add(data)
            return
        }
        if(index > 0){
            current_node = self.node_at_index(index)
            prev_node = current_node.prev_node
            new_node = Node(data, prev_node=prev_node, next_node=current_node)
            current_node.prev_node = new_node
            prev_node.next_node = new_node
        }
        this.__count += 1
    }
    remove(key){
        /*
            Removes Node containing data that matches the key
            Returns the node or `None` if key doesn't exist
            Takes O(n) time
        */

        current = this.head
        let found = false

        while (current && !found){
            if(current.data === key && current === this.head){
                found = true
                this.head = current.next_node
                this.head.prev_node = None
                this.__count -= 1
                return current
            }
            else if(current.data === key){
                found = true
                prev_node = current.prev_node
                next_node = current.next_node
                prev_node.next_node = next_node
                next_node.prev_node = prev_node
                this.__count -= 1
                return current
            }
            else
                current = current.next_node
        }
    }
    remove_at_index(index){
        /*
            Removes Node at specified index
            Takes O(n) time
        */

        if(index >= this.__count)
            throw 'index out of range'

        current = this.head

        if(index == 0){
            this.head = current.next_node
            this.head.prev_node = None
            this.__count -= 1
            return current
        }
        current = this.node_at_index(index)
        prev_node = current.prev_node
        next_node = current.next_node
        prev_node.next_node = next_node
        next_node.prev_node = prev_node

        this.__count -= 1

        return current
    }
}
//End of double linkedlist

