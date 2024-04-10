let bgContainerEle = document.getElementById("bgContainer");
let headingEle = document.getElementById("heading");
let themeUserInputEle = document.getElementById("themeUserInput");

let lightImgUrl="url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-light-bg.png')";
let darkImgUrl="url('https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/change-theme-dark-bg.png')";

function changeBackground(event){
    if(event.key === "Enter"){
        let themeUserInputValue = themeUserInputEle.value  ;
        if(themeUserInputValue === "Light"){
            bgContainerEle.style.backgroundImage = lightImgUrl;
            headingEle.style.color= "#014d40";

        }else if(themeUserInputValue === "Dark"){
            bgContainerEle.style.backgroundImage = darkImgUrl;
            headingEle.style.color ="#ffffff";
        } else {
            alert("Enter a valid input");
        }
    }

}
themeUserInputEle.addEventListener("keydown",changeBackground);