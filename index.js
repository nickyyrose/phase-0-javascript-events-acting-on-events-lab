const dodger = document.getElementById("dodger");
dodger.style.right = "0px";

function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      dodger.style.left = `${left - 1}px`;
    }
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
  });


  function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    let left = parseInt(leftNumbers, 10);
  
    if (left < window.innerWidth - dodger.offsetWidth) {
      left += 1;
      dodger.style.left = `${left}px`;
    }
  }