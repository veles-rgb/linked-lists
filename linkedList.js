// linkedList.js
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
            return currentNode.value;
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

    find(value) {
        let currentNode = this.head;
        for (let i = 1; i < this.size() + 1; i++) {
            if (currentNode.value === value) {
                return i;
            } else {
                currentNode = currentNode.nextNode;
            }
        }
        return "Value not found in list.";
    }

    toString() {
        let listString = "";
        let currentNode = this.head;
        if (this.head === null) {
            return "Empty list!";
        } else {
            for (let i = 0; i < this.size() + 1; i++) {
                if (currentNode === null) {
                    listString += "null";
                } else {
                    listString += `(${currentNode.value}) -> `;
                    currentNode = currentNode.nextNode;
                }
            }
        }
        return listString;
    }

    insertAt(value, index) {
        if (index === 0 || index > this.size()) {
            return `Invalid index. Please use 1-${this.size()}.`;
        } else {
            if (index === this.size()) {
                this.append(value);
                return `Added ${value} to index ${index}.`;
            }
            if (index === 1) {
                this.prepend(value);
                return `Added ${value} to index ${index}.`;
            }
            let newNode = new Node(value);
            newNode.value = value;
            let currentNode = this.head;
            let previousNode;
            for (let i = 1; i < index; i++) {
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
            }
            previousNode.nextNode = newNode;
            newNode.nextNode = currentNode;
        }
    }

    removeAt(index) {
        if (index === 0 || index > this.size()) {
            return `Invalid index. Please use 1-${this.size()}.`;
        } else if (index === 1) {
            let currentNode = this.head;
            this.head = this.head.nextNode;
            return `Removed "${currentNode.value}" at index ${index}.`;
        } else {
            let currentNode = this.head;
            let previousNode;
            for (let i = 1; i < index; i++) {
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
            }
            const removedNode = previousNode.nextNode.value;
            previousNode.nextNode = currentNode.nextNode;
            currentNode = null;
            return `Removed "${removedNode}" at index ${index}.`;
        }
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

export { LinkedList };