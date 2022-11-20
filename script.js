//Your code goes here

// 1. Click the button to display your name
//Selectors
const input = document.querySelector('input');
const btn = document.getElementById('btnName');
//Function
function displayName(){
  input.value ='Sinyee'
}
//Call the event
btn.addEventListener('click', displayName)
//2. Switch lights on mouseover
//Selectors
const bulbImage = document.getElementById('imageOff')
//Function
function lightOn(){
  bulbImage.src ='images/lighton.png'
}
function lightOff(){
  bulbImage.src ='images/lightoff.png'
}
//Call the event
bulbImage.addEventListener('mouseenter', lightOn)
bulbImage.addEventListener('mouseout', lightOff)

//3. Double click to display content
//Selectors
const btnDisplay= document.getElementById('btndbName')
const imageContainer= document.getElementById('displayPara')
/*Function {
  //some code here
  //create a new img element
}*/
function insertImage(){
  const imgTag = document.createElement('img');
  imgTag.src = 'images/smileyface.png'
  imageContainer.appendChild(imgTag)
  btnDisplay.removeEventListener('dblclick', insertImage)
}

//Call the event
btnDisplay.addEventListener('dblclick', insertImage)
// 4. Traffic Lights
//Selectors
const stopBtn = document.getElementById('btnStop')
const redLight = document.getElementById('stopDiv')
const readyBtn = document.getElementById('btnReady')
const yellowLight = document.getElementById('readyDiv')
const goBtn = document.getElementById('btnGo')
const greenLight = document.getElementById('goDiv')
//Function 1
function redLightOn(){
  redLight.style.background = 'red'
}
function redightOff(){
  redLight.style.background = 'black'
}
 
//Function 2
function yellowLightOn(){
  yellowLight.style.background = 'yellow'
}
function yellowLightOff(){
  yellowLight.style.background = 'black'
}
//Function 3
function greenLightOn(){
  greenLight.style.background = 'lime'
}
function greenLightOff(){
  greenLight.style.background = 'black'
}
//Call the events
stopBtn.addEventListener('mousedown', redLightOn)
stopBtn.addEventListener('mouseup', redightOff)

readyBtn.addEventListener('mousedown', yellowLightOn)
readyBtn.addEventListener('mouseup', yellowLightOff)

goBtn.addEventListener('mousedown', greenLightOn)
goBtn.addEventListener('mouseup', greenLightOff)

//5. Change textbox border colours
//Selectors
const firstNameBox = document.getElementById('firstName')
const lastNameBox = document.getElementById('lastName')
const btn2 = document.getElementById('btn2Name')
//Function
function changeBorder(){
  firstNameBox.style.border ="thin solid #0000FF";
  lastNameBox.style.border ="thin solid #0000FF";
}
//Call the event
btn2.addEventListener('click', changeBorder)
//6. validate the box [length should be more than 5 characters]
//Selectors
const inputVali = document.getElementById('myName2');
const btnVali = document.getElementById('btnSub2');
const errorMsg = document.getElementById('errMsg');

/*Function {
  //if statement
}*/
function validateInput(){
if(inputVali.value = ''||inputVali.value.length < 8 ){
  errorMsg.innerHTML = 'Must not be blank or less than 8 characters.'
  inputVali.value = 'Error! Not submitted.'
}else{
  errorMsg.innerHTML = ''
  inputVali.value = 'Submitted'
}
}
//Call the event
btnVali.addEventListener('click', validateInput )
// 7.create a list of hobbies
//Selectors
const promptBtn = document.getElementById('btnHobbies')
const listOfHobbies = document.querySelector('ul')
/*Function {
  //for loop
}*/
function addHobbies(){
  let hobbies = prompt('Name one of your hobbies'); 
  if (typeof hobbies === 'string'){
    const hobby= document.createElement('li');
    hobby.innerHTML = `${hobbies}`
    listOfHobbies.appendChild(hobby)
  }
}
//Call the event
promptBtn.addEventListener('click', addHobbies )
// 8. Display a profile card from an object
//Object
const myDog = {
  name: 'Barkley',
  breed: 'Beaglier',
  color: 'Blenheim',
  hometown: 'Baradine',
  favoriteFood: 'Bones',
  occupation:'Best Boi',
  age: 4,
}
//Selectors
const cardBtn = document.getElementById('btnProfile')
const displayArea = document.getElementById('displayCard')
/*Function {
    //for loop
      //if statement
  }*/
function displayCard (){
  const cardContent = document.createElement('p')
  cardContent.innerHTML =
 `Name : ${myDog.name}<br>
  Breed : ${myDog.breed}<br>
  Color : ${myDog.color}<br>
  Hometown : ${myDog.hometown}<br>
  Favorite Food: ${myDog.favoriteFood}<br>
  Occupation: ${myDog.occupation}<br>
  Age : ${myDog.age} Human Years<br>`
  displayArea.appendChild(cardContent);
  cardBtn.removeEventListener('click', displayCard);
  }

  cardBtn.addEventListener('click', displayCard)

  