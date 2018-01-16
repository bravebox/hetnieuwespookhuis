// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Transsylvanië quiz!",
        "main":    "<p>Begin de quiz door op start te klikken</p>",
        "results": "<a class='u-btn-primary u-btn-primary--sml' href='/fun/spookhuis-quiz'>Probeer opnieuw</a> <a class='u-btn-primary u-btn-primary--sml' href='/fun'>Terug naar Fun</a>",
        "level1":  "Sssso hé! Jij hebt het boek ssssupergoed gelezen! Durf je ook de moeilijke quissss te doen?",
        "level2":  "Sssso hé! Wat een goede sssscore! Durf je ook de moeilijke quissss te doen?",
        "level3":  "Sssso hé! Dat issss geen sssslechte sssscore!",
        "level4":  "Hm… Dat kan beter… probeer het nog eenssss!",
        "level5":  "Ehm… heb je De Transsylvanië Express eigenlijk wel gelezen?"
    },
    "questions": [
        {
            "q": "Waarom wil Dragos terug naar Transsylvanië?",
            "a": [
                {"option": "Hij mist zijn ouders", "correct": false},
                {"option": "Hij wil graaf Dracula verslaan", "correct": false},
                {"option": "Hij is bang dat graaf Dracula zijn ouders gestraft heeft", "correct": true},
                {"option": "Hij heeft heimwee", "correct": false}
            ]
        },
        {
            "q": "Welke van deze strijders zijn vampiers?",
            "a": [
                {"option": "Alicia en Lucian", "correct": false},
                {"option": "Tomi en Alicia", "correct": false},
                {"option": "Alicia, Tomi en Lucian", "correct": false},
                {"option": "Lucian en Tomi", "correct": true}
            ]
        },
        {
            "q": "Wat zit er in de vierkante kisten in de trein?",
            "a": [
                {"option": "Doodskisten met vampiers", "correct": false},
                {"option": "Flessen bloed", "correct": true},
                {"option": "Houten staken", "correct": false},
                {"option": "Ratten", "correct": false}
            ]
        },
        {
            "q": "Hoe heet de leider van het Verzet?",
            "a": [
                {"option": "Lucian", "correct": false},
                {"option": "Nikolai", "correct": true},
                {"option": "Gavril", "correct": false},
                {"option": "Costin", "correct": false}
            ]
        },
        {
            "q": "Hoe ontsnapt de hellehond van de trein?",
            "a": [
                {"option": "Hij springt door een gat in de vloer", "correct": true},
                {"option": "Hij springt door de schuifdeur", "correct": false},
                {"option": "Hij klimt via het luik naar boven en springt van het dak", "correct": false},
                {"option": "Hij verstopt zich en wacht tot de trein bij het station is", "correct": false}
            ]
        },
        {
            "q": "Hoe kom je in het hoofdkwartier onder de tandenstokerfabriek?",
            "a": [
                {"option": "Met de goederenlift in het magazijn", "correct": false},
                {"option": "Via een tunnel achter een berg oude pallets", "correct": false},
                {"option": "Door een luik in de garage", "correct": false},
                {"option": "Via een verroeste machine die weg kan klappen", "correct": true}
            ]
        },
        {
            "q": "Wat is Tomi’s functie binnen het Verzet?",
            "a": [
                {"option": "Ze is de zwaardvechttrainer", "correct": false},
                {"option": "Ze is een spion", "correct": true},
                {"option": "Ze geeft les op de kinderafdeling", "correct": false},
                {"option": "Ze bedenkt alle plannen", "correct": false}
            ]
        },
        {
            "q": "Wat is de bovenste ruimte van het hoofdkwartier?",
            "a": [
                {"option": "De woonkamer", "correct": false},
                {"option": "De strategiekamer", "correct": false},
                {"option": "De wapenkamer", "correct": true},
                {"option": "De trainingsruimte", "correct": false}
            ]
        },
        {
            "q": "Waarom mogen de bewoners van het hoofdkwartier niet naar buiten?",
            "a": [
                {"option": "Buiten zijn weerwolven en dierwolven", "correct": false},
                {"option": "Ze moeten vierentwintig uur per dag trainen", "correct": false},
                {"option": "Nikolai vertrouwt hen niet", "correct": false},
                {"option": "Het is te gevaarlijk dat iemand hen ziet", "correct": true}
            ]
        },
        {
            "q": "Waar wordt Dragos gevangengehouden?",
            "a": [
                {"option": "In een gevangenistoren in het bos", "correct": true},
                {"option": "In een bungelende kooi in het kasteel van de graaf", "correct": false},
                {"option": "In een martelkamer", "correct": false},
                {"option": "In de stal van een boerderij", "correct": false}
            ]
        }
    ]
};