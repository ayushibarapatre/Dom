//  1 .Write a function to select all elements with the class card inside a <div> with the ID container and log their text content.
// function abcd(){
//     let elem = document.querySelectorAll("#container .class")
//     elem.forEach( card =>{
//         console.log(card.textContent)
//     })
// }
// abcd()
// 	2.	Write code to select the last <li> element in a <ul> with the class menu.

// // 	3.	Traverse through all child elements of a <div> with the ID parent and log each child’s tag name.
//      let elem = document.querySelector(".parent")
//      console.log(elem.innerHTML)
    
// // 	4.	Select all <input> elements inside a <form> and change their placeholder text to "Enter value".
//      let inputs = document.querySelectorAll("form input")
//      inputs.forEach(inp =>{
//         inp.placeholder = "Enter value"
//      }) 
// // 	5.	Write a function to find and log the parent element of an element with the class child-item.
//      function abcd(){
//         let childElem = document.querySelector(".child-item")
//         let parentElem = childElem.parentElement
//         console.log(parentElem)

//      }
//      abcd()
// // 	6.	Select all <p> elements and append " - Updated" to their current text.
//       let para = document.querySelectorAll(".p")
//       para.forEach(paragraph =>{
//         paragraph.textContent = paragraph.textContent+" -updated"
//       })
// // 	7.	Write a function that replaces the content of an element with ID quote with a <blockquote> containing a new quote.
//      function replace(){
//         let change = document.querySelector(".quote")
//         let block = document.createElement("blockquote")
//         block.textContent = "hello blockquote"
//         change.appendChild(block)
//      }
//      replace()
// // 	8.	Update the text of all <h2> elements, adding their index (e.g., "Heading 1", "Heading 2", etc.).
//         let update = document.querySelectorAll("h2")
//         update.forEach( (h1,index) =>{
//            h1.textContent = "heading" + (index+1)
//         })
// // 	9.	Write a function to dynamically update the content of a <div> based on data received from an object.

//      function dynamicUpd (data){
//        document.querySelector(".head").textContent = data.name
//        document.querySelector(".para1").textContent = data.age
//        document.querySelector(".para2").textContent = data.gender
//     }
//     let obj = {
//       name : "Ayushi",
//       age : 20 ,
//       gender : "female"
//     }
//     dynamicUpd(obj)


// // 	10.	Create a function that wraps the text of all <span> elements with <strong> tags.
//      function wrap(){
//         let span = document.querySelectorAll("span")
//         span.forEach(sp =>{
//             let strong = document.createElement('strong')
//              strong.textContent = sp.textContent
//              sp.textContent =""
//              sp.appendChild(strong)
//              console.log(sp)
//         })
//      }
//      wrap()
// // 	11.	Write code to toggle the display property between none and block for a <div> with the class toggle-box.
//        let togg = document.querySelector(".toggle-box")
//        togg.classList.toggle("hidden")
// // 	12.	Select all <button> elements with the class primary and change their background color to a gradient.

//     let buttons = document.querySelectorAll(".primary")
//     buttons.forEach(button => {
//      button.style. background ="linear-gradient(to right, #ff9472, #f2709c)";

//     });

// // 	13.	Write a function that applies inline styles to an element dynamically based on user input (e.g., font size, color).
// // 	14.	Add a shadow to all <img> elements when the page loads.
// window.onload = function(){
//     let allImage = document.querySelectorAll(".img")
//     allImage.forEach(img =>{
//         img.classList.add("shadow")
//     })
//     }

// // 	15.	Select a <div> with the class highlighted and add CSS animations to it.
// // 	16.	Write a function that adds a click event listener to all <li> elements inside a <ul> and logs the text content of the clicked item.
// // 	17.	Add a mouseover event listener to a <button> that changes its text color when hovered and reverts when not.

// let btnhyy = document.querySelector(".mouseover");

// let mouseOverHandler = () => {
//     btnhyy.style.color = "red";  
// };

// let mouseOutHandler = () => {
//     btnhyy.style.color = "";  
// };

// btnhyy.addEventListener("mouseover", mouseOverHandler);
// btnhyy.addEventListener("mouseout", mouseOutHandler);


// // 	18.	Write a function to listen for a change event on a <select> dropdown and log the selected value.
// function dropdown(){
//     elem = document.querySelector(".dp")
   
//     elem.addEventListener('change', (event) => {
//         console.log("Selected value:", event.target.value);  
//     });

// }
// dropdown()

// // 	19.	Create an event listener that listens for double clicks (dblclick) on a <div> and changes its background color.
// let double = document.querySelector(".doubleClick")
// double.addEventListener("dblclick" , ()=>{
//   double.style.backgroundColor = "red"
// })
// // 	20.	Add a global keypress event listener that logs the pressed key and its keycode to the console.
// let global = document.querySelector("body").addEventListener('keypress' , (event)=>{
//     console.log('Key:', event.key);      
//     console.log('Keycode:', event.keyCode);  
// })

// // 	21.	Write code to add the class completed to every <li> element that contains the text "done".
//   let li = document.querySelectorAll("li")
//   li.forEach(list =>{
//      list.classList.add("completed")
//      console.log(list)

//   })
// // 	22.	Write a function to toggle a class active on an element every time it’s clicked.
// function toggleActive() {
//     let clicked = document.querySelector("div");  // Select the <div> element
//     clicked.classList.toggle("active")
//     console.log(clicked)
// }

