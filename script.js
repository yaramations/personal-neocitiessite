
     /*Code for displaying the time*/
     var currentTime = new Date().toLocaleString();
      var timeText = document.querySelector("#timeElement");
      timeText.innerHTML = currentTime


    function updateTime() {
        var currentTime = new Date().toLocaleString();
        var timeText = document.querySelector("#timeElement");
        timeText.innerHTML = currentTime;
    }
    setInterval(updateTime, 1000);




    /*Code for dragable windows!*/

// Make the DIV element draggable:
// Make an element draggable. Call: makeDraggable(document.getElementById('welcome'));
function makeDraggable(el) {
  if (!el) return; // guard if element not found

  let startX = 0, startY = 0;

  const header = document.getElementById(el.id + "header");

  function onMouseDown(e) {
    e.preventDefault();
    startX = e.clientX;
    startY = e.clientY;
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  function onMouseMove(e) {
    e.preventDefault();
    const dx = e.clientX - startX;
    const dy = e.clientY - startY;
    startX = e.clientX;
    startY = e.clientY;
    el.style.left = (el.offsetLeft + dx) + "px";
    el.style.top = (el.offsetTop + dy) + "px";
  }

  function onMouseUp() {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  }

  if (header) header.addEventListener('mousedown', onMouseDown);
  else el.addEventListener('mousedown', onMouseDown);
}