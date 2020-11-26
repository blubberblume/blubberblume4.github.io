window.onload = function() {
  const nodes = document.querySelectorAll(".flex-item");
  console.log(nodes);
  for (const node of nodes) {
    node.addEventListener("click", function(elem) {
      switchExpand(elem);
    });
  }
};

function switchExpand(elem) {
  const isExpanded = JSON.parse(
    elem.target.parentNode.getAttribute("data-expanded")
  );
  console.log(elem);
  elem.target.parentNode.setAttribute("data-expanded", !isExpanded);
}
