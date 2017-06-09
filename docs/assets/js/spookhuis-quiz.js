// Setup your quiz text and questions here

// NOTE: pay attention to commas, IE struggles with those bad boys

var quizJSON = {
    "info": {
        "name":    "Spookhuis Quiz!",
        "main":    "<p>Begin de quiz door op start te klikken</p>",
        "results": "<a class='u-btn-primary u-btn-primary--sml' href='/fun/spookhuis-quiz'>Probeer opnieuw</a> <a class='u-btn-primary u-btn-primary--sml' href='/fun'>Terug naar Fun</a>",
        "level1":  "Bij Ra! Je hebt alle vragen goed! Je hebt het boek supergoed gelezen!",
        "level2":  "Bij Ra! Je hebt 80% tot 90% van de vragen goed. Jij hebt het boek goed gelezen!",
        "level3":  "Bij Ra! Je hebt 60% tot 70% van de vragen goed. Een dikke voldoende!",
        "level4":  "Bij Ra! Je hebt 30% tot 50% van de vragen goed. Dat kan beter… probeer het nog eens!",
        "level5":  "Bij Ra! Je hebt minder dan 3 vragen goed. Ehm… heb je het boek eigenlijk wel gelezen?"
    },
    "questions": [
        {
            "q": "Wat is een faun?",
            "a": [
                {"option": "Een mens met een vissenstaart", "correct": false},
                {"option": "Half mens/half geit", "correct": true},
                {"option": "Half mens/half paard", "correct": false},
                {"option": "Een skelet in linnen lappen", "correct": false} // no comma here
            ]
        },
        
        {
            "q": "Welke kleur heeft Herwalds baard?",
            "a": [
                {"option": "Grijswit", "correct": false},
                {"option": "Grijsbruin", "correct": false},
                {"option": "Oranjebruin", "correct": false},
                {"option": "Zwart", "correct": true} // no comma here
            ]
        },
        
        {
            "q": "Van wel materiaal is de kooi van Dragos?",
            "a": [
                {"option": "Bamboe", "correct": false},
                {"option": "IJzer", "correct": false},
                {"option": "Zilver", "correct": true},
                {"option": "Hout", "correct": false} // no comma here
            ]
        },
        
        {
            "q": "Wat voor instrument bespeelt Eus?",
            "a": [
                {"option": "Blokfluit", "correct": false},
                {"option": "Accordeon", "correct": false},
                {"option": "Panfluit", "correct": true},
                {"option": "Drumstel", "correct": false} // no comma here
            ]
        },
        
        {
            "q": "Waarom zegt Prins Toet nooit ‘ik’?",
            "a": [
                {"option": "Omdat hij stottert", "correct": false},
                {"option": "Omdat farao’s in koninklijk meervoud spreken", "correct": true},
                {"option": "Omdat in het Egyptisch het woord ‘ik’ niet bestaat", "correct": false},
                {"option": "Omdat hij niet meer weet wie hij is", "correct": false} // no comma here
            ]
        },
        
        {
            "q": "Wat voor soep kookt pap?",
            "a": [
                {"option": "Knoflooksoep", "correct": true},
                {"option": "Tomatensoep", "correct": false},
                {"option": "Groentesoep", "correct": false},
                {"option": "Zigeunersoep", "correct": false} // no comma here
            ]
        },
        
        {
            "q": "Hoe klinkt de stem van Eus?",
            "a": [
                {"option": "Zangerig", "correct": true},
                {"option": "Heel hoog", "correct": false},
                {"option": "Slissend", "correct": false},
                {"option": "Mekkerend als een geit", "correct": false} // no comma here
            ]
        },
        
        {
            "q": "Hoeveel ogen heeft de hellehond?",
            "a": [
                {"option": "2", "correct": false},
                {"option": "3", "correct": false},
                {"option": "4", "correct": false},
                {"option": "6", "correct": true} // no comma here
            ]
        },
        
        {
            "q": "Wat wil Herwald over het graf strooien?",
            "a": [
                {"option": "Zout", "correct": false},
                {"option": "Kaas met een laagje smeerworst", "correct": false},
                {"option": "Zombiepoeder", "correct": true},
                {"option": "Knoflookspray", "correct": false} // no comma here
            ]
        },
        
        {
            "q": "Met wat voor dier worstelde de vader van Prins Toet?",
            "a": [
                {"option": "Wolf", "correct": false},
                {"option": "Krokodil", "correct": true},
                {"option": "Beer", "correct": false},
                {"option": "Schorpioen", "correct": false} // no comma here
            ]
        }


    ]
};
