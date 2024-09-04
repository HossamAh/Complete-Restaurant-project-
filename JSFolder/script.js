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

// /*projects */
// let projects_sec = document.getElementsByClassName("projects")[0];
// projects_sec.addEventListener("click",()=>{
// 	console.log("projects on");
// 	body.setAttribute("class","projects-on");
	
// });
// let projects_close = document.getElementsByClassName("projects-close")[0];
// projects_close.addEventListener("click",()=>{
// 	console.log("projects close")
// 	body.removeAttribute("class");
// });