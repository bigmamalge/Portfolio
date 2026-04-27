// Fonction pour copier l'adresse email dans le presse-papier
function copierEmail() {
    // L'email à copier
    const email = "daulnymalone1@gmail.com";
    
    // API du navigateur pour copier dans le presse-papier
    navigator.clipboard.writeText(email).then(function() {
        // Récupère l'élément HTML de la notification (le "toast")
        const toast = document.getElementById("toast");
        
        // Ajoute la classe 'show' pour l'afficher
        toast.classList.add("show");
        
        // Cache la notification après 3 secondes (3000 millisecondes)
        setTimeout(function() { 
            toast.classList.remove("show"); 
        }, 3000);
        
    }).catch(function(err) {
        console.error('Erreur lors de la copie : ', err);
        alert("Impossible de copier l'email. Voici l'adresse : " + email);
    });
}