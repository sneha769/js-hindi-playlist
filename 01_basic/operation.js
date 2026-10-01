let val = 3;
let negval = -val;
//console.log(negval);

//*(**- used for power) */
let str1 = "hello";
let str2 = "  sneha";
//console.log(str1 +str2);

let ans = ("2" + 2);
let an2 = ("2" - 1);
//console.table([ans,an2]);
//console.log("1" + 2 + 2);
//console.log(1 + 2 + "2");

//console.log(true);//true
//console.log(+true);//1

console.log(null > 0);//false
console.log(null == 0);//false 
console.log(null >= 0);//true
/*the reason is that an equality check == and comparator > < >= <= workdifferently .
 comparator converts null to a number , treating it as 0 . that's why (3) null>=0 is true*/

/* Feature	Primitive Data Types	Non-Primitive (Reference) Data Types
Value Storage	Stored by value directly in the stack memory.	Stored by reference (memory address) in the heap.
Mutability	Immutable; the value itself cannot be changed.	Mutable; properties and values can be modified.
Capacity	Holds only a single value.	Holds multiple values or complex structures.
Examples	String, Number, Boolean, Undefined, Null, Symbol, BigInt.	Object, Array, Function, Date.*/

