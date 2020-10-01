//Table of Contents
//1. Variables
//2. Functions
//3. Code
$(document).ready(function () {
    //1. Variables

    //2. Functions
    // inserts h3 with id of h3count and adds accusation text
    function addH3(i) {
        var $h3 = $('<h3>', { id: i }).text('Accustation ' + i);
        $('body').append($h3);
    }

    function addClick(i) {
        $('#' + i).on('click', function () {
            alert('test ' + i);
        });
    }

    function addAlert() {
        alert('Test');
    }

    for (var i = 1; i <= 100; i++) {
        addH3(i);
        addClick(i);
    }
});
