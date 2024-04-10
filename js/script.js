var citasBtn = document.querySelectorAll('.A');
var citas = document.querySelectorAll('.citas');
citasBtn.forEach(function (citasBtn) {
    citasBtn.onclick = function() {
        id = citasBtn.getAttribute("href");
        citas.forEach(function (citas) {
            if(id == "#" + citas.id){
                document.getElementById(citas.id).classList.remove("hidden");
                document.querySelector('.ocultame').classList.add("hidden");
            }
            else{
                document.getElementById(citas.id).classList.add("hidden");
            }
        })
    }
});