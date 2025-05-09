class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = node;
        }
    }

    prepend(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
        } else {
            let currentNode = this.head;
            this.head = node;
            node.nextNode = currentNode;
        }
    }

    size() {
        if (this.head === null) {
            return "Empty list!";
        } else {
            let count = 1;
            let currentNode = this.head;
            while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
                count++;
            }
            return count;
        }
    }

    getHead() {
        if (this.head === null) {
            return "Empty list!";
        } else {
            return this.head;
        }
    }

    getTail() {
        if (this.head === null) {
            return "Empty list";
        } else {
            let currentNode = this.head;
            while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }
            return currentNode;
        }
    }

    at(index) {
        let currentNode = this.head;
        if (index === 0) {
            return "Invalid Index. Please start at 1.";
        }
        for (let i = 1; i < index; i++) {
            currentNode = currentNode.nextNode;
        }
        if (currentNode === null) {
            return "Invalid index. Use size() to see the length of the list.";
        } else {
            return currentNode;
        }
    }

    pop() {
        let currentNode = this.head;
        let index = 1;
        const beforeLast = this.size() - 1;
        while (index !== beforeLast) {
            currentNode = currentNode.nextNode;
            index++;
        }
        console.log(`Removed "${currentNode.nextNode.value}"`);
        currentNode.nextNode = null;
    }

    contains(value) {
        let currentNode = this.head;
        for (let i = 0; i < this.size(); i++) {
            if (currentNode.value === value) {
                return true;
            } else {
                currentNode = currentNode.nextNode;
            }
        }
        return false;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export { LinkedList };