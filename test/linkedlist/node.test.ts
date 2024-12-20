import { LinkedListNode } from 'src/linkedlist/node';

describe("LinkedListNode", () => {

	// Test for constructor initialization
	it('should initialize with the given value and next as null by default', () => {
		const node = new LinkedListNode(10);
		expect(node.value).toBe(10);
		expect(node.toString()).toBe(`Node(value: 10)`);
		expect(node.hasNext()).toBe(false);
		expect(node.next).toBeNull();
	});

	it('should throw error with null value', () => {
		try {
			new LinkedListNode(null);
		} catch (error) {
			expect(error).toBeInstanceOf(Error);
			expect((error as Error).message).toBe('Node value possibly null or undefined');
		}
	});

	// Test for setting and getting value
	it('should set and get the value correctly', () => {
		const node = new LinkedListNode(10);
		node.value = 20;
		expect(node.value).toBe(20);
	});

	// Test for setting and getting next
	it('should set and get the next node correctly', () => {
		const node1 = new LinkedListNode(10);
		const node2 = new LinkedListNode(20);
		node1.next = node2;
		expect(node1.next).toBe(node2);
	});
});