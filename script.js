document.getElementById('openModalBtn').onclick = function() {
    document.getElementById('modal').style.display = "block";
    console.log(modal);
}

document.querySelector('.close').onclick = function() {
    document.getElementById('modal').style.display = "none";
}

window.onclick = function(event) {
    if (event.target == document.getElementById('modal')) {
        document.getElementById('modal').style.display = "none";
    }
}
