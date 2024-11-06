export class LinkedListNode<T> {
	private _value!: NonNullable<T>;
	private _next!: LinkedListNode<T> | null;

	constructor(value: NonNullable<T>, next: LinkedListNode<T> | null = null) {
		this._value = value;
		this._next = next;
	}

	set value(argValue: NonNullable<T>) {
		this._value = argValue;
	}

	get value(): NonNullable<T> {
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