 const cal=()=> { 
  const a=prompt("Enter a value :");
  const b=prompt("Enter b value :");
  const sum=Number(a)+Number(b);
  const subract=Number(b)-Number(a);
  const multiply=Number(b)*Number(a);
  return {sum,subract,multiply};
}
const tama=cal();
console.log(tama.sum);
console.log(tama.subract);