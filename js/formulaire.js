document.addEventListener("DOMContentLoaded", e => {

    let btn_validation;
    console.log(e.target);
    btn_validation = document.getElementById('btn-val');

    const User = {
        first_name: null,
        last_name: null,
        email: null,
        ville: null,
        pays: null,
        infos: [],

        init() {
            this.first_name = document.getElementsByName("prenom")[0].value;
            this.last_name = document.getElementsByName("nom")[0].value;
            this.email = document.getElementsByName("email")[0].value;
            this.ville = document.getElementsByName("ville")[0].value;
            this.pays = document.getElementsByName("pays")[0].value;
        }
    };
    btn_validation.addEventListener("click", e => {
        e.preventDefault();
        User.init();
        if (User.first_name && User.last_name && User.email && User.ville && User.pays) {
            console.log(`Nom : ${User.last_name} Prénom : ${User.first_name} Email : ${User.email}, Ville ${User.ville}, Pays ${User.pays}`);
            User.infos.push(User.first_name, User.last_name, User.email, User.ville, User.pays);
            console.table(User.infos);
            localStorage.setItem('User', JSON.stringify(User.infos));
        } else {
            alert('Remplir les champs');
        }
    });
});