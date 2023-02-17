//  DEAD LINKS
document.querySelectorAll("a[href='#']").forEach(function(link) { 
  link.addEventListener("click", function(e) {
    e.preventDefault()
  })
});