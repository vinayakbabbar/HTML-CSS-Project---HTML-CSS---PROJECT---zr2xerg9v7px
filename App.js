const home=document.querySelector("#home");
const work=document.querySelector("#work");
const blog=document.querySelector("#blog");
const about=document.querySelector("#about");
const imageRender=document.querySelector(".image");

home.addEventListener('click',(event)=>{
    imageRender.innerHTML="";
    const addImageHome=document.createElement('img');
    addImageHome.setAttribute('src', 'home.jpg');
    addImageHome.setAttribute('width','100%');
    addImageHome.setAttribute('height','100%');
    imageRender.appendChild(addImageHome);
})

work.addEventListener('click',(event)=>{
    imageRender.innerHTML="";
    const addImageWork=document.createElement('img');
    addImageWork.setAttribute('src', 'work.jpg');
    addImageWork.setAttribute('width','100%');
    addImageWork.setAttribute('height','100%');
    imageRender.appendChild(addImageWork);
})
blog.addEventListener('click',(event)=>{
    imageRender.innerHTML="";
    const addImageBlog=document.createElement('img');
    addImageBlog.setAttribute('src', 'blog.jpg');
    addImageBlog.setAttribute('width','100%');
    addImageBlog.setAttribute('height','100%');
    imageRender.appendChild(addImageBlog);
})
about.addEventListener('click',(event)=>{
    imageRender.innerHTML="";
    const addImageAbout=document.createElement('img');
    addImageAbout.setAttribute('src', 'about us.jpg');
    addImageAbout.setAttribute('width','100%');
    addImageAbout.setAttribute('height','100%');
    imageRender.appendChild(addImageAbout);
})