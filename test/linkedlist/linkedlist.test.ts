import { LinkedList } from "src/linkedlist/linkedlist";
import { LinkedListNode } from "src/linkedlist/node";

describe("LinkedList", () => {
	let list: LinkedList<number>;

	beforeEach(() => {
		list = new LinkedList<number>();
	});

	describe('should have method named: ', () => {
		it('add', () => {
			expect(list.add).toBeDefined();
			expect(typeof list.add).toBe('function');
		});

		it('addFirst', () => {
			expect(list.addFirst).toBeDefined();
			expect(typeof list.addFirst).toBe('function');
		});

		it('addLast', () => {
			expect(list.addLast).toBeDefined();
			expect(typeof list.addLast).toBe('function');
		});

		it('print', () => {
			expect(list.print).toBeDefined();
			expect(typeof list.print).toBe('function');
		});

		it('len', () => {
			expect(list.len).toBeDefined();
			expect(typeof list.len).toBe('function');
		});

		it('clear', () => {
			expect(list.clear).toBeDefined();
			expect(typeof list.clear).toBe('function');
		});

		it('get', () => {
			expect(list.get).toBeDefined();
			expect(typeof list.get).toBe('function');
		});

		it('getFirst', () => {
			expect(list.getFirst).toBeDefined();
			expect(typeof list.getFirst).toBe('function');
		});

		it('getLast', () => {
			expect(list.getLast).toBeDefined();
			expect(typeof list.getLast).toBe('function');
		});

		it('indexOf', () => {
			expect(list.indexOf).toBeDefined();
			expect(typeof list.indexOf).toBe('function');
		});

		it('lastIndexOf', () => {
			expect(list.lastIndexOf).toBeDefined();
			expect(typeof list.lastIndexOf).toBe('function');
		});

		it('remove', () => {
			expect(list.remove).toBeDefined();
			expect(typeof list.remove).toBe('function');
		});

		it('removeFirst', () => {
			expect(list.removeFirst).toBeDefined();
			expect(typeof list.removeFirst).toBe('function');
		});

		it('removeLast', () => {
			expect(list.removeLast).toBeDefined();
			expect(typeof list.removeLast).toBe('function');
		});

		it('toArray', () => {
			expect(list.toArray).toBeDefined();
			expect(typeof list.toArray).toBe('function');
		});

		it('isEmpty', () => {
			expect(list.isEmpty).toBeDefined();
			expect(typeof list.isEmpty).toBe('function');
		});
	});

	describe('clear method', () => {

		it('should clear a list', () => {
			list.add(new LinkedListNode(10));
			expect(list.len()).toBe(1);
			expect(list.isEmpty()).toBe(false);

			list.clear();

			expect(list.len()).toBe(0);
			expect(list.head).toBe(null);
			expect(list.isEmpty()).toBe(true);
		});

		it('should clear an empty list without errors', () => {
			expect(list.len()).toBe(0);
			expect(list.head).toBe(null);
			expect(list.isEmpty()).toBe(true);

			list.clear();

			expect(list.len()).toBe(0);
			expect(list.head).toBe(null);
			expect(list.isEmpty()).toBe(true);
		});

		it('should allow adding elements after clearing the list', () => {
			list.add(new LinkedListNode(10));
			list.add(new LinkedListNode(20));

			list.clear();

			list.add(new LinkedListNode(30));
			list.add(new LinkedListNode(40));

			expect(list.len()).toBe(2);
			expect(list.isEmpty()).toBe(false);
		});

		it('should handle clearing a list multiple times', () => {
			list.add(new LinkedListNode(10));
			list.add(new LinkedListNode(20));

			list.clear();
			list.clear();

			expect(list.len()).toBe(0);
			expect(list.head).toBe(null);
			expect(list.isEmpty()).toBe(true);
		});
	});

	describe('get method', () => {
		it('should retrieve the node at a valid index', () => {
			list.add(new LinkedListNode(10));
			list.add(new LinkedListNode(20));
			list.add(new LinkedListNode(30));

			expect(list.get(0)?.value).toBe(10);
			expect(list.get(1)?.value).toBe(20);
			expect(list.get(2)?.value).toBe(30);
		});

		it('should throw an error for a negative index', () => {
			list.add(new LinkedListNode(10));
			list.add(new LinkedListNode(20));

			expect(() => list.get(-1)).toThrow('Index out of bounds');
		});

		it('should throw an error for an index greater than or equal to the length', () => {
			list.add(new LinkedListNode(10));
			list.add(new LinkedListNode(20));

			expect(() => list.get(2)).toThrow('Index out of bounds');
			expect(() => list.get(4)).toThrow('Index out of bounds');
		});

		it('should throw an error when trying to get from an empty list', () => {
			expect(() => list.get(0)).toThrow('Index out of bounds');
		});

		it('should handle retrieving the first and last index node correctly', () => {
			list.add(new LinkedListNode(10));
			list.add(new LinkedListNode(20));
			list.add(new LinkedListNode(30));

			expect(list.get(0)?.value).toBe(10)
			expect(list.get(list.len() - 1)?.value).toBe(30);
		});
	});

	describe('getFirst method', () => {
		it('should retrieve the node at zeroth index', () => {
			list.add(new LinkedListNode(10));
			list.add(new LinkedListNode(20));
			list.add(new LinkedListNode(30));

			expect(list.getFirst()?.value).toBe(10);
		});

		it('should throw an error for an empty list', () => {
			expect(() => list.getFirst()).toThrow('Empty Linked List');
		});
	});
});