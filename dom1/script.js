// selecting in JS
// text change
// html manipulation
// css manipulation
//  event listners
// add/remove classes
// add/remove ids
// 

// Selecting the Element
// 1.	Write a function to select a <div> with the ID container and log it to the console.
//  function abcd (){
//   const element = document.getElementById("hello")
//           console.log(hello)
//  }

// 2.	Select all <li> elements inside a <ul> with the class menu and log them as an array.
// const elements = document.querySelectorAll("ul li")  
// let liArray = Array.from(elements)
// console.log(liArray)


//3.	Write code to select the first <h1> element on a webpage and change its color to blue.
// var a = document.querySelector("h1")
// a.style.color = "red"
// console.log(a)

// 4.	Select the element with the class card and add a border to it using JavaScript.
// var card1 = document.querySelector(".card")
// card1.style.border= "3px solid black"

// 5.	Write a function to log all elements with the tag name button to the console.
// function abcd (){
//     var btn = document.querySelectorAll("button")
//     for (let i = 0; i < btn.length; i++) {
//     console.log(btn[i]);
// }

// console.log(btn)
// }
// abcd()

// Changing the Text in JS
// 	6.	Select a <p> element with the class description and change its text to "Updated description".
//    let updatePara = document.querySelector(".para")
//    updatePara.textContent = "updated description" 
//    console.log(updatePara)
// 	7.	Write a function that takes an ID of an element and changes its text to "Hello, World!".
//  function changeText (id){
//     let element = document.getElementById(id)
//     element.textContent = "hello world"
//  }
//  changeText("myText")
// or
// function changeText (){
//     let element = document.querySelector("#myText")
//     element.textContent ="hello world"
// }
// changeText()
// 	8.	Select a button with the ID submit and set its text to "Submit Form".
//    let submit = document.querySelector("#btn")
//    submit.textContent = "submit"
// 	9.	Replace the text inside a <span> element with the class price to "₹499".
//   let price = document.querySelector(".span")
//     price.textContent = "499"
  
// 	10.	Write a function to change the text of all <h2> elements on the page to "Welcome to My Page".
// function change (){
//     let element = document.querySelectorAll("h1")
//     for(let i =0; i<element.length ; i++)
//     element[i].textContent = "Welcome to my page"
// }
// change()
// Changing the HTML in JS
// 	11.	Select a <div> with the ID content and replace its inner HTML with a new <h2> and <p> element.
    //  let contentDiv = document.querySelector("#content")
    //   contentDiv.innerHTML = "<h2>New Heading</h2><p>This is new paragraph</p>"
    //  console.log(contentDiv)
// 	12.	Write a function that takes an element ID and replaces its content with a <button>Click Me!</button>.
//    function button (){
//       let element = document.querySelector("#btn")
//       element.textContent = "click me!"
//       console.log(element)
//    }
//    button()
// 	13.	Select an element with the class info and append a <strong> tag with the text "Important" inside it.
//    let element = document.querySelector(".info")
//    let strongTag = document.createElement("strong")
//    strongTag.textContent = "Important"
//    element.appendChild(strongTag)
   
// 	14.	Replace the content of a <div> with ID main with an unordered list containing three <li> items.
    //   let element = document.querySelector("#main")
    //   let ul = document.createElement("ul")

    //   for(let i = 0; i<=3 ; i++){
    //     let li = document.createElement("li")
    //     li.textContent = "Item " + i;
    //     ul.appendChild(li)
    //   }
    //   element.appendChild(ul)
// 	15.	Create a function that takes an ID and adds an <img> tag with a placeholder image URL inside the element.
//  function addImage(){
//     let element = document.querySelector("#imageContainer")   
//     let img = document.createElement("img")
//     img.src = "https://th.bing.com/th/id/OIP.LEzLd46tKb4-GoT6k-BV0AHaDt?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
//     img.alt = "placeholder Image"
//     element.appendChild(img)
//     console.log("image add successfully")
//  }
// addImage()

// or

// var image = document.querySelector("#imageContainer")
// function abcd(){
//     let im =document.createElement("img")
//     im.setAttribute("src" , "https://th.bing.com/th/id/OIP.LEzLd46tKb4-GoT6k-BV0AHaDt?w=277&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7")
//     image.appendChild(im)
// }
// abcd()
// Changing the CSS via JS
// 	16.	Select a <div> with the class box and change its background color to red.
// let element = document.querySelector(".box")
// element.style.backgroundColor = "red" 
// 	17.	Write a function that takes an element ID and sets its font size to 20px.
// let paraa= document.querySelector("#para")
// paraa.style.fontSize = "20px"
// 	18.	Select all <h1> elements and change their text color to green.
// let hara = document.querySelectorAll("h1")
// for(let i = 0 ; i<hara.length ;i++)
// hara[i].style.color = "green"
// 	19.	Change the display property of an element with the class hidden to block.
// let hiddenElement = document.querySelector(".hidden")
// hiddenElement.style.display ="block"
// 	20.	Write a function that toggles the visibility of an element (hide/show) when called.
// function abcd(){
//     let toggle = document.querySelector(".button")
//     let currentDisplay = window.getComputedStyle(toggle).display;

