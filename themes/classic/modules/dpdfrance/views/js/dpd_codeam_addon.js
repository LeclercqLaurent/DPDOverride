document.addEventListener('readystatechange', function() {
    // Hide by state
    let collection = document.querySelectorAll(".statutcommande");

    for (let td of collection) {
        let state = td.textContent.trim();
        if ("Expédié" == state) {
            td.parentNode.style.display = "none";
        }
    }

    // Add button
    if (null === document.getElementById('updateStateToShippedBtn')) {
        let exportLabelButton = document.getElementById('exportLabel');
        let newButton   = document.createElement('input');

        newButton.type  = "submit";
        newButton.id    = "updateStateToShippedBtn";
        newButton.name  = "updateStateToShipped";
        newButton.value = "Passer les commandes à Expédié";

        exportLabelButton.after(newButton);
    }
})
