document.addEventListener("DOMContentLoaded", function(event) {

    //Un commentaire
    console.log("Ça fonctionne!!!");
    var informations = [
        {
            id: "pizza",
            title: "Nos Pizza",
            slogan: "Eat. Pizza. Repeat.",
            type: ["pepperoni", "All Dress", "Baaaaaacon"],
            image: "images/pizza/main.jpg",
            description: "NY style pesto ricotta onions chicken and bacon chicken wing peppers pie lasagna steak. Parmesan hawaiian extra sauce, onions pizza roll meatball stuffed burnt mouth black olives meatball thin crust bbq rib. Chicken and bacon pizza roll ham thin crust",    
            gallery: ["images/pizza/1.jpg", "images/pizza/2.jpg", "images/pizza/3.jpg"]

        }, {
            id: "bacon",
            title: "Baaaaacoonnn",
            slogan: "Bacon c'est comme un High-five pour ta bouche",
            type: ["À l'érable", "Bacon de sanglier", "avec du bacon", "au bacon", "avec du bacon"],
            image: "images/bacon/main.jpg",
            description: "Leberkas hamburger ribeye, jerky frankfurter prosciutto tail fatback. Ham hock venison andouille ham turducken porchetta tenderloin t-bone flank beef ribs salami ribeye pork belly short ribs shankle. Cow capicola ground round, pancetta flank spare ribs swine pork chop chuck rump brisket sirloin",    
            gallery: ["images/bacon/1.jpg", "images/bacon/2.jpg", "images/bacon/3.jpg"]
        }, {
            id: "beigne",
            title: "Beigne",
            slogan: "Donut worry be happy",
            type: ["Glacé au chocolat", "Crème Boston", "Fraises", "Rousettes au miel", "À 'ancienne"],
            image: "images/donuts/main.jpg",
            description: "Cake sweet tiramisu lollipop donut sprinkles dolor tiramisu marzipan jelly. Tiramisu muffin cookie orange dolor marzipan croissant sweet ipsum muffin. Tiramisu donut marzipan croissant lollipop orange cookie sugar vanilla cake. Sugar orange muffin sweet cake croissant sprinkles dolor jelly cake",    
            gallery: ["images/donuts/1.jpg", "images/donuts/2.jpg", "images/donuts/3.jpg"]
        }
    ]       //les informations pour changer les éléments dans le html

    if(document.querySelector(".page-item")) {      //si la classe ".page-item" de la page item.html: est trouvé...
        initialiserItem()   //appeler la fonction "initialiserItem()"
    }

   function initialiserItem() {

       var url = window.location.search;    //La variable "url" va chercher tout ce qu'il y a dans les parametres de url (?variable=valeur) ... sert à déterminer dans quel page nous sommes
       console.log(url);
       var params = new URLSearchParams(url);   //transform la chaine de caractere de notre variable url en objet
       console.log(params);

       var type = params.get("type") || 'pizza';    //si il n'y a pas de "type" dans le url, sinon va mettre par défaut "pizza"... type doit être égale au id dans le tableau information
       console.log(type);

       var contenu = informations.find(element => element.id === type);     //la variable contenu va être l"information qui a le même type que le id
       console.log(contenu);


       var title = document.querySelector(".main-title");   //la variable "title" va sélectionner le main title dans le html
       title.innerHTML = contenu.title;     //le contenu du titre sera changé dans le html

       var slogan = document.querySelector(".sub-title");   //la variable "slogan" va sélectionner le slogan dans le html
       slogan.innerHTML = contenu.slogan;   //le contenu du slogan sera changé dans le html

       var desc = document.querySelector(".sub-description p");     //la variable "desc" va sélectionner le p dans la sub-description dans le html
       desc.innerHTML = contenu.description;    //le contenu de la description sera changé dans le html

       var image =document.querySelector(".sub-image img");     //la variable "image" va sélectionner l'image du div sub-image dans le html
       image.src = contenu.image;   //la source de l'image sera changé dans le html

       var list = document.querySelector(".type-list")      //la variable "list" va sélectionner la liste dans le html
       list.innerHTML = "";   // on enleve tous les li par défaut de la liste"";

       for (let i = 0; i < contenu.type.length; i ++) {
           console.log(contenu.type[i]);
           let li = document.createElement("li");   //la variable "li" créer un element appelé "li"
           li.innerHTML = contenu.type[i];  //"li" va ajouter du contenu de "type" dans le html

           list.appendChild(li);    //"list" va ajouter un enfant "li"
       }

       var thumbnails = document.querySelectorAll(".thumb img")     //la variable "thumbnails" va sélectionner tous les images dans les .thumb dans le html
       console.log(thumbnails);
       for (let i = 0; i < thumbnails.length; i++) {
           var thumb = thumbnails[i];   // on créer une variable thumb avec l'image en cours de la boucle
           thumb.src = contenu.gallery[i];  //"thumb" va changer la sources d'images dans le html pour celle du contenu gallery
       }

   }


});