// 	23.	Add a new data-id attribute to each <li> element in an ordered list, setting its value to the index of the element.
//    let ol = document.querySelectorAll("li")
//    ol.forEach( (list , index)=>{
//       list.setAttribute("data-id", index)
//       console.log(list)
//    })
// 	24.	Write code to remove the disabled attribute from all <input> fields with the class editable.
    // let inputs = document.querySelectorAll('input.editable');
    // inputs.forEach(input => {
    // input.removeAttribute('disabled');
    // console.log(input)
    //  });

// 	25.	Write a function that checks whether an element has a specific class and logs the result.
// function head(){
//     let klem = document.querySelector("h1")
//     if(klem.classList.contains("heading")){
//         console.log("The element has the 'heading' class.");
//     } else {
//         console.log("The element does not have the 'heading' class.");
//     }
// }

// head()

// 	26.	Create a <div> dynamically with the class modal, some inner content, and append it to the <body>.
// let div = document.createElement("div")
// div.classList.add("modal")
// div.innerHTML= "This is a dynamically created div with the class 'modal'."
// document.body.appendChild(div)


// 	27.	Write a function that generates a <ul> from an array of strings, appending each string as an <li>.
// function generates(){
//     let ul = document.createElement("ul")
//     let arr = ['1','2','3','4']
//     arr.forEach(item =>{
//         let li = document.createElement("li")
//         li.textContent = item
//         ul.appendChild(li)
        
//     })
//     document.body.appendChild(ul)
// }
// generates()
// 	28.	Dynamically create and append a table with 3 rows and 2 columns to a <div> with the ID table-container.




	// 29.	Write code to create a form with two <input> fields and a <button> and append it to the <body>.
    // let form = document.createElement("form")
    // let inputs = document.createElement("input")
    // inputs.type = "text"
    // inputs.placeholder = "enter something"
    // let input2 = document.createElement("input");
    // input2.type = "text";  // Set the input type
    // input2.placeholder = "Enter something else";
    // let button = document.createElement("button")
    // button.textContent = "Submit"
    // form.appendChild(inputs);
    // form.appendChild(input2);
    // form.appendChild(button);
    // document.body.appendChild(form)


// 	30.	Create a function that appends 10 numbered <button> elements to a <div> and adds a click event listener to each button.
// function appendBtn() {
//     let ele = document.querySelector("#append");

//     if (!ele) {
//         console.error("Element with class 'append' not found.");
//         return;
//     }

//     for (let i = 1; i < 11; i++) {
//         let btn = document.createElement("button");
//         btn.textContent = "btn" + i;

//         btn.addEventListener("click", function () {
//             alert("You clicked " + btn.textContent);
//         });

//         ele.appendChild(btn);
//     }
// }

// appendBtn();

// 	31.	Write code to add the class red-border to all <img> elements except those with the class no-border.
//    let img = document.querySelectorAll("img:not(.no-border)")
//    img.forEach(image =>{
//      image.classList.add("redborder")
//      console.log(image)
//    })
// 	32.	Select all <p> elements inside a <div> and prepend "Note: " to their text content.
    //  let tp = document.querySelectorAll("div p")
    //  tp.forEach( p =>{
    //    p.textContent= "note:" + p.textContent
       
    //  })
        
     
// 	33.	Write a function that removes all child elements from a <div> with the class clear
// function clear() {
//     let elem = document.querySelector("div");
//     while (elem.firstChild) {
//         elem.removeChild(elem.firstChild);
//     }
// }
// clear()
// -me.
// 	34.	Add a click event listener to all <a> elements with the class external that prevents their default behavior.
//   let a = document.querySelectorAll("a")
//   a.forEach( anker =>{
//     anker.addEventListener("click" ,(event) =>{
//         event.preventDefault(); 
//         console.log("Link click prevented")
//     })
//   })
// 	35.	Write code to duplicate all <li> elements in an unordered list and append the duplicates to the same list.

// document.addEventListener("DOMContentLoaded", function () {
    // let listItems = document.querySelectorAll("ul li");

    // listItems.forEach(item => {
    //     let clonedItem = item.cloneNode(true);

    //     item.parentNode.appendChild(clonedItem);
    // });

// 	36.	Write a function to validate an email input field and display an error message if the email is invalid.
// function validate(){
    
// }
// 	37.	Add a submit event listener to a form that logs the form data as an object when submitted.
// 	38.	Write code to clear all form fields when a reset button is clicked.
// 	39.	Create a function that dynamically adds a new <input> field when a button is clicked.
// 	40.	Write a function to disable a form’s submit button until all required fields are filled.


// 	41.	Build a function to create a dynamic pagination system with numbered buttons.
// 	42.	Write code to implement a “like” button that toggles between liked and unliked states on click.
// 	43.	Create a to-do list app where items can be added, marked as completed, and removed.
// 	44.	Write a function to filter a list of items based on a search input field.
// 	45.	Build a function that dynamically changes the theme of the webpage (e.g., dark mode and light mode).
// 	46.	Write a function to fetch data from an API and display it as a list inside a <div>.
// 	47.	Build a collapsible accordion where clicking on a section header toggles the visibility of its content.
// 	48.	Write a function that highlights the active section in the navigation bar as the user scrolls.
// 	49.	Implement an image carousel with next/previous buttons to navigate through the images.
// 	50.	Create a real-time character counter that updates as the user types in a <textarea>.

























