$(document).ready(function () {
    renderCurrentTime()
    renderQuote()
});

//현재 시간
function renderCurrentTime() {
    let url = `https://worldtimeapi.org/api/timezone/Asia/Seoul`
    fetch(url)
        .then(res => res.json()).then((data) => {
            let datetime = data['datetime'].substr(11,5)
            $('#currentTime').text(datetime)
        })
}

// 명언
function renderQuote() {
    let url = `https://api.quotable.io/random`
    fetch(url)
        .then(res => res.json()).then((data) => {
            let content = `" ${data['content']} "`
            let author = `- ${data['author']} -`
            $('#quoteContent').text(content)
            $('#quoteAuthor').text(author)
        })
}