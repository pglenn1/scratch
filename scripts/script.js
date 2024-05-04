$(document).ready(function() {
    // Load NATO phonetic alphabet from JSON file
    $.getJSON('NATO.json', function(data) {
        var natoPhonetic = data;

        // Phonetic alphabets
        var civilianPhonetic = {
            'A': 'Adam',
            'B': 'Boy',
            'C': 'Car',
            'D': 'Dog',
            'E': 'Edward',
            'F': 'Frank',
            'G': 'George',
            'H': 'Henry',
            'I': 'Ida',
            'J': 'John',
            'K': 'King',
            'L': 'Lime',
            'M': 'Mary',
            'N': 'Neck',
            'O': 'Ocean',
            'P': 'Paul',
            'Q': 'Queen',
            'R': 'Rome',
            'S': 'Sam',
            'T': 'Tom',
            'U': 'Union',
            'V': 'Van',
            'W': 'Will',
            'X': 'X-ray',
            'Y': 'Young',
            'Z': 'Zebra',
            ' ': ' ',
            ',': ',',
            '.': '.',
            '!': '!'
        };

        var developerMode = {
            '.': 'Dot',
            '!': 'Bang',
            '*': 'Splat',
            ' ': ' '
        };

        var currentPhonetic = civilianPhonetic;

        // Function to convert text to phonetic
        function convertToPhonetic(text, phonetic) {
            var result = '';
            for (var i = 0; i < text.length; i++) {
                var char = text.charAt(i).toUpperCase();
                if (phonetic[char]) {
                    result += phonetic[char] + ' ';
                } else {
                    result += char + ' (Unknown) ';
                }
            }
            return result.trim();
        }

        // Event listener for input event on text input
        $('#textInput').on('input', function() {
            var inputText = $(this).val().trim();
            var output = convertToPhonetic(inputText, currentPhonetic);
            $('#outputList').empty();
            $('#outputList').append('<li class="list-group-item">' + output + '</li>');
        });

        // Event listener for clear button
        $('#clearBtn').click(function() {
            $('#textInput').val('');
            $('#outputList').empty();
        });

        // Event listener for mode selection
        $('#civilianMode').click(function(e) {
            e.preventDefault();
            currentPhonetic = civilianPhonetic;
            $('#toggleBtn').text('Civilian Phonetic Alphabet');
        });

        $('#natoMode').click(function(e) {
            e.preventDefault();
            currentPhonetic = natoPhonetic;
            $('#toggleBtn').text('NATO Phonetic Alphabet');
        });

        $('#developerMode').click(function(e) {
            e.preventDefault();
            currentPhonetic = developerMode;
            $('#toggleBtn').text('Developer Mode');
        });
    });
});
