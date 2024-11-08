export class LinkedListNode<T> {
	private _value!: T;
	private _next!: LinkedListNode<T> | null;

	constructor(value: T, next: LinkedListNode<T> | null = null) {
		this.value = value;
		this.next = next;
	}

	set value(argValue: T) {
		if (!argValue) {
			throw new Error('Node value possibly null or undefined');
		}
		this._value = argValue;
	}

	get value(): T {
		return this._value;
	}

	set next(node: LinkedListNode<T> | null) {
		this._next = node;
	}

	get next(): LinkedListNode<T> | null {
		return this._next;
	}

	hasNext(): boolean {
		return this._next !== null;
	}

	toString(): string {
		return `Node(value: ${this._value})`;
	}
}