let cal=() => { const x=parseFloat    (prompt("Enter x value : ")) ;
               const     y=parseFloat(prompt(" Enter y value :")) ;
               const sum=x+y ;
               const mult=x*y ;
               return { sum,mult } ; 
};
  
const result=cal();
 console.log("sum :", result.sum) ;
 console.log("mult :", result.mult) ;