const numbers=[1,2,3,4];
const newnumbers1=[1,2,3,4,...numbers,5,5];
const newnumbers2=[-1,0,...numbers,1,2,3,4];
const newnumbers3=[1,2,...numbers,3];
console.log(newnumbers1);
console.log(newnumbers2);
console.log(newnumbers3);

const person={a:1,b:2};
const newperson={a:1,b:2,...person,c:3};
console.log(newperson);