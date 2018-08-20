var url = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?q='
var input = ' ';
var url2 = '&page=1&begin_date=20170101&api-key=38483ac75c664502851e704d12eaeb6a'



function setup() {

    input = select('#ex3');

    button = select('.btn');
    button.mousePressed(newtext);
    reset = select('#reset');
    reset.mousePressed(newSet)

}

function gotData(data) {
    var articles = data.response.docs;

    for (var i = 0; i < articles.length; i++) {
        createDiv(articles[i].headline.main);

        createP(articles[i].snippet);
    }

}

function newtext() {
    input = input.value();

    loadJSON(url + input + url2, gotData);

}

function newSet() {
    window.location.reload(true);

}