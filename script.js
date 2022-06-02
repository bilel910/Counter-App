const countNumber = document.getElementById("count");
const counterBody = document.getElementById("counter-body");
const buttons = document.querySelector(".buttons");
let c = 0;

buttons.addEventListener("click", (e) => {
  if (e.target.classList.contains("add")) {
    c++;
    countNumber.textContent = c;
    setcolor();
  } else if (e.target.classList.contains("sub")) {
    c--;
    countNumber.textContent = c;
    setcolor();
  } else if (e.target.classList.contains("reset")) {
    c = 0;
    countNumber.textContent = 0;
    setcolor();
  }
});

function setcolor() {
  if (c >= 0) {
    counterBody.style.backgroundColor = "#005490";
  } else if (c < 0) {
    counterBody.style.backgroundColor = "#9d0191";
  } else {
    counterBody.style.backgroundColor = "#005490";
  }
}

/*addBtn.addEventListener("click", function () {
  c++;
  countNumber.textContent = c;
  if (c >= 0) {
    counterBody.style.backgroundColor = "#005490";
  }
});

subBtn.addEventListener("click", function () {
  c--;
  countNumber.textContent = c;
  if (c < 0) {
    counterBody.style.backgroundColor = "#9d0191";
  }
});

resetBtn.addEventListener("click", function () {
  c = 0;
  countNumber.textContent = 0;
  counterBody.style.backgroundColor = "#005490";
});*/
