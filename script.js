//Table of Contents
//1. Variables
//2. Functions
//3. Code
$(document).ready(function () {
    //1. Variables
    var friends = ['Nikki', 'Mel', 'Matt', 'Joe', 'Jeff'];
    var locations = [
        'Airplane Toilet',
        'Everest',
        'Oz',
        'Bathtub',
        'Sparta',
        'Eiffel Tower',
        'Venice',
        'Mariana Trench',
        'International Space Station',
        'Hammam',
    ];
    var weapons = [
        'Death Star',
        'Mace',
        'AK47',
        'Sword',
        'Glock',
        'Bat',
        'Broken Beer Bottle',
        'Sharks with laser beams',
        'Wookie',
        'Dog',
        'Knife',
        'Anvil',
        'Laser',
        'bomb',
        'spoon',
        'TV',
        'razer blade',
        'Airplane',
        'Bear',
        'Fist of Doom',
    ];

    //2. Functions

    // inserts h3 with id of i and adds accusation text
    function addH3(i) {
        var $h3 = $('<h3>', { id: i }).text('Accustation ' + i);
        $('body').append($h3);
    }

    // Adds alert by clicking to h3
    function addClick(i) {
        $('#' + i).on('click', function () {
            alert(
                'I accuse ' +
                    friends[i % 5] +
                    ', with the ' +
                    weapons[i % 20] +
                    ' in the ' +
                    locations[i % 10]
            );
        });
    }

    //3. Code

    // Creates Accusations 1 - 100 and adds alert
    for (var i = 1; i <= 100; i++) {
        addH3(i);
        addClick(i);
    }
});
