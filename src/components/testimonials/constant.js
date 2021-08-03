

let card = {

    "card": [
        {
            "title": "Todo List App",
            "text": "Awesome to do list web app.",
            "imgurl": '../../img/nat-8.jpg'

        }
        ,
        {
            "title": "Fun react game",
            "text": "This fun game generates random monster faces.",
            "imgurl": '../../img/nat-9.jpg'


        },
        {
            "title": "Personal CV template",
            "text": "Beautiful yet simple personal CV.",
            "imgurl": '../../img/nat-10.jpg'
        }
    ]
}

let portfolio = [];

for (var i = 0; i < card.card.length; i++) {
    portfolio.push({
        "title": card.card[i].title,
        "text": card.card[i].text,
        "imgurl": card.card[i].imgurl

    });
}

console.log(portfolio);
export { portfolio }
export default card;
