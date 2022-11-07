
// what i have done here is to store all the RegEx pattern in one object, Rather then creating one variabke for each one.
// Each property in that object will have a regualr expresion for each form field.
const inputs = document.querySelectorAll('input');
const patterns = {
    telephone: / ^\d{10}$ / // the "/d" matches any diget from 0-9. "^" marks the start, "$" marks the end, "{10}" it has to be 10 digits
    
};

inputs.forEach((input)=>{
input.addEventListener('keyup',(e)=> {

    })
});

// video number 13