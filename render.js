export var toRender = function display(projectsDisplay){

    let render = projectsDisplay.map(function(item){

        // elementos
        var cardsContainer = document.querySelector('.CardsContainer');
        var cardDiv = document.createElement('div');
        var ancor = document.createElement('a');
        var imgProject = document.createElement('img');
        var descrContainer = document.createElement('div');
        var title = document.createElement('h2');
        var descr = document.createElement('p');

        // adicionando classes

        var cards = cardDiv;
        cards.classList.add('cards');

        var a = ancor;
        a.href = item.href;

        var img = imgProject;
        img.src = item.img;
        img.classList.add('projectImg');
        img.alt = item.title;
        
        descrContainer.classList.add('description');
        var h2 = title;
        h2.classList.add('title-font');
        h2.innerText = item.title;

        var p = descr;
        p.innerText = item.desc;


        // pais e filhos

        cardsContainer.appendChild(cards);
        cards.appendChild(a);
        a.appendChild(img);
        cards.appendChild(descrContainer);
        descrContainer.appendChild(h2);
        descrContainer.appendChild(p);

    })
   
    render()

};