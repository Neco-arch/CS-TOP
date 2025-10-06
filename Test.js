class HashMap {
  constructor() {
    this.arrSize = 50;
    this.arr = new Array(this.arrSize).fill(null);
    this.loadFactor = 0.75;
    this.occupied = this.load();
  }

  //checks the size of the array, and make it bigger when the load factor is over 0.75
  load() {
    const length = this.length();

    if (length / this.arr.length >= this.loadFactor) {
      this.arrSize = this.arrSize * 2;
      const oldArr = [...this.arr];
      this.arr = oldArr.concat(new Array(this.arrSize).fill(null));
    }
    
    return length;
  }

  //check if user want to search an index smaller than 0 or bigger than the array size
  check(value) {
    if (value < 0 || value >= this.arr.length) {
      throw new Error(`Trying to access index ${value}, which is out of bound`);
    }
  }

  //creates the hash code
  hash(string) {
    let hashCode = 0;

    const primeNumber = 31;
    for (let i = 0; i < string.length; i++) {
      hashCode = primeNumber * hashCode + string.charCodeAt(i);
    }

    hashCode = hashCode % this.arr.length;
    return hashCode;
  }

  //adds a new hash into the hash map
  set(key, value) {
    const hashCode = this.hash(key);

    this.arr[hashCode] = value;
    console.log(
      `Hashcode: ${hashCode}; \n arr[hashcode]: ${this.arr[hashCode]}`
    );
    this.load();
  }

  //returns the value of a specific key
  get(key) {
    this.check(key);

    if (!this.arr[key]) return null;

    return this.arr[key];
  }

  //check if the key exists in the hash map
  has(key) {
    if (!this.arr[key]) return false;

    return true;
  }

  //remove specific key
  remove(key) {
    if (!this.arr[key]) return false;

    this.arr.splice(key, 1);
    this.load();
    return true;
  }

  //returns how many items are in the hash map
  length() {
    let counter = 0;
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] !== null) {
        counter += 1;
      }
    }
    return counter;
  }

  //clears the entire array
  clear() {
    this.arr.fill(null);
  }

  //returns an array with all the values inside the hash map
  values() {
    let array = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] !== null) {
        array.push(this.arr[i]);
      }
    }
    return array;
  }

  //returns key - value pair of the hash map
  entries() {
    let array = [];
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] !== null) {
        array.push([i, this.arr[i]]);
      }
    }
    return array;
  }
}

const test = new HashMap();

 test.set('apple', 'red')
 test.set('banana', 'yellow')
 test.set('carrot', 'orange')
 test.set('dog', 'brown')
 test.set('elephant', 'gray')
 test.set('frog', 'green')
 test.set('grape', 'purple')
 test.set('hat', 'black')
 test.set('ice cream', 'white')
 test.set('jacket', 'blue')
 test.set('kite', 'pink')
 test.set('lion', 'golden')

console.log(test.arr)
