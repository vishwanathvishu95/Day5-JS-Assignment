var quote=document.getElementById('btn');

function generateQuote(){
    var quotes=[
        'Your limitation—it’s only your imagination.',
        'Push yourself, because no one else is going to do it for you.',
        'Sometimes later becomes never. Do it now.',
        'Great things never come from comfort zones.',
        'Dream it. Wish it. Do it.',
        'Success doesn’t just find you. You have to go out and get it.',
        ' The harder you work for something, the greater you’ll feel when you achieve it.',
        'Don’t stop when you’re tired. Stop when you’re done.',
        'Work hard and party harder',
        "Do or Die"
        
    ];
    var s=Math.floor((Math.random()*10));
    console.log(s);
    var q=quotes[s];

    document.getElementById('text').textContent=q;

}
quote.onclick=generateQuote;