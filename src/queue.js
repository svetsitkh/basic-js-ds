const { NotImplementedError, ListNode } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  queue = null;

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    let currentQueueElement = this.queue;
    let prevQueueElement = null;
    while (currentQueueElement) {
      prevQueueElement = currentQueueElement;
      currentQueueElement = currentQueueElement.next;
    }

    const newQueueElement = new ListNode(value);

    if (prevQueueElement) {
      prevQueueElement.next = newQueueElement;
    } else {
      this.queue = newQueueElement;
    }
  }

  dequeue() {
    let firstQueueElement = this.queue;
    this.queue = firstQueueElement ? firstQueueElement.next : null;
    return firstQueueElement?.value;
  }
}

module.exports = {
  Queue
};
