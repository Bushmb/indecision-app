var nameVar = 'Mike';
var nameVar = 'Andrew';
console.log({nameVar});

let nameLet = 'Jenny';
nameLet = 'Judy';
console.log({nameLet});

const nameConst = 'Frank';
console.log({nameConst});


// Block scoping

const fullName = 'Bob Bush';
let firstName;

if(fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);