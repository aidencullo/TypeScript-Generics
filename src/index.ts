// @ts-check

// Using built-in generics to create typed Arrays.
const numArray = new Array<number>(1, 2, 3, 4, 5);

// Note that attempting to push a non-number value
// results in TypeScript showing an error.
numArray.push("String");

// Map also supports generics by default, allowing
// the creation of more complex data structures.
const ratingMap = new Map<String, number>();
ratingMap.set("Count of Monte Cristo", 10);
ratingMap.set("Shrek", 9.5);

// Attempting an incorrect addition will result
// in a TypeScript error, just like with arrays.
ratingMap.set("Bee Movie", "B");

// We can also create our own classes with generics.
// This is a very simple example.
class Entity<T> {
  val: T;
  constructor(val: T) {
    this.val = val;
  }
  get(): T {
    return this.val;
  }
  set(newVal: T) {
    this.val = newVal;
  }
}

// We can then create instances of the class
// with any type we desire, even complex types.
const someEntity = new Entity<{ name: String }>({ name: "Static" });

// Because the class exposes its typing to TypeScript,
// we can use these generics in conjunction with
// other expressions and functions.
function someAction(val: { name: String }) {
  console.log(val.name);
}

someAction(someEntity.get());

// If we attempt to pass an incorrectly structured
// entity into this type-restricted function,
// TypeScript will provide an error.
const numEntity = new Entity<number>(42);
someAction(numEntity.get());

// This feedback can be provided because our generics
// have left a "trail" of type information for the
// compiler to follow. Even though Entity.get() *can*
// hold anything, TypeScript knows what each instance
// *does* hold.