//     if(currentDisplay === "none")
//         toggle.style.display = "block"
//     else
//        toggle.style.display = "none"
// }
// abcd()
// Adding/Removing Event Listeners
// 	21.	Add a click event listener to a button with the ID login that logs "Button clicked!" to the console.
// document.querySelector(".login").addEventListener("click", function() {
//     console.log("clicked");
// });

// 	22.	Write a function to remove a mouseover event listener from an element with the class hoverable.

// 	23.	Add a submit event listener to a form with the ID signup that prevents the default form submission.
// document.querySelector("#signup").addEventListener('submit' ,function(e){
//    e.preventDefault();
//    console.log("prevent default form submission")
// })
// 	24.	Attach a keydown event listener to the document and log the key pressed to the console.
// document.addEventListener('keydown',function(e){
//     console.log(`key pressed : ${event.key}`)
// })
// 	25.	Write a function that adds a click event listener to all buttons on the page and changes their background to yellow when clicked.
// function addClickListenerToButtons() {
//     const buttons = document.querySelectorAll('button');
    
//     buttons.forEach(button => {
//         button.addEventListener('click', function() {
//             button.style.backgroundColor = 'yellow';
//         });
//     });
// }
// addClickListenerToButtons();

// Adding/Removing Classes to HTML Elements
// 	26.	Add a class highlight to all <p> elements with the class paragraph.
// ************************************************************************
 





// -------------------------------------------------------------------------------------------------------------
// 	27.	Write a function to toggle the class active on an element when clicked.
// document.querySelector(".toggle").addEventListener('click' , function(){
//     console.log('Button clicked!'); // This should appear in the console

//    this.classList.toggle('active')
// })



// ----------------------------------------------------------------------------------------------------
// 	28.	Remove the class hidden from a <div> with the ID popup.
//  let ele =document.querySelector("#popup")
//    ele.classList.remove('hidden')
//     ele.removeAttribute('class')
//     console.log(ele)



// ----------------------------------------------------------------------------------------------
// 	29.	Add a class selected to all <li> elements inside a <ul> with the class list.

// let elem = document.querySelectorAll("li")
//    elem.forEach(function(elem) {
//     elem.classList.add('selected')
//     console.log(elem)

// })


// .------------------------------------------------------------------------------------------------------------
// 	30.	Write a function that removes the class disabled from a button with the ID submit.
// function abcd() {
//     let elem = document.querySelector("#disabled");  
//     elem.classList.remove('submit');
//         elem.removeAttribute('class')

//     elem.disabled = false;
//     console.log(elem); 
//   }
  
//   abcd();  
// --------------------------------------------------------------------------------------------------------------



  
// Adding/Removing IDs to HTML Elements
// 	31.	Write code to add the ID featured to a <div> with the class hero.
// let elem = document.querySelector("#classlist")
// elem.classList.add('hero')
//     console.log(elem)
// ---------------------------------------------------------------------------------------------------------------------




// 	32.	Remove the ID old-id from an element and add a new ID new-id to it.
// let elem = document.querySelector("#classlist")

// elem.removeAttribute('id')
// console.log(elem)
// elem.setAttribute('id', 'new-id');  
// console.log(elem)
// ------------------------------------------------------------------------------------------------------------------------------




// 	33.	Write a function that sets a unique ID to each <li> in an ordered list.
// function abcd(){
//     let elem = document.querySelectorAll("li")
//     elem.forEach((element, index) => {
//         element.id = `unique-id-${index + 1}`;  
//         console.log(element)
//       });

    
// }
// abcd()
// ----------------------------------------------------------------------------------------------------------------------------------



// 	34.	Add an ID header-main to the first <h1> element on the page.
// let elem =  document.querySelector('h1')

//     elem.id = ('header-main')
//     console.log(elem)



// --------------------------------------------------------------------------------------------------------------


// let elem = document.querySelector(".removable")
// elem.removeAttribute('id')
// console.log(elem)




// ------------------------------------------------------------------------------------------------



