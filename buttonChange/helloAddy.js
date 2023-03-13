const loveBtn = document.getElementById("loveBtn");

loveBtn.addEventListener("click", function setILoveYou() {
  const initialText = "Click Me";

  if (loveBtn.innerHTML.includes(initialText)) {
    loveBtn.innerHTML = "I love you Adelyn!";
  } else {
    loveBtn.innerHTML = initialText;
  }
});
