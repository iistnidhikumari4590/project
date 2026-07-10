function searchProduct(){
    let input = document.getElementById("search").value.toLowerCase();
    let cards = document.querySelectorAll("");

    cards.forEach(function(card) {
        let name = card.querySelector("h2").innerText.toLowerCase();

        if (name.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
};

// iframe
// function loadPage(page){
//     document.getElementById('contentFrame').src = URL;
// }