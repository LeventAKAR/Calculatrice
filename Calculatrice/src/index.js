const buttons = document.querySelectorAll(".btn");
const resultat = document.getElementById("resultat");

buttons.forEach((bouton) => {
    bouton.addEventListener("click", (e) => {
        resultat.textContent += e.target.id;
    });
});

/* Javascript reconnait automatiquement les buttons qui ont un id */
equal.addEventListener("click", () => {
    resultat.textContent = eval(resultat.textContent);
});

reset.addEventListener("click", () => {
    resultat.textContent = "";
});

