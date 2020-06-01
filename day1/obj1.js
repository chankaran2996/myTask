var libaray=[
    {
        title:"javascript",
        prices:500,
        readers:[
            {
                name:"persion 1",
                count:300
            },
            {
                name:"persion 2",
                count:400
            }
        ],
        authorsDetiles:{
            name:"raj",
            age:40
        }
    },
    {
        title:"nodejs",
        prices:600,
        readers:[],
        authorsDetiles:{
            name:"raj",
            age:40
        }
    }
]

//2.1 Update the count of Person 2 inside readers Array in Javascript;
libaray[0].readers[1].count=600;

//2.2 Insert a new key called email and assign a value email1@gmail.com and
// email2@gmail.com respectively in both authorDetails object;
libaray[0].authorsDetiles.email="email1@gmail.com";
libaray[1].authorsDetiles.email="email1@gmai2.com";

//2.3 Insert a new reader in the readers array for Nodejs.
libaray[1].readers.name="persion 1";
libaray[1].readers.count=700;

//2.4 Create a New Object in the library for a new Book called SQL.

libaray[2]={
    title:"sql",
    prices:300,
    readers:[],
    authorsDetiles:{
        name:"raj",
        age:40
    }
}

//2.5 Find the datatype of author age in Nodejs Object

var x=libaray[1].authorsDetiles.age;
var result=typeof x;

// 2.6. Print the price of Javascript book in console.
console.log(libaray[0].prices);

//2.7. Print the age of Nodejs Author in console.
console.log(libaray[1].authorsDetiles.age);

//2.8. Print how many readers for javascript in console.
console.log(libaray[0].readers[0].count+libaray[0].readers[1].count);

//2.9. Print the count value of Person 2 in console.
console.log(libaray[0].readers[2].count);
