# FizzBuzz Documentation  

1. First I coppied this code to p5.js from the code along because it says it has to do with the homework. 
```
// finding numbers divisible by 7 and 5 between 1500 and 2700 (homework is based on this...)
for (let i = 1500; i <= 2700; i++) {
  if (i % 7 === 0 && i % 5 === 0) {
    console.log(i);
  }
}
```

2. I then changed i = to 0 and i <= 100 to make the console.log print the correct range. I also added nessisary i % code to print the fizz buzz like the assignment says. This included using the console.log("Fizz") type of code. 
```
for (let i = 0; i <= 100; i++) {
  if (i % 3 === 0) {
    console.log("Fizz");
  } else if  
  (i % 5 === 0) {
    console.log("Buzz");
  } else if 
    (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
    } else {
      console.log(i)
    }
}
```

3. I hit play and there was 2 problems. It started at 0 and FizzBuzz was never being printed. There was Fizz where there should be FizzBuzz. I fixed this by changing the the let statment at the start from 0 to 1. To fix the fizz buzz problem I changed the order of the else if statments so that the "FizzBuzz" code was first and it would get priority over everything else.

```
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if  
  (i % 5 === 0) {
    console.log("Buzz");
  } else if 
    (i % 3 === 0) {
    console.log("Fizz");
    } else {
      console.log(i)
    }
}
```