const formulaire = {
    nom: prompt("votre nom"),
    prenom: prompt("votre prenom"),
    pays: prompt("pays"),
    email: prompt("votre email"),
    ville: prompt("votre ville")
};

class Users {

    constructor(nom, prenom, age, email, ville) {
        this.nom = nom;
        this.prenom = prenom;
        this.pays = pays;
        this.ville = ville;
        this.email = email;
    }
    print_out() {
        console.log(`${this.nom} ${this.prenom} ${this.pays} ${this.email} ${this.ville} `);
    }
}
const connects = new Users(formulaire.nom, formulaire.prenom, formulaire.pays, formulaire.email, formulaire.ville);
let msg = connects.print_out();

console.log(msg);