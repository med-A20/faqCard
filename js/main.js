// get answer

const answer = document.querySelectorAll(".hid");
console.log(answer);
answer.forEach((ele) => (ele.style.display = "none"));

// toggele class

const quest = document.querySelectorAll(".quest");

quest.forEach((ele) => {
  ele.onclick = () => {
    ele.firstElementChild.classList.toggle("show");
    ele.classList.toggle("brd");
    ele.nextElementSibling.classList.toggle("ansr");
    ele.lastElementChild.classList.toggle("rotate");
    // document.querySelector(".span").style.transform = " rotate(135deg)";
  };
});
