let assetPath = "assets/";
let audioPath = assetPath + "mechanical-subtle.mp3";

function updateText(keyName) {
  let textArea = document.getElementById("textArea");
  textArea.textContent = textArea.textContent.slice(
    0,
    textArea.textContent.length - 1
  );

  if (keyName == "Backspace") {
    textArea.textContent = textArea.textContent.slice(
      0,
      textArea.textContent.length - 1
    );
  } else if (keyName == "Enter") {
    textArea.textContent += "\n";
  } else if (keyName == "Tab") {
    textArea.textContent += "     ";
  } else if (
    keyName != "Shift" &&
    keyName != "Alt" &&
    keyName != "Capslock" &&
    keyName != "Control" &&
    keyName != "Backspace"
  ) {
    textArea.textContent += keyName;
  }

  textArea.textContent += "|";
}

window.addEventListener("keydown", (event) => {
  console.log(event.key);
  let keyName = event.key;
  if (keyName == " ") {
    keyName = "spacebar";
  }

  updateText(event.key);
  event.preventDefault();
  let button = document.getElementById(keyName);
  button.style.boxShadow = "1px 1px 1px 2px #fff8f8, -1px -1px 2px #ffb04f";
  let audio = new Audio(audioPath);
  audio.play();
  button.click();
});

window.addEventListener("keyup", (event) => {
  event.preventDefault();
  let keyName = event.key;
  if (keyName == " ") {
    keyName = "spacebar";
  }
  let button = document.getElementById(keyName);
  button.style.boxShadow = "5px 5px 10px #ffba67, -5px -5px 10px #e1ffeb";
});

function changeSound(event) {
  audioPath = assetPath + event.target.value + ".mp3";
}
