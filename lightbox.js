var images = document.getElementsByClassName("gridImg");
for (var i=0; i < images.length; i ++ ){
  photoImg = images[i];
  // open lightbox
  photoImg.onclick = function() {
    document.body.style.overflow ="hidden";
    window.scrollTo(0,0);

    var imgDiv = document.createElement("div");
    imgDiv.style.backgroundColor = "white";
    imgDiv.setAttribute("class", "lightbox");
    imgDiv.style.height = this.offsetHeight + 10;
    imgDiv.style.width = this.offsetWidth + 10;
    imgDiv.style.marginTop = -this.offsetHeight/2;
    imgDiv.style.marginLeft = -this.offsetWidth/2;

    var closeButton = document.createElement("span");
    closeButton.innerHTML = "<b>&times</b>";
    closeButton.setAttribute("class", "closeButton");

    var imgTitle = document.createElement("div");
    imgTitle.setAttribute("class", "imgTitle");
    imgTitle.innerHTML = this.getAttribute("title");
    imgTitle.style.width = this.offsetWidth;

    //arrows
    var rightArrow = document.createElement("span");
    rightArrow.innerHTML = "&#x276d;";
    rightArrow.setAttribute("class", "arrow");
    rightArrow.setAttribute("id", "rightArrow");

    var leftArrow = document.createElement("span");
    leftArrow.innerHTML = "&#x276c;";
    leftArrow.setAttribute("class", "arrow");
    leftArrow.setAttribute("id", "leftArrow");

    //lightbox iamge
    lightImg = this.cloneNode(true);
    lightImg.className += " lightbox";
    lightImg.setAttribute("id", "lightImg");
    lightImg.style.height = this.offsetHeight;
    lightImg.style.width = this.offsetWidth;
    lightImg.style.marginTop = -this.offsetHeight/2;
    lightImg.style.marginLeft = -this.offsetWidth/2;
    lightImg.margin = "5px";
    imgDiv.appendChild(lightImg);
    imgDiv.appendChild(closeButton);
    imgDiv.appendChild(leftArrow);
    imgDiv.appendChild(rightArrow);
    imgDiv.appendChild(imgTitle);
    var imgNum = lightImg.getAttribute("imgNum");
    console.log(imgNum);
    if (imgNum > 0) {
      leftArrow.style.display = "block";
    }
    if (imgNum < images.length -1) {
      rightArrow.style.display = "block";
    }


    document.body.appendChild(imgDiv);
    document.getElementsByClassName("overlay")[0].style.display = "block";

    // close listener
    closeButton.onclick = function() {
      document.body.style.overflow ="visible";
      var lightbox = document.getElementsByClassName("lightbox");
      for (var i=0; i < lightbox.length; i++) {
        lightbox[i].parentElement.removeChild(lightbox[i]);
      }

      var arrows = document.getElementsByClassName("arrow");
      for (var i=0; i < arrows.length; i++) {
        arrows[i].parentElement.removeChild(arrows[i]);
      }
      imgTitle.parentElement.removeChild(imgTitle);
      this.parentElement.removeChild(this);
      document.getElementsByClassName("overlay")[0].style.display = "none";
    }

    //arrow listener
    var arrows = document.getElementsByClassName("arrow");
    for (var a=0; a<arrows.length; a++) {
      var arrow = arrows[a];
      arrow.onclick = function() {
        console.log("clicked arrow");


        if (this.id == "leftArrow") {
          imgNum --;
          if(imgNum == images.length - 3) {
            rightArrow.style.display = "block";
          }
        } else {
          imgNum ++;
          if(imgNum == 1) {
            leftArrow.style.display = "block";
          }
        }
        console.log(imgNum);
        console.log(images.length);

        if (imgNum == 0) {
          leftArrow.style.display = "none";

        }
        if (imgNum == images.length -2) {
          rightArrow.style.display = "none";
        }
        var imgTarget = document.querySelector("img[imgNum='" + imgNum + "']");
        lightImg.parentElement.removeChild(lightImg);
        lightImg = imgTarget.cloneNode(true);
        lightImg.className += " lightbox";
        lightImg.setAttribute("id", "lightImg");
        lightImg.style.height = imgTarget.offsetHeight;
        lightImg.style.width = imgTarget.offsetWidth;
        lightImg.style.marginTop = -imgTarget.offsetHeight/2;
        lightImg.style.marginLeft = -imgTarget.offsetWidth/2;
        lightImg.margin = "5px";
        imgTitle.innerHTML = lightImg.getAttribute("title");
        imgDiv.style.height = imgTarget.offsetHeight + 10;
        imgDiv.style.width = imgTarget.offsetWidth + 10;
        imgDiv.style.marginTop = -imgTarget.offsetHeight/2;
        imgDiv.style.marginLeft = -imgTarget.offsetWidth/2;
        imgDiv.appendChild(lightImg);
      }

    }

  }


}
