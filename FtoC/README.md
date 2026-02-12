# Fahrenheit to Celsius Converter Documentation 

1. I first created the FtoC.js file through textmate. 
2. I then used the let command to make f = 99. This represents farenhiet being 99 degreese.
```
let f = 99;
```
3. I used the let command again to make c = f - 32) * 5/9. This is so when the code is ran if c is used it will calculate 
the conversion for farenheit being 99.
```
let c = (f - 32) * 5/9
```
4. I then used this line of code
```
console.log(`${f} Fahrenheit = ${c} Celsius`);
```
This was the hardest part for me to figure out. I knew to use console log to print the text but i had a hard time getting
the variables and words to work. The first idea that came to mind was
```
console.log(f "Fahrenheit = " c "Celsius")
```
This made sense to me because you put the text in quotes and the variables outside of quotes. Then I went through the 
code along and remembered that you can use ` ` and the dollar sign to make variables work. I dont remember what means
what for it but I know that it works.

5. I had extra time in class so I figured out how to make a prompt so you can enter in whatever temperature you want.
To do this all I did was add the "prompt" instead of 99 where let f was. 
```
let f = prompt("Fahrenheit to Celsius Converter\n\nPlease list temp in Farenheit:")
```
These are the final 2 versions of the code.

```
let f = 99
let c = (f - 32) * 5/9

console.log(`${f} Fahrenheit = ${c} Celsius`);

//promt version

let f = prompt("Fahrenheit to Celsius Converter\n\nPlease list temp in Farenheit:")
let c = (f - 32) * 5/9
console.log(`${f} Fahrenheit = ${c} Celsius`);
```
