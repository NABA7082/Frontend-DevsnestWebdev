//1
var student={name:"David Rayy",sclass:"VI",rollno:12};
console.log(Object.keys(student));
/*var get_keys=function(student)
{
  let keys=[];
  for(key in student)
  {
    keys.push(key);
  }
  return keys;
}
console.log(get_keys(student));*/
/*var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
console.log.(student);
delete student.rollno;
console.log.(student);*/
//2
var student =  { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12  };
console.log(student);
delete student.rollno;
console.log(student);
//3
var student = { name : "David Rayy", sclass : "VI", rollno : 12 }; 
var size=Object.keys(student).length;
console.log(size);
//4
var lib=
[ { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
 { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true }, 
 { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games',
  readingStatus: false }]; 
  for(let i=0;i<lib.length;i++)
  {
    var book=" "+lib[i].title+" "+'by'+" "+lib[i].author+"."
    if(lib[i].readingStatus===true)
    {
      console.log("Already read"+book);
    }
    else{
      console.log("You still need to read"+book);
    }
  }
  //5
  function Cylinder(cyl_heig, cyl_dia) {
    this.cyl_heig = cyl_heig;
    this.cyl_dia = cyl_dia;
  }
  
  Cylinder.prototype.Volume = function () {
    var r = this.cyl_dia/ 2;
    return this.cyl_heig * Math.PI * r * r;
  };
  
  var cyl = new Cylinder(5, 3);
  console.log('volume =', cyl.Volume().toFixed(4));
  
  
  
  
  
  
  // 6. Write a JavaScript program to sort an array of JavaScript objects.
  var library = [
      {
          title: 'The Road Ahead',
          author: 'Bill Gates',
          libraryID: 1254
      },
      {
          title: 'Walter Isaacson',
          author: 'Steve Jobs',
          libraryID: 4264
      },
      {
          title: 'Mockingjay: The Final Book of The Hunger Games',
          author: 'Suzanne Collins',
          libraryID: 3245
      }
  ];
  library.sort((a,b)=>{
      return b.libraryID - a.libraryID;
  });
  library.forEach((e)=>{
      console.log(`${e.title} ${e.libraryID} ${e.author}`);
  });
  




