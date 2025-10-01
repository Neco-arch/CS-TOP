import { Node } from "./Node.js";

export class LinkedList {
  node_head = null;
  append(value) {
    if (value === null) {
      return;
    }
    const NewValue = new Node(value);
    if (this.node_head === null) {
      this.node_head = NewValue;
    } else {
      let Current = this.node_head;

      while (Current.nextnode) {
        Current = Current.nextnode;
      }
      Current.nextnode = NewValue;
    }
  }
  prepend(value) {
    if (value === null) return;
    const NewValue = new Node(value);
    if (this.node_head === null) {
      this.node_head = NewValue;
    } else {
      NewValue.nextnode = this.node_head;
      this.node_head = NewValue;
    }
  }

  size() {
    let NodeSize = 0;
    if (this.node_head === null) {
      console.log(NodeSize);
    } else {
      let Current = this.node_head;
      while (Current.nextnode) {
        Current = Current.nextnode;
        NodeSize++;
      }
      NodeSize++;
      return NodeSize;
    }
  }

  head() {
    if (this.node_head === null) {
      console.log(null);
    } else {
      const Current = this.node_head;
      return Current.value;
    }
  }

  tail() {
    if (this.node_head === null) {
      console.log(null);
    } else {
      let Current = this.node_head;
      while (Current.nextnode) {
        Current = Current.nextnode;
      }
      return Current.value;
    }
  }

  atindex(index) {
    if (this.node_head === null) {
      console.log("Node is empty");
      return;
    }
    if (index < 0) {
      console.log("Invalid index");
      return;
    }
    let Counter = 0;
    let Current = this.node_head;
    while (Counter < index) {
      if (Current.nextnode === null) {
        Current = Current.nextnode;
        break;
      }
      Current = Current.nextnode;
      Counter++;
    }
    if (Current === null) {
      console.log("This index doesn't exist");
      return;
    }

    return Current.value;
  }

  pop() {
    if (this.node_head === null) {
      console.log("Node is empty");
      return;
    }
    const Size = this.size();
    const index_wanted = Size - 2;
    let Counter = 0;
    let Current = this.node_head;

    while (Current.nextnode && Counter < index_wanted) {
      Current = Current.nextnode;
      Counter++;
    }

    Current.nextnode = null;
  }

  contains(value) {
    if (this.node_head === null) {
      console.log("Node is empty");
      return;
    }

    let Current = this.node_head;
    let FoundValue = false;
    while (Current.nextnode) {
      if (Current.value === value) {
        FoundValue = true;
        break;
      }
      Current = Current.nextnode;
    }
    if (FoundValue) {
      return true;
    } else {
      return false;
    }
  }

  find(value) {
    if (this.node_head === null) {
      console.log("Node is empty");
      return;
    }
    let Counter = 0;
    let FoundValue = false;
    let Current = this.node_head;
    while (Current.nextnode) {
      if (value === Current.value) {
        FoundValue = true;
        Counter++;
        return Counter;
      }
      Counter++;
    }
    if (FoundValue) {
      return Counter;
    } else {
      console.log("Value not found");
    }
  }

  toString() {
    let StrongString = "";
    if (this.node_head === null) {
      StrongString = "null";
      console.log(StrongString);
    }
    let Current = this.node_head;

    while (Current.nextnode) {
      StrongString = StrongString + ` (${Current.value}) ->`;
      Current = Current.nextnode;
    }
    StrongString = StrongString + ` (${Current.value}) -> null`;
    return StrongString;
  }
}

