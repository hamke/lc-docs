var img0 = new Image();
var imageTag0 = document.getElementById("carousel-img0");
img0.src = imageTag0.src;
img0.onload = function() {
  if (img0.width / img0.height <= document.body.clientWidth / document.body.clientHeight) {
    imageTag0.style.width = document.body.clientWidth + "px";
  } else {
    imageTag0.style.height = document.body.clientHeight + "px";
    imageTag0.style.marginLeft = -(document.body.clientHeight * img0.width / img0.height - document.body.clientWidth) / 2 + "px";
  }
};
