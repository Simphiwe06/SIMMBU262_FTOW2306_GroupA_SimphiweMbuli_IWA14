function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function internal() {
  if (this.internal.a === 48 && this.internal.b === 12) {
    console.log(this.internal.a);
    console.log(this.internal.b);
  }
  return this;
}

// Not allowed to change below this

const example1 = {
  internal: {
    a: 48,
    b: 12,
    c: 8,
  },
  add,
  multiply,
  calculate: internal,
};

const example2 = {
  internal: {
    a: 12,
    b: 1,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

example1.calculate();
example2.calculate();
