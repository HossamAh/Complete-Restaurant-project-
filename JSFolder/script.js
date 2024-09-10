let body = document.getElementsByTagName("body")[0];

/*About */
let about_sec = document.getElementsByClassName("about")[0];
about_sec.addEventListener("click",()=>{
	console.log("about on");
	body.setAttribute("class","about-on");
	
});
let about_close = document.getElementsByClassName("about-close")[0];
about_close.addEventListener("click",()=>{
	console.log("about close")
	body.removeAttribute("class");
});


/*Menu */
let menu_sec = document.getElementsByClassName("menu")[0];
menu_sec.addEventListener("click",()=>{
	console.log("menu on");
	body.setAttribute("class","menu-on");
	
});
let menu2_sec = document.getElementsByClassName("menu")[1];
menu2_sec.addEventListener("click",()=>{
	console.log("menu on");
	body.setAttribute("class","menu-on");
	
});
let menu_close = document.getElementsByClassName("menu-close")[0];
menu_close.addEventListener("click",()=>{
	console.log("menu close")
	body.removeAttribute("class");
});

let book_sec = document.getElementsByClassName("book")[0];
book_sec.addEventListener('click',()=>{
	body.setAttribute("class","book-on");
});
let book_close = document.getElementsByClassName("book-close")[0];
book_close.addEventListener('click',()=>{
	body.removeAttribute("class","book-on");
});