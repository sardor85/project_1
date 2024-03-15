const h1 = document.querySelector('h1');
const p1 = document.querySelector('#p1')
const p2 = document.querySelector('#p2')
const item = document.querySelector("#item")
document.addEventListener("mousemove", function(e) {
    h1.style.color = "red";
    
    p1.innerHTML="cordinatX: "+e.clientX
    p2.innerHTML="cordinatY: "+e.clientY
    item.style.backgroundColor=`rgb(255,${e.clientY},${e.clientX})`

})
