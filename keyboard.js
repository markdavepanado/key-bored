window.addEventListener("keydown", keyDownEvent);
window.addEventListener("keyup", keyUpEvent);

var keysdown = {};

function keyDownEvent(e) {
  //for preventing key functions like refresh
  if (!e.metaKey) {
    e.preventDefault();
  }

  console.log(e);
  if (e.keyCode === 20 || e.keyCode === 145 || e.keyCode === 144) {
    if (!(e.key in keysdown)) {
      keysdown[e.key] = true;
    } else {
      delete keysdown[e.key];
    }
  }

  const keyBigText = document.getElementById("keyBigText");
  const keyCodeDetails = document.getElementById("keyCodeDetails");
  const codeDetails = document.getElementById("codeDetails");
  const keyLocationDetails = document.getElementById("keyLocationDetails");
  const keyWhichDetails = document.getElementById("keyWhichDetails");

  const ctrlKeyKeyType = document.getElementById("ctrlKeyKeyType");
  const shiftKeyKeyType = document.getElementById("shiftKeyKeyType");
  const altKeyKeyType = document.getElementById("altKeyKeyType");
  const metaKeyKeyType = document.getElementById("metaKeyKeyType");

  const key = document.querySelector(
    `.box[data-key="${e.keyCode}"]` && `.box[data-code="${e.code}"]`
  );

  const capslock = document.querySelector(".capslock-led");
  const scrollock = document.querySelector(".scrolllock-led");
  const numlock = document.querySelector(".numlock-led");

  try {
    key.classList.add("pressed");
    keyBigText.innerHTML = e.key;
    keyCodeDetails.innerHTML = e.keyCode;
    codeDetails.innerHTML = e.code;
    keyLocationDetails.innerHTML = e.location;
    keyWhichDetails.innerHTML = e.which;

    ctrlKeyKeyType.innerHTML = e.ctrlKey;
    shiftKeyKeyType.innerHTML = e.shiftKey;
    altKeyKeyType.innerHTML = e.altKey;
    metaKeyKeyType.innerHTML = e.metaKey;

    if (e.keyCode === 20) {
      capslock.classList.add("active");
    }

    if (e.keyCode === 145) {
      scrollock.classList.add("active");
    }

    if (e.keyCode === 144) {
      numlock.classList.add("active");
    }
  } catch (m) {}
}

function removeTransition(e) {
  this.classList.remove("pressed");
}

function keyUpEvent(e) {
  const key = document.querySelector(
    `.box[data-key="${e.keyCode}"]` && `.box[data-code="${e.code}"]`
  );

  const capslock = document.querySelector(".capslock-led");
  const scrollock = document.querySelector(".scrolllock-led");
  const numlock = document.querySelector(".numlock-led");

  if (!(e.key in keysdown)) {
    try {
      key.classList.remove("pressed");

      if (e.key === "CapsLock") {
        capslock.classList.remove("active");
      }

      if (e.key === "ScrollLock") {
        scrollock.classList.remove("active");
      }

      if (e.key === "NumLock") {
        numlock.classList.remove("active");
      }
    } catch (m) {}
  }
}
