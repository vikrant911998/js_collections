import { LinkedListNode } from "./node";


export class LinkedList<T> {
	private _head: LinkedListNode<T> | null = null;
	private _length: number = 0;

	set head(argHead: LinkedListNode<T>) {
		this._head = argHead;
	}
	get head(): LinkedListNode<T> | null {
		return this._head;
	}

	constructor(node?: LinkedListNode<T>) {
		if (!!node) {
			this.add(node);
		}
	}

	add(newNode: LinkedListNode<T>) {
		if (!this.head) {
			this.head = newNode;
		} else {
			let tempHead = this.head;
			while (tempHead.next !== null) {
				tempHead = tempHead.next;
			}
			tempHead.next = newNode;
		}
		this._length++;
	}

	addFirst(newNode: LinkedListNode<T>) {
		if (this.head === null) {
			this.head = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
		this._length++;
	}

	addLast(newNode: LinkedListNode<T>) {
		this.add(newNode);
	}

	print() {
		if (this.head !== null) {
			let tempHead: LinkedListNode<T> | null = this.head;
			while (tempHead !== null) {
				console.log(tempHead.toString());
				tempHead = tempHead.next;
			}
		} else {
			throw new Error("Linked List is empty");
		}
	}

	len() {
		return this._length;
	}

	clear() {

	}

	get() {

	}

	getFirst() {

	}

	getLast() {

	}

	indexOf() {

	}

	lastIndexOf() {

	}

	remove() {

	}

	removeFirst() {

	}

	removeLast() {

	}

	toArray() {

	}
}
