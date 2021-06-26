/*question-1*/
console.log(Array.isArray('w3resource'));
console.log(Array.isArray([1,2,4,0]));
/*question-3*/
a=[7,9,0,2];
console.log(a.slice(0,1));
b=[];
console.log(b.slice(0,3));
c=[7,9,0,2];
console.log(c.slice(0,3));
d=[7,9,0,2];
console.log(d.slice(0,6));
e=[7,9,0,2];
console.log(e.slice(0,-3));
/*question-4*/
myColor=["Red","Green","White","Black"];
console.log((myColor.join(',')));
console.log((myColor.join(',')));
console.log((myColor.join('+')));
/*question-5*/
const arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
let mf = 1;
let m = 0;
let item;
for (let i=0; i<arr1.length; i++)
{
        for (let j=i; j<arr1.length; j++)
        {
                if (arr1[i] == arr1[j])
                 m++;
                if (mf<m)
                {
                  mf=m; 
                  item = arr1[i];
                }
        }
        m=0;
}
console.log(` ${item} ( ${mf} times ) `) ;
/*question-2*/
q1=[1,2,4,0];
console.log(q1.map(x=>x));
q2=[1,2,[4,0]];
p=q2.slice(0,5);
console.log(p);

