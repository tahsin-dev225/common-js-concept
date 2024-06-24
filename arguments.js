
const num1 = 2;
const num2 = 3;


function multiply(a, b,c){

    const args = arguments //[2]
    //const args= [...arguments]
    console.log(args)

    const result = a+b+c
    return result;
}

console.log(multiply(45,89,12,45,98,56))