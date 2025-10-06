import { Node } from "./Node.js";

export class Hashmap {
  constructor(loadfactor = 0.75, capacity = 16) {
    this.loadfactor = loadfactor;
    this.capacity = capacity;
    this.bucket = new Array(this.capacity).fill(null);
    this.size = 0;
  }

  hash(key) {
    let hashcode = 0;

    const primenumber = 31;

    for (let i = 0; i < key.length; i++) {
      hashcode = primenumber * hashcode + key.charCodeAt(i);
    }

    return hashcode % this.capacity;
  }

  set(key, value) {
    const index = this.hash(key);
    const linkedlist = new Node(value);

    this.bucket.forEach((items, position) => {
      if (index === position) {
        if (items === null) {
          this.bucket[position] = [key, linkedlist];
        } else {
          const CorrectBucket = this.bucket[position];
          const Currentnode = CorrectBucket[1];
          Currentnode.nextnode = linkedlist;
        }
      }
    });

    this.size++;

    if (this.size > this.loadfactor * this.capacity) {
      this.resize();
    }
  }

  resize() {
    const oldBucket = this.bucket;
    this.capacity *= 2;
    this.bucket = new Array(this.capacity).fill(null);
    this.size = 0;

    oldBucket.forEach((item, index) => {
      if (item !== null) {
        const New_Hashkey = this.hash(oldBucket[index][0]);
        this.bucket[New_Hashkey] = oldBucket[index];
      }
    });
  }

  get(key) {
    const Hashkey = this.hash(key);
    if (Hashkey < 0 || Hashkey >= this.capacity) {
      console.log("Out of bound ");
    }
    if (this.bucket[Hashkey] === null) {
      return null;
    } else {
      return this.bucket[Hashkey][1];
    }
  }

  has(key) {
    const targetkey = this.hash(key);
    for (let i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i] !== null) {
        if (this.hash(this.bucket[i][0]) === targetkey) {
          return true;
        }
      }
    }
  }

  remove(key) {
    const targetkey = this.hash(key);
    for (let i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i] !== null) {
        if (this.hash(this.bucket[i][0]) === targetkey) {
          this.bucket[i] = null;
        }
      }
    }
  }

  length() {
    let Counter = 0;
    for (let i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i] !== null) {
        Counter++;
      }
    }
    return Counter;
  }

  clear() {
    this.bucket = [];
  }

  keys() {
    const Allkeys = [];
    for (let i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i] !== null) {
        Allkeys.push(this.bucket[i][0]);
      }
    }
    return Allkeys;
  }

  values() {
    const AllValues = [];
    for (let i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i] !== null) {
        const ValueNode = this.bucket[i][1];
        AllValues.push(ValueNode.value);
        if (ValueNode.nextnode !== null) {
          let Current = ValueNode.nextnode;
          AllValues.push(Current.value);
        }
      }
    }
    return AllValues;
  }
  entries() {
    const AllEntry = [];
    for (let i = 0; i < this.bucket.length; i++) {
      if (this.bucket[i] !== null) {
        AllEntry.push([this.bucket[i][0], this.bucket[i][1]]);
      }
    }
    return AllEntry;
  }
}
