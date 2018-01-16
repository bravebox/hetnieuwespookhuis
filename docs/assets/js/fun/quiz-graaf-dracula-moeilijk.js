// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Graaf Dracula quiz!",
        "main":    "<p>Begin de quiz door op start te klikken</p>",
        "results": "<a class='u-btn-primary u-btn-primary--sml' href='/fun/spookhuis-quiz'>Probeer opnieuw</a> <a class='u-btn-primary u-btn-primary--sml' href='/fun'>Terug naar Fun</a>",
        "level1":  "Wo! Jij weet echt alles over graaf Dracula! Ben jij soms zelf een vampier?",
        "level2":  "Zo hé, jij weet echt veel over graaf Dracula! Jij hebt vast knoflook voor je raam hangen!",
        "level3":  "Zo hé, jij weet veel over graaf Dracula! Jij hebt vast knoflook voor je raam hangen!",
        "level4":  "Goed gedaan! Jij weet heel wat over graaf Dracula!",
        "level5":  "Oei, jij weet niet veel over graaf Dracula. Misschien is het maar beter als je niet naar Transsylvanië op vakantie gaat…"
    },
    "questions": [
        {
            "q": "Wat is de voornaam van graaf Dracula?",
            "a": [
                {"option": "Vampirus", "correct": false},
                {"option": "Dragomir", "correct": false},
                {"option": "Vlad de Tweede", "correct": false},
                {"option": "Vlad de Derde", "correct": true}
            ]
        },
        {
            "q": "In welk jaar werd graaf Dracula geboren?",
            "a": [
                {"option": "1372", "correct": false},
                {"option": "1431", "correct": true},
                {"option": "1558", "correct": false},
                {"option": "1872", "correct": false}
            ]
        },
        {
            "q": "Door wie werd graaf Dracula als kind gevangengehouden?",
            "a": [
                {"option": "De Saksen", "correct": false},
                {"option": "De Ottomanen", "correct": true},
                {"option": "De vampiers", "correct": false},
                {"option": "De Walachen", "correct": false}
            ]
        },
        {
            "q": "Hoe communiceerde graaf Dracula als kind met vleermuizen?",
            "a": [
                {"option": "Met een fluitje", "correct": true},
                {"option": "Met sisgeluiden", "correct": false},
                {"option": "Met gebaren", "correct": false},
                {"option": "Door te klakken met zijn tong", "correct": false}                
            ]
        },
        {
            "q": "Hoe is Dracula een vampier geworden?",
            "a": [
                {"option": "Hij is gebeten door een andere vampier", "correct": false},
                {"option": "Door een mislukt experiment van dokter Frankenstein", "correct": false},
                {"option": "Hij liet zijn bloed drinken door vleermuizen en is daarna vermoord", "correct": true},
                {"option": "Hij is gebeten door een vleermuiswolf", "correct": false}                
            ]
        },
        {
            "q": "Hoe oud was graaf Dracula toen hij een vampier werd?",
            "a": [
                {"option": "30", "correct": false},
                {"option": "35", "correct": false},
                {"option": "40", "correct": false},
                {"option": "45", "correct": true}
            ]
        },
        {
            "q": "Waar staat het kasteel van graaf Dracula?",
            "a": [
                {"option": "In de bossen van Transsylvanië", "correct": false},
                {"option": "In de bergen van Transsylvanië", "correct": false},
                {"option": "In het gebergte tussen Transsylvanië en Walachije", "correct": true},
                {"option": "In Schotland", "correct": false}                
            ]
        },
        {
            "q": "Hoeveel echtgenotes heeft graaf Dracula?",
            "a": [
                {"option": "3", "correct": false},
                {"option": "5", "correct": false},
                {"option": "12", "correct": true},
                {"option": "13", "correct": false}                
            ]
        },
        {
            "q": "Hoe ziet graaf Dracula eruit?",
            "a": [
                {"option": "Lang, bleek, streng, rode ogen en een snor", "correct": true},
                {"option": "Lang, bleek, streng, rode ogen en een ringbaardje", "correct": false},
                {"option": "Lang, bleek, streng, groene ogen en glad geschoren", "correct": false},
                {"option": "Lang, bleek, streng, rode ogen en glad geschoren", "correct": false}                
            ]
        },
        {
            "q": "Hoelang heerst graaf Dracula al over Transsylvanië?",
            "a": [
                {"option": "50 jaar", "correct": false},
                {"option": "150 jaar", "correct": false},
                {"option": "500 jaar", "correct": true},
                {"option": "Meer dan 500 jaar", "correct": false}                
            ]
        }
    ]
};