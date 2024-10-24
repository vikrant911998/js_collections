class LinkedListNode<T>{
	private _value!: NonNullable<T>;
	private _next!: LinkedListNode<NonNullable<T>> | null;

	constructor(value: NonNullable<T>, next: LinkedListNode<NonNullable<T>> | null = null) {
		this.value = value;
		this.next = next;
	}

	set value(argValue: NonNullable<T>) {
		this._value = argValue;
	}

	get value(): NonNullable<T> {
		return this._value;
	}

	set next(node: LinkedListNode<NonNullable<T>> | null) {
		this._next = node;
	}

	get next(): LinkedListNode<NonNullable<T>> | null {
		return this._next;
	}
}