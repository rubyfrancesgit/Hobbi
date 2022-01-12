$(document).ready(function(){
    console.log('module');
});

$(document).ready(function(){
    // head
    $('#head').append(
        `
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">

            <!-- google fonts -->
            <link rel="preconnect" href="https://fonts.googleapis.com"> 
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
            <link href="https://fonts.googleapis.com/css2?family=Shrikhand&display=swap" rel="stylesheet">

            <link rel="preconnect" href="https://fonts.googleapis.com"> 
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
            <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400;700&display=swap" rel="stylesheet">

            <title>Hobbi</title> 

            <!-- local css -->
            <link rel="stylesheet" href="./css/style.css">
        `
    )

    // footer
    $('#footer').append(
        `
            <h2 class="footer__h2">Contact</h2>
            <p class="footer__p">hobbi@gmail.com</p>
        `
    )
})