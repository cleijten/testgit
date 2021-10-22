const btn = document.getElementById("sidebar-btn");
const bodyElement = document.body;
const colorLinks = document.querySelectorAll("li");

Array.from(colorLinks).forEach(function (link) {
  link.addEventListener("click", function (e) {
    const colorClass = link.className;

    if (bodyElement.className) {
      bodyElement.classList.remove(bodyElement.className);
    }

    bodyElement.classList.add(colorClass);

    toggleSidebar(); //sidebar schuift weer naar links als er op een link is geklikt

    document.getElementById("p-text").innerText = "The color is " + colorClass; //tekst tonen
  });
});

//eventlistener voor mouseover
btn.addEventListener("mouseover", function (e) {
  toggleSidebar();
});

// als je mouseout ook gebruikt, dan krijg je het menu toch nooit te zien???????
// btn.addEventListener("mouseout", function (e) {
//   toggleSidebar();
// }
// );

// initiele klik eventlistener
// btn.addEventListener("click", function (e) {
//   toggleSidebar();
// });

//het togglen van het menu
function toggleSidebar() {
  const box = document.getElementById("sidebar");
  box.classList.toggle("active");
}

//functie keyboard events
window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "Digit1":
      if (bodyElement.className) {
        bodyElement.classList.remove(bodyElement.className);
      }
      bodyElement.classList.add("grey");
      document.getElementById("p-text").innerText = "The color is grey";

      break;
    case "Digit2":
      if (bodyElement.className) {
        bodyElement.classList.remove(bodyElement.className);
      }
      bodyElement.classList.add("red");
      document.getElementById("p-text").innerText = "The color is red";

      break;
    case "Digit3":
      if (bodyElement.className) {
        bodyElement.classList.remove(bodyElement.className);
      }
      bodyElement.classList.add("orange");
      document.getElementById("p-text").innerText = "The color is orange";

      break;
    case "Digit4":
      if (bodyElement.className) {
        bodyElement.classList.remove(bodyElement.className);
      }
      bodyElement.classList.add("purple");
      document.getElementById("p-text").innerText = "The color is purple";

      break;
    case "Digit5":
      if (bodyElement.className) {
        bodyElement.classList.remove(bodyElement.className);
      }
      bodyElement.classList.add("green");
      document.getElementById("p-text").innerText = "The color is green";

      break;
  }
});
