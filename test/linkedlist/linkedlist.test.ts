import { LinkedList } from "src/linkedlist/linkedlist";
import { LinkedListNode } from "src/linkedlist/node";

describe("LinkedList", () => {
	let list: LinkedList<number>;

	beforeEach(() => {
		list = new LinkedList();
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


	it('should add element to the last', () => {
		list.addLast(new LinkedListNode(10));
		list.addLast(new LinkedListNode(20));
		expect(list.len()).toBe(2)
	});
});