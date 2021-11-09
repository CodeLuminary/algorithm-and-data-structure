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

    __len__(){
        /*
        Returns the length of the linked list
        Takesn O(1) time
        */

        return this.__count;
    }
}

