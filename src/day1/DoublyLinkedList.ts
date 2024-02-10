type Node<T> = {
    value: T
    prev?: Node<T>
    next?: Node<T>
}

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>
    private tail?: Node<T>


    constructor() {
        this.length = 0
        this.head = undefined
        this.tail = undefined
    }

    prepend(item: T): void {
        // add to start
        this.length++
        const v: Node<T> = {value: item, prev: undefined, next: undefined}
        if (!this.head) {
            this.head = v
            this.tail = v
            return
        }
        this.head.prev = v
        v.next = this.head
        this.head = v
    }

    insertAt(item: T, idx: number): void {
        if (idx > this.length) {
            throw new Error("Invalid insert")
        } else if (idx === this.length) {
            this.append(item)
            return
        } else if (idx === 0) {
            this.prepend(item)
            return
        }

        const v: Node<T> = {value: item, prev: undefined, next: undefined}
        let current = this.getAt(idx);
        if (!current) {
            return
        }
        this.length++
        v.next = current
        v.prev = current.prev
        if (current.prev) {
            current.prev.next = v
        }
        current.prev = v
    }

    append(item: T): void {
        // add to end
        const v: Node<T> = {value: item, prev: undefined, next: undefined}
        this.length++
        if (!this.tail) {
            this.head = v
            this.tail = v
            return
        }
        this.tail.next = v
        v.prev = this.tail
        this.tail = v
    }

    remove(item: T): T | undefined {
        let current: Node<T> | undefined = this.head
        for (let i = 0; i < this.length && current; i++) {
            if (current.value === item) {
                break
            }
            current = current.next
        }
        return this.removeNode(current)
    }

    get(idx: number): T | undefined {
        return this.getAt(idx)?.value
    }

    removeAt(idx: number): T | undefined {
        let current: Node<T> | undefined = this.getAt(idx)
        return this.removeNode(current);
    }

    private removeNode(node: Node<T> | undefined): T | undefined {
        if (!node) {
            return undefined
        }
        this.length--
        if (this.length === 0) {
            this.head = undefined
            this.tail = undefined
            return node.value
        }
        if (node.prev) {
            node.prev.next = node.next
        }
        if (node.next) {
            node.next.prev = node.prev
        }
        if (node === this.head) {
            this.head = node.next
        }
        if (node === this.tail) {
            this.tail = node.prev
        }
        node.next = undefined
        node.prev = undefined
        return node.value
    }

    private getAt(idx: number): Node<T> | undefined {
        let current: Node<T> | undefined = this.head
        for (let i = 0; i < idx && current; i++) {
            current = current.next
        }
        return current;
    }
}