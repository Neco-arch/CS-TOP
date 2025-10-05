import { Node } from "./Node.js";

class Hashmap {
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
          this.bucket[position] = [index, linkedlist];
        } else {
          const CorrectBucket = this.bucket[position];
          const Currentnode = CorrectBucket[1];
          Currentnode.nextnode = linkedlist;
        }
      }
    });

    this.size ++

    if (this.size > this.loadfactor * this.capacity) {
        this.capacity = this.capacity * 2
        const oldarray = this.bucket
        this.bucket = new Array(this.capacity).fill(null)

        oldarray.forEach((Values,indexs) => {
            this.bucket[indexs] = Values
        })
    }
  }
}

const newhashmap = new Hashmap();

newhashmap.set("apple", "red");
newhashmap.set("banana", "yellow");
newhashmap.set("carrot", "orange");
newhashmap.set("dog", "brown");
newhashmap.set("elephant", "gray");
newhashmap.set("frog", "green");
newhashmap.set("grape", "purple");
newhashmap.set("hat", "black");
newhashmap.set("ice cream", "white");
newhashmap.set("jacket", "blue");
newhashmap.set("kite", "pink");
newhashmap.set("lion", "golden");
newhashmap.set('moon', 'silver')

console.log(newhashmap.bucket);
