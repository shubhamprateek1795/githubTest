//document.getElementById("count-el").innertext= 9
//let count=0
//console.log(count)

/*let myage= 21
console.log(21)
*/

/*
let firstgroup =5
let secondgroup =9
let count = firstgroup + secondgroup
console.log(count);
*/


/*let count= 5+9
let count= 5*9
let count= 5/9
let count= 5-3

console.log(count);
*/

 /*let myage=26
 let humandogratio=7
   
 let mydogage= myage *humandogratio
 console.log(mydogage)
*/

 /*let count =5
 count = 7
 count = 10
 count = 20
 //console.log(count)

 
 count = count + 10
 count= count - 9 
 count= count-9

 console.log(count)
*/


 /*let bonuspoint= 50
 console.log(bonuspoint)

 bonuspoint= bonuspoint+ 50
 console.log(bonuspoint)

  bonuspoint= bonuspoint -75
  console.log(bonuspoint)

  bonuspoint= bonuspoint + 45
 console.log(bonuspoint)
  */


 /*function increment(){
      console.log("the button was clicked")
  }

  increment()
*/


  //setting up the race

/*function countdown(){

  console.log(5)
  console.log(4)
  console.log(3)
  console.log(2)
  console.log(1)
}
countdown()
countdown()
*/




/*function logNum() {
    console.log(90)
}

logNum()
*/


  /* let lap1 =30
   let lap2 =45
   let lap3 =32

   function laptime(){
       let totaltime =lap1 + lap2 + lap3
       console.log(totaltime)   
    }

    laptime()


    function laptime(){
        console.log(lap1 + lap2 + lap3)
    }
    laptime()
*/



     
 
     /*let lapscompleted = 0
     function incrementlap(){
         lapscompleted = lapscompleted + 1 
     }
      incrementlap()
      incrementlap()
      incrementlap()
      console.log(lapscompleted)
     */
  
let count = 0

let countEl = document.getElementById("count-el")
console.log(countEl)

 function increment(){
     //console.log("clicked")
      count= count +1  
     // count+=1
    // console.log(count)
     countEl.textContent = count
 }

 
 /*function save(){
     console.log(count)
}*/


 //let username ="shubham"
 //console.log(username)

// let message = " you have three new notifications "
 //console.log(message + username)
 //console.log(message + "  " + username)
// console.log(message + "," + username + "!")

/*let name= "shubham"
 let greeting=" hi, my name is "
 let mygreeting= greeting + name
 console.log(mygreeting)
*/


 /*let name1= 7
 let greeting1 = "hi, my name is"
 let greet = name1 + greeting1
 console.log(greet)
*/


 /*let points= "40"
 let bonusPoints= 7
 let totalpoints= points + bonusPoints
 console.log(totalpoints)
  */


 /*let points= 40
 let bonusPoints= 7
 let totalpoints= points + bonusPoints
 console.log(totalpoints)
  */


/* console.log(4+5)// 9
console.log("2" + "5")// 25
console.log("5" + "4")// 54
console.log(100 +"100")// 100100
*/



/*let welcomeEl = document.getElementById("welcome-el")
console.log(welcomeEl)
 let name2= "xyz"
 let greet2= "welcome "
  welcomeEl.innertext = greet2 + name2


 welcomeEl.innertext = welcomeEl.innerText + "how are you?"

// welcomeEl.innerText += " how are you?"
*/



 

/*let greet= "hello"
console.log(greet)
*/


//greet()
/*function greet(){
    console.log("hello")
}
greet()
*/


let saveEl = document.getElementById("save-el")
console.log(saveEl)

function save() {
    let countStr = count + " - "
    saveEl.innerText= saveEl.innerText + countStr
    //saveEl.textContent += countStr
    count=0
   countEl.textContent=0
  
}

