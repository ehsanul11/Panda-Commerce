// set color h2 tag
const headingTag = document.getElementsByTagName('h2')
for(const h2 of headingTag){
    const setColor = h2;
   setColor.style.color = 'lightblue';
  
}

// set background color "tomato" in backpack id

 const section = document.getElementById('Backpack');

 section.style.backgroundColor = 'tomato';

//  set border radius in all class name

const allCard = document.getElementsByClassName('card');
for(const card of allCard){
    const singleCard = card;
    singleCard.style.borderRadius = '30px';
}

// write the function and this function as a click handler to set in the button
function makeClick(){
    console.log('kook')
}

// 7.disabled button then anyone exactly write email on input field
// then btn active

document.getElementById('exampleInputEmail1').addEventListener('keyup', function(event){
    const newText = event.target.value;
    const btnSubmit = document.getElementById('submit-btn');
     if(newText === 'email'){
        btnSubmit.removeAttribute('disabled');
     }
     else{
        btnSubmit.setAttribute('disabled', true);
     }
})

// if i dubble click in the section background color change

const sectionContainer = document.getElementById('Subscribe');
sectionContainer.addEventListener('dblclick', function(){
    sectionContainer.style.backgroundColor = 'orange'
    
})