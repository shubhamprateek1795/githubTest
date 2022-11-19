//let firstCard=getRanadomCard()
//let secondCard=getRanadomCard()
let playername="xyz"
let playerchips= 120

let sum= 0
let cards=[]
let hasblackjack= false
let isalive= false
let message =" "
console.log(sum)
console.log(cards)

let messageEl=document.getElementById("message-el")
//console.log(messageEl)


let sumEl=document.getElementById("sum-el")
//console.log(sumEl)
let cardsEl= document.getElementById("cards-el")
//console.log(cardsEl)
   
function startgame(){
  isalive=true
  let firstCard= getRanadomCard()
  let secondCard=getRanadomCard()
  cards=[firstCard,secondCard]
  sum= firstCard + secondCard
    rendergame()
}


   function rendergame(){
    sumEl.textContent="sum:" + sum
    //cardsEl.textContent= "cards: " + firstCard + " " + secondCard
   // cardsEl.textContent= "cards: " + cards[0] + " " + cards[1]
  
   // messageEl.textContent= message
   messageEl.innerHTML= message

    cardsEl.textContent="cards: "//--> this will erase the previous card array number

    for(let i=0;i<cards.length;i++){
    cardsEl.textContent += cards[i] + " "
    }


    if(sum<21){
        //console.log("do you want a a new card?")
    message= "do you want to draw a new card"
}
else if(sum===21){
    //console.log("you have got blackjack!")
    hasblackjack= true
    message= "you have got blackjack"
    
}
else{
   //console.log("you are out of the game!")
    isalive= false
    message="you are out of the game"
}
console.log(hasblackjack)
console.log(isalive)
console.log(message)

//console.log(message)




}

let age=21

if(age <= 20){
    console.log("you cannot enter the pub")
}
else{
    console.log("welcome")
}


let cardforage=100


 if(cardforage<100){
    console.log("not eligible")
 }
 else if(cardforage==100){
    console.log("you have a birthday card from the king !")
 }
 else{
    console.log("not eligible, you have already got your card ")
 }

function newCard(){
    //console.log("drawing a new card")

  
    if(isalive===true && hasblackjack===false){
      
    
   let card=getRanadomCard()
   sum += card
   cards.push(card)
  // console.log(cards)
  rendergame()
    }  
    
}






let arr=[]
let featuredposts= ["check out my netflix clone", 
                    "here the code for my project",
                    "i have just relaunched my portfolio" 
]
// console.log(featuredposts[0])
// console.log(featuredposts[1])
// console.log(featuredposts[2])

console.log(featuredposts.length)

let arr1=[]
let myyoutubeposts=["how to fix battlefield4 error",
                     "how to fix batman arkham origins fullscreen error",
                      "how to -play any games through nvidia graphics error",
                      "how to fix uplay acoount in assasins creed relevation",
                      "need for speed hot pursuit on nvidia geforce gt 720m",
                      "farcry 3 on nvidia geforce gt 720m"

                   ]
                   console.log(myyoutubeposts[0])
                   console.log(myyoutubeposts[1])
                   console.log(myyoutubeposts[2])
                   console.log(myyoutubeposts[3])
                   console.log(myyoutubeposts[4])
                   console.log(myyoutubeposts[5])

                   

let arr2 =["shubham",true,21]
 console.log(arr2[2])

 let cardsNew =[7,4]
 //console.log(cardsNew)
console.log (cardsNew.push("true"))
  console.log(cardsNew)
 cardsNew.pop()
 console.log(cardsNew)






  let messages=[
    "hey, how is going?",
    "im great, thankyou!  how about you?",
    "all good,been working on my portfolio lately"

  ]
  let newMessage= "same here!"
  console.log(messages.push(newMessage))
 // messages.push(newMessage)
 console.log(messages)
 messages.pop()
 console.log(messages)
 //print 1-10
//  for(let count=1;count<11;count++){
//     console.log(count)
//  }

 //print 1-20
 for(let count=1;count<21;count++){
    console.log(count)
 }



  for (let count=10;count<=20;count++){
     console.log(count)
   }
   
   
  
  for (let count=2;count<=20;count+=2){
    console.log(count)
  }
  
  

  for(i=10;i<=100;i+=10){
    console.log(i)
  }
   let messages1=[
    "hey jessie how its going man?",
     "fine i guess",
     "do you have some dope",
     "no man i out",
     "what im hearing, thats not you jessie talking"
   ]
   //console.log(messages1[0])
    for (let i=0;i<messages1.length; i++){
        console.log(messages1[i])
   }


  //  for(let i=0;i<5;i++){
  //   console.log(messages1[i])
  //  }


/*let cards2=[7,3,9]
for(i=0;i<cards2.length; i++){
    console.log(cards2[i])
}

/*console.log(4=="3")//true
console.log(4===3)//false
console.log(5 > 2)//true
console.log(12 > 12)//false
console.log(3 < 0)//false
console.log(3 >= 3)//true
console.log(11 <= 11)//true
console.log(3 <=2)//false
*/
let greetingEl=document.getElementById("greeting-el")
//console.log(greetingEl)
  let sentence=["hello ", " my ", "name ", "is ","shubham "]

  for(let i=0;i<sentence.length;i++){
  // greetingEl.textContent = greetingEl.textContent + sentence[i]
    greetingEl.textContent += sentence[i]
    
   
  }
   let player1time=102
   let player2time=107
    
   function getfastestracetime(){
    if(player1time < player2time){
    //console.log(player1time)
    return player1time
   }
     else if(player2time < player1time ){
          //console.log(player2time)
          return(player2time)
   }
  else{
    //console.log(player1time)
    return(player1time)
  }
  
 }
  let fastestrace= getfastestracetime()
  //getfastestracetime()
  console.log(fastestrace)


   let n1=7
   let n2= 8
    function sumNum(){
      return n1 + n2
    }
     console.log(sumNum())
    




 let num4= Math.random()*6 // print 0-5.9999
 let num5= Math.floor(Math.random()*6)+4 // print 0-9 
 console.log(num4)
 console.log(num5)
 
 function rolldice(){
  let randomNumber=Math.floor(Math.random()*6)+1
  return randomNumber
 }
 console.log(rolldice())

 function getRanadomCard(){
  let randomNumber=Math.floor(Math.random()*13)+1
  if(randomNumber>10){
  return 10
  }
  else if(randomNumber===1){
     return11
  }
  else{
    return randomNumber
  }
}
let number=10
if(number<15 && number===10){ //-->in &&(AND) function both of the condition is to be true
  console.log("hello world")
}
 if(number<11 || number===9){
  console.log("hello prototype")//--> in ||(or) function either one of the condtion is to be true
 }
  if(number!=11){
    console.log("hello number")//--> in !=(not equal to) function condtion is not be false 
  }
  


   let player={
        name : "xyz",
        chips: 120
   }


   let playerEl= document.getElementById("player-el")
   console.log(playerEl)
   playerEl.textContent= player.name + "$" + player.chips



   let largecountries = ["china", "india", "usa","Indonesia","pakistan"]
    for (let i=0;i<largecountries.length;i++){
      console.log(" -" + largecountries[i])
    }
    
    let age2=15

    if(age<6){
      console.log("free")
    }
    else if(age<18){
      console.log("child discount")
    }
    else if(age<27){
      console,log("student discount")
    }
    else if(age<67){
      console.log("full price")
    }
    else{
      console.log("senior citizen")
    }