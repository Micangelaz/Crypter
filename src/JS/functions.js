  document.addEventListener("click", function (e) {
      if (e.target.classList.contains("switch-on")) {
          e.target.classList.remove("switch-on");
      } else {
          e.target.classList.add("switch-on");
      }
  });