$(document).ready(function() {
    $('.backdrop').insertBefore('#infoBox');


    const photos = [
        "image/lab1.jpeg",
        "image/lab2.jpeg",
        "image/lab3.jpeg",
        "image/lab4.jpeg",
        "image/lab5.jpeg",
        "image/lab6.jpeg",
        "image/lab7.jpeg",
        "image/lab8.jpeg",
        "image/lab9.jpeg",
        "image/lab10.jpeg"
    ];

    const captionTexts = [
        "Happy Pooch", 
        "Playful Partner", 
        "Lazy Day", 
        "Adventurous Spirit", 
        "Best Friend",
        "Ready for Walks",
        "Dreamy Day",
        "Eager Explorer",
        "Posing Perfectly",
        "Ball Chaser"
    ];

    const infoTexts = [
        "This is Max, a playful canine. Max has a cheerful demeanor and gets along well with other dogs. He would be a great addition to any loving family.",
        "Bella is a charming dog with a mischievous side. She loves chasing squirrels in the park and is always up for a game of fetch.",
        "Luna is a calm and reserved dog. She enjoys lazy afternoons and loves basking in the sun. Luna would be a great fit for someone seeking a low-maintenance pet.",
        "Charlie is a bundle of energy. He is always on the move and loves long walks and hiking. Charlie is looking for an active family that can keep up with his energy levels.",
        "Lucy is a loyal and devoted pet. She bonds quickly with her human and is very protective. Lucy needs a home that can provide her with plenty of affection.",
        "Cooper is a young and spirited dog. He's easily trainable and has a knack for learning new tricks. Cooper is looking for a family that can guide him and nurture his talents.",
        "Chloe is a dreamer. She enjoys staring out of the window and watching the world go by. Chloe would be a great fit for a calm and peaceful household.",
        "Buddy is an adventurer. He is curious and loves exploring new places. Buddy is looking for a family that can take him on new adventures and introduce him to the world.",
        "Sadie is a model pet. She is well-behaved, patient, and poses well for pictures. Sadie is looking for a family that can give her the love and attention she deserves.",
        "Rocky is an athlete. He loves running and chasing balls. Rocky is seeking an owner who can provide him with ample physical activity and playtime."
    ];

    var photoGallery = $('#photoGallery');

    for (let i = 0; i < photos.length; i++) {
        let li = $('<li>');
        li.html(`<img src="${photos[i]}" alt="A pet available for adoption">
                <div class="caption">${captionTexts[i]}</div>`);
        li.on('click', function() {
            $('#infoBoxCaption').text(captionTexts[i]);
            $('#infoBoxText').text(infoTexts[i]);
            $('#infoBox').fadeIn();
            $('.backdrop').fadeIn(photos[i]).css('opacity', 0.7);
        });
        photoGallery.append(li);
    }
    $('#infoBoxClose, .backdrop').on('click', function(e) {
        e.preventDefault();
        $('#infoBox').fadeOut();
        $('.backdrop').fadeOut().css('opacity', 0);
    });
});
