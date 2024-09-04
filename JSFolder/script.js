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


// /*Skills */
// let skills_sec = document.getElementsByClassName("skills")[0];
// skills_sec.addEventListener("click",()=>{
// 	console.log("skills on");
// 	body.setAttribute("class","skills-on");
	
// });
// let skills_close = document.getElementsByClassName("skills-close")[0];
// skills_close.addEventListener("click",()=>{
// 	console.log("skills close")
// 	body.removeAttribute("class");
// });

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