import { LinkedList } from "src/linkedlist/linkedlist";
import { LinkedListNode } from "src/linkedlist/node";

describe("LinkedList", () => {
	let list: LinkedList<number>;

	beforeEach(() => {
		list = new LinkedList(new LinkedListNode(23));
	});

	it('should have addLast method', () => {
		expect(list.addLast).toBeDefined();
		expect(typeof list.addLast).toBe('function');
	});

	it('should have length method', () => {
		expect(list.length).toBeDefined();
		expect(typeof list.length).toBe('function');
	});

	it('should add element to the last', () => {
		list.addLast(new LinkedListNode(20));
		expect(list.length()).toBe(2)
	});
});