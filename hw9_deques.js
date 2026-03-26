// hw9_deques.js
// CIST 0265 — Week 9 Homework: Deques

// ─── Provided Deque Class (do not modify) ──────────────
class Deque {
  #items = [];
  addFront(item)  { this.#items.unshift(item); }
  addRear(item)   { this.#items.push(item); }
  removeFront()   { return this.#items.shift(); }
  removeRear()    { return this.#items.pop(); }
  peekFront()     { return this.#items[0]; }
  peekRear()      { return this.#items[this.#items.length - 1]; }
  isEmpty()       { return this.#items.length === 0; }
  get size()      { return this.#items.length; }
  clear()         { this.#items = []; }
  toString()      { return this.#items.join(" | "); }
}

// ════════════════════════════════════════════
// EXERCISE 4 — Palindrome Checker  (15 pts)
// ════════════════════════════════════════════
function isPalindrome(word) {
  const deque = new Deque();
  // YOUR CODE HERE
}

function longestPalindrome(words) {
  // YOUR CODE HERE
}

// ════════════════════════════════════════════
// EXERCISE 5 — Task Scheduler  (20 pts)
// ════════════════════════════════════════════
class TaskScheduler {
  #deque = new Deque();

  addUrgent(task)  { /* YOUR CODE HERE */ }
  addRoutine(task) { /* YOUR CODE HERE */ }

  processNext() {
    // YOUR CODE HERE
  }

  processLast() {
    // YOUR CODE HERE
  }

  processAll() {
    const results = [];
    // YOUR CODE HERE
    return results;
  }

  peek()     { return this.#deque.peekFront(); }
  get size() { return this.#deque.size; }
  toString() { return this.#deque.toString(); }
}

// ════════════════════════════════════════════
// EXERCISE 6 — BONUS: Sliding Window Maximum  (15 pts)
// ════════════════════════════════════════════
function slidingWindowMax(nums, k) {
  const deque = new Deque();
  const result = [];
  // YOUR CODE HERE
  return result;
}

module.exports = { isPalindrome, longestPalindrome, TaskScheduler, slidingWindowMax };