// Adding/Removing Attributes to HTML Elements
// 	36.	Add a src attribute with the value "image.jpg" to an <img> element with the ID thumbnail.
// let elem = document.querySelector('img');
// elem.id = ('thumbnail');  
// elem.src = ('image.jpg');
// console.log(elem);

// --------------------------------------------------------------------------------------------------



// 	37.	Remove the disabled attribute from a button with the class enable-button.

// let element = document.querySelector(".enable-button")
// element.removeAttribute('disabled')
// console.log(element)


// --------------------------------------------------------------------------------------------------------


// 	38.	Write a function to set a data-user-id attribute with the value "12345" to a <div> with the class profile.
// function abcd(){
//     let elem  = document.querySelector("div")
//     elem.classList.add('profile')
//     elem.setAttribute('data-user-id' , '12345')
//     console.log(elem)
// }

// abcd()

// -----------------------------------------------------------------------------------------------


// 	39.	Select a <a> tag and add a target="_blank" attribute to open the link in a new tab.
// let link = document.querySelector('a');  
// link.setAttribute('target', '_blank')
// console.log(link)



// -------------------------------------------------------------------------------------------------------



// 	40.	Remove the required attribute from all <input> elements inside a form with the ID registration.
// let form = document.querySelector('#registration');  // Select the form with ID 'registration'
// let inputs = form.querySelectorAll('input');  // Select all <input> elements inside the form

// inputs.forEach(input => {
//     input.removeAttribute('required'); 
//     console.log(inputs)
// });


// ----------------------------------------------------------------------------------------------------------


// Combining Multiple Topics
// 	41.	Write a function to add an event listener to all buttons, and when clicked, toggle the class active on them.
// function abcd() {
//     let buttons = document.querySelectorAll("button");

//     buttons.forEach(button => {
//         button.addEventListener('click', function () {
//             button.classList.toggle('active');
//         });
//     });
// }

// abcd(); 


// --------------------------------------------------------------------------------------------------


// 	42.	Create a function to select a <div> by ID, add a class selected, change its text to "Hello", and set its background color to yellow.
 
// function abcd(){
//     let elem = document.getElementById("id")
//     elem.classList.add('selected')
//     elem.textContent = 'Hello'
//     elem.style.background = "yellow";
//     console.log(elem)
// }

// abcd()


// --------------------------------------------------------------------------------------------------


// 	43.	Add a click event listener to all <li> elements inside a <ul> that logs the text content of the clicked item.
// let elem = document.querySelectorAll("li")
// elem.forEach(item=> {
//     item.addEventListener("click", function () {
//         console.log(item.textContent);
//     });

// });


// ----------------------------------------------------------------------------------------------------------------


// 	44.	Write a function to add a new <p> element inside a <div> with the ID content and set its text to "New Paragraph".

// function abcd(){
//     let elem = document.querySelector("#content")
//     let para = document.createElement("p")
//     para.textContent= "New paragraph"
//     elem.appendChild(para)
//     console.log(elem)
// }
// abcd()


// ----------------------------------------------------------------------------------------------------------------------


// 	45.	Add a mouseover event listener to an <img> that changes its src attribute to "hover.jpg".

        // const img = document.querySelector("#hoverImage");

         
        //     img.addEventListener("mouseover", function () {
        //         console.log("Mouseover triggered!");
        //         img.src = "https://th.bing.com/th/id/OIP.9wMTFqBFu8V2BRGaUSEhJQHaE8?w=218&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" + "?t=" + new Date().getTime();
        //     });

        //     img.addEventListener("mouseout", function () {
        //         console.log("Mouseout triggered!");
        //         img.src = "https://th.bing.com/th/id/OIP.GPFEY6kfgxbsja6gmrW6rwHaE7?w=255&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7";
        //     });
    


// ----------------------------------------------------------------------------------------------------
// Real-Life Scenarios
// 	46.	Write a function that creates a to-do list by appending <li> elements dynamically inside a <ul> with the ID todo-list.

// function addTask() {
//     const task = document.getElementById('todo-input').value;

//     if (task.trim() === "") {
//         alert("Please enter a task");
//         return;
//     }

//     const newTask = document.createElement('li');
    
//     newTask.textContent = task;

//     document.getElementById('todo-list').appendChild(newTask);

//     document.getElementById('todo-input').value = '';
// }






// 	47.	Create a function that validates an email input field by adding/removing a class error based on the input value.
// 	48.	Write code to create a modal popup by adding a new <div> with some content and a close button when a button is clicked.
// 	49.	Build a function that changes the theme of a webpage (light/dark mode) by toggling classes on the <body> element.
// 	50.	Create a dropdown menu where clicking an item highlights it and logs its text to the console.