
let userdata = []; // created array

// create object
function person(fname,prof,age){
   
   
    this.fname = fname;
    this.prof =prof;
    this.age =age;

   
};
let ps1 =new person("john","Developer",18);
let ps2=new person("jack","Developer",20)
let ps3=new person("Karen","Admin",19);

userdata=[ps1,ps2,ps3];
createlist(userdata);


let f1 =document.getElementById("btn2");


f1.addEventListener("click",(e) =>{
    let selectoption =document.getElementsByClassName("sle")[0].value;
    if(selectoption==="developer"){
   let mew = userdata.filter((arr) => {
   if(arr.prof=="Developer"){
     return arr;
    }
       }
      );
      console.log(mew);
     createlist(mew);
    }
    else if(selectoption==="admin") {
        let mew =   userdata.filter((arr) => {
            
            if(arr.prof=="Admin"){
                return arr;

            }
        
           }
         );
        createlist(mew);
    }
    else {
        createlist(userdata);
    }
});



// inital there peson adding to array


let newuser =document.getElementById("btn");
newuser.addEventListener('click',(e) => {
    let fname =document.getElementById("fname").value;
    let peof =document.getElementById("profe").value;
    let age =document.getElementById("age").value;
      
    if(fname=='' || peof == '' || age == ''){
        alert("please fill al field");
    }

   else{
    let pros =new person(fname,peof,age);
    userdata.push(pros);
    console.log(pros);
   
    let newlist =document.getElementById("addlist");

    let lis =document.createElement("li");
      
     lis.innerHTML ='<span> Name: ' +fname +'</span>' +'<span> Profession:' +peof+ '</span>'+'<span> Age :' +age +'</span>' ;
  
     lis.classList.add("span");
       newlist.append(lis);
   }
});

function createlist(mew){
    let newlist =document.getElementById("addlist");
   
    newlist.innerText=" ";

    console.log(mew);
    for(let i=0;i<mew.length;i++){

    let lis =document.createElement("li");
      
     lis.innerHTML ='<span> Name: ' +mew[i].fname +'</span>' +'<span> Profession:' +mew[i].prof+ '</span>'+'<span> Age :' +mew[i].age +'</span>' ;
  
     lis.classList.add("span");
       newlist.append(lis);

    }

}
console.log(userdata.length);