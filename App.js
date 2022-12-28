const listOfAllElements =document.querySelectorAll(".tabs div")
//console.log(listOfAllElements);//NodeList(4) [div#element_pic1, div#element_pic2, div#element_pic3, div#element_pic4]

for(let i=0;i<listOfAllElements.length;i++){
    listOfAllElements[i].addEventListener('click',()=>{
        const elementID =listOfAllElements[i].id;
        //console.log(elementID);//element_pic1
        const elementArr=elementID.split("_");
        //console.log(elementArr)// ['element', 'pic1']
        const imageSelected = elementArr[1];
        const elem=document.querySelector("#"+imageSelected);
        // console.log(elem); //img tag selected
        hideAllimages();
        elem.removeAttribute('hidden','');
        elem.setAttribute('active', '');

    })
}

function hideAllimages(){
    const listOfAllImages = document.querySelectorAll(".image img")
    // console.log(listOfAllImages);                    
    
    
    
    // listOfAllImages.forEach(imageElement =>{
    //     imageElement.classList.add('hidden');
    // });
   
    for(let i=0;i<listOfAllImages.length;i++){
        listOfAllImages[i].setAttribute('hidden' , '');//add hidden attribute on current html element 
    }
    // console.log("hidden all success")

} 

//--------------------------------------------------------------------------------------------------------------
// const home=document.querySelector("#home");
// const work=document.querySelector("#work");
// const blog=document.querySelector("#blog");
// const about=document.querySelector("#about");
// const imageRender=document.querySelector(".image");

// home.addEventListener('click',()=>{

//     hideAllimages();
   
//     const addImageHome=document.querySelector("#pic1")
//     console.log(addImageHome);
//     addImageHome.removeAttribute('hidden','');
//     addImageHome.setAttribute('active', '');
    


//     // imageRender.innerHTML="";
//     // const addImageHome=document.createElement('img');
//     // addImageHome.setAttribute('src', 'home.jpg');
//     // addImageHome.setAttribute('width','100%');
//     // addImageHome.setAttribute('height','100%');
//     // imageRender.appendChild(addImageHome);
// })

// work.addEventListener('click',(event)=>{
   
//     hideAllimages();
//     // let imageSelected=event.target.id;
//     const addImageWork=document.querySelector("#pic2");
//     console.log(addImageWork);
//     addImageWork.removeAttribute('hidden', '');
//     addImageWork.setAttribute('active', '');


//     // imageRender.innerHTML="";
//     // const addImageWork=document.createElement('img');
//     // addImageWork.setAttribute('src', 'work.jpg');
//     // addImageWork.setAttribute('width','100%');
//     // addImageWork.setAttribute('height','100%');
//     // imageRender.appendChild(addImageWork);
// })
// blog.addEventListener('click',(event)=>{

//     hideAllimages();
//     // let imageSelected=event.target.id;
//     const addImageBlog=document.querySelector("#pic3");
//     console.log(addImageBlog);
//     addImageBlog.removeAttribute('hidden', '');
//     addImageBlog.setAttribute('active', '');



//     // imageRender.innerHTML="";
//     // const addImageBlog=document.createElement('img');
//     // addImageBlog.setAttribute('src', 'blog.jpg');
//     // addImageBlog.setAttribute('width','100%');
//     // addImageBlog.setAttribute('height','100%');
//     // imageRender.appendChild(addImageBlog);
// })
// about.addEventListener('click',(event)=>{

//     hideAllimages();
//     // let imageSelected=event.target.id;
//     const addImageAbout=document.querySelector("#pic4");
//     console.log(addImageAbout);
//     addImageAbout.removeAttribute('hidden', '');
//     addImageAbout.setAttribute('active', '');


//     // imageRender.innerHTML="";
//     // const addImageAbout=document.createElement('img');
//     // addImageAbout.setAttribute('src', 'about us.jpg');
//     // addImageAbout.setAttribute('width','100%');
//     // addImageAbout.setAttribute('height','100%');
//     // imageRender.appendChild(addImageAbout);
// })




