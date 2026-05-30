async function loadNews(){

    const response = await fetch('news.json');
    const news = await response.json();

    news.sort((a,b)=>
        new Date(b.date)-new Date(a.date)
    );

    const container = document.getElementById('news-feed');

    news.forEach(item=>{

        const card = document.createElement('article');

        card.className='news-card';

        card.innerHTML=`
            <img src="IMG/${item.id}.png" alt="${item.title}">

            <div class="news-content">

                <span class="news-date">
                    ${item.date}
                </span>

                <h2>
                    ${item.title}
                </h2>

                <p>
                    ${item.description}
                </p>

            </div>
        `;

        container.appendChild(card);

    });

}

loadNews();
