capturar.addEventListener("click", (evt) => {
  // covertToImagePng();
  convertImage("png");
});

document.addEventListener("click", function (evt) {
  console.log(evt.target);
  // if (evt.target.matches(".clasico")) {
  //   evt.preventDefault();
  //   window.open(evt.target.href);
  // }
});

async function convertImage(format) {
  let $node = await resizeToImage(postHonor);
  // let $node = postHonor;
  console.log(format == "png");
  let res =
    format == "png" &&
    (await domtoimage.toPng($node, {
      quality: 1,
    }));
  //   console.log(res);
  let photo = new Image();
  photo.src = await res;
  let $link = document.createElement("a");
  // $link.download = "picture.png";
  $link.href = photo.src;
  $link.target = "_blank";
  $link.classList.add("clasico");
  $link.textContent = "Descargar imagen ahora mismo";
  document.body.prepend($link);
  // localStorage.setItem("foto", photo);
  // window.saveAs(res, "image.png");
  display.append(photo);
}

function resizeToImage($node) {
  let $clone = $node.cloneNode(true);
  $clone.style.width = "1080px";
  $clone.style.height = "1080px";
  $clone.style.fontSize = "52.16px";
  $clone.id = "prueba";
  //   $clone.style.transform = "scale(2.7032)";
  //   console.log($clone);
  resultToImage.append($clone);
  return $clone;
}
