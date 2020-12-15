//add the code inside this event to run everything after the DOM is already loaded, 
//use this event if you want to link the script file on the top of the html code
document.addEventListener('DOMContentLoaded', () =>{ 
																										


// console.log(Array.isArray(titles)); // to check if its an array
// console.log(Array.isArray(Array.from(titles))); // // covert to array

// Array.from(titles).forEach(item => { // select multiple using foreach, !must be an array
// 	console.log(item);
// });

//---------------------query selector-----------------------

// const wmf = document.querySelector('#book-list li:nth-child(2) .name');
// console.log(wmf);

//const books = document.querySelectorAll('#book-list li .name');
// console.log(books);

//  books.forEach(item =>{
//  	console.log(item);
//  })

//-------------------changing the text and html content---------------

// books.forEach(book => {
// 	book.textContent += 'test'; //grab the text
// 	console.log(book.textContent);
// })

//const bookList = document.querySelector('#book-list');
// console.log(bookList.innerHTML);   //grab innerHTML
// bookList.innerHTML += '<h2>bok bok bok<h2/>'; 

// -----------------------------nodes-----------------------

// const banner = document.querySelector("#page-banner");
// console.log(banner.nodeType);  //get the nodetype
// console.log(banner.nodeName);  //get the nodename
// console.log(banner.hasChildNodes());  //return true if has a child

// const clonedBanner = banner.cloneNode(false); //clone single element
// const clonedBanner2 = banner.cloneNode(true); //clone the child also
// console.log(clonedBanner);
// console.log(clonedBanner2);

//============================traverse the dom

// console.log(bookList.parentNode);
// console.log(bookList.parentElement);
// console.log(bookList.parentElement.parentElement);

// console.log(bookList.childNodes); //also grab the "text"
// console.log(bookList.children);

// console.log(bookList.nextSibling);
// console.log(bookList.nextElementSibling);

// console.log(bookList.previousSibling);
// console.log(bookList.previousElementSibling);

// bookList.previousElementSibling.querySelector("p").innerHTML += "bla bla bla";

//===============================events=======================

// const h2 = document.querySelector("#book-list h2");
// h2.addEventListener("click", (e) =>{
// 	console.log(e);
// 	console.log(e.target);
// })


// //=========================

// const btns = document.querySelectorAll("#book-list .delete"); //get the delete btns

// btns.forEach(btn =>{
// 	btn.addEventListener("click", del =>{  //add event to each btns
// 		const li = del.target.parentElement;  //get the li parent of the btns
// 		li.parentNode.removeChild(li); 
// 	})
// })

// //==========================

// const link = document.querySelector('#page-banner a');

// link.addEventListener("click", e =>{
// 	e.preventDefault();  //prevent from navigating to the linked site
// 	console.log("navigation to", e.target.textContent," was prevented");
// })

//==========================event bubbling=======================

const list = document.querySelector("#book-list ul");

//delete books
list.addEventListener("click", e =>{ 
 	if(e.target.className == 'delete'){  
	const li = e.target.parentElement;
	list.removeChild(li);
	}
})

 const addForm = document.forms["add-book"]; // get the form with classname "add-book"

 //add books
 addForm.addEventListener('submit', e =>{
 	e.preventDefault();  //prevent from refreshing the page
 	const value = addForm.querySelector('input[type="text"]').value; //get the value of the input text
 	console.log(value);

// 	//create elements
 	const li = document.createElement('li');
 	const bookName = document.createElement('span');
 	const deleteBtn = document.createElement('span');

// 	//add element content
 	bookName.textContent = value;
 	deleteBtn.textContent = 'delete';

// 	//add classes
 	bookName.classList.add("name");
 	deleteBtn.classList.add('delete');

// 	//append to DOM
 	li.appendChild(bookName);
 	li.appendChild(deleteBtn);
 	list.appendChild(li);
})

//hide all books
const hideBox = document.querySelector('#hide');

hideBox.addEventListener('change', e =>{ //change event (check if the form is changed)
	if(hideBox.checked){ //if the ckeckbox is checked
		list.style.display = 'none';
	}else{
		list.style.display = 'initial';
	}
})

//filter books
const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', e =>{
	const term = e.target.value.toLowerCase();
	const books = list.getElementsByTagName('li');
	Array.from(books).forEach(book => {
		const title = book.firstElementChild.textContent;
		if(title.toLowerCase().indexOf(term) != -1){
			book.style.display = 'block';
		} else{
			book.style.display = 'none';
		}
	});
})

//tabbed content
const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click', e =>{
	if(e.target.tagName == "LI"){
		const targetPanel = document.querySelector(e.target.dataset.target);
		panels.forEach(panel =>{
			if(panel == targetPanel){
				panel.classList.add('active');
			} else{
				panel.classList.remove('active');
			}
		})
	}
})

//=====================attributes========================================

// var book = document.querySelector('#book-list li:First-child .name');

// book.getAttribute("class"); //get class attribute
// book.getAttribute("href");
// book.setAttribute('class','name-2');  //change or add class name
// book.hasAttribute("class"); //check if it has an class attribute
// book.hasAttribute("href");  
// book.removeAttribute('class'); //remove class att



})




