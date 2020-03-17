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

  const key = document.querySelector(
    `.box[data-key="${e.keyCode}"]` && `.box[data-code="${e.code}"]`
  );

  try {
    key.classList.add("pressed");
  } catch (m) {
    // console.log(m);
  }
}

function removeTransition(e) {
  // console.log(e.propertyName);
  if (e.propertyName !== "transform") return; // skip if it's not a transform
  this.classList.remove("pressed");
}

function keyUpEvent(e) {
  const key = document.querySelector(
    `.box[data-key="${e.keyCode}"]` && `.box[data-code="${e.code}"]`
  );

  if (!(e.key in keysdown)) {
    try {
      key.classList.remove("pressed");
    } catch (m) {
      // console.log(m);
    }
  }

  // console.log(key);
}
