// A personality quiz

var prompts = [
    {
        prompt: '1. … is reserved',
        trait: "Extraversion",
        class: 'group0',
        prompt_values :[
            {
                value: 'Strongly Agree', 
                class: 'btn-default btn-strongly-agree',
                weight: 1
            },
            {
                value: 'Agree',
                class: 'btn-default btn-agree',
                weight: 2,
            },
            {
                value: 'Neutral', 
                class: 'btn-default',
                weight: 3
            },
            {
                value: 'Disagree',
                class: 'btn-default btn-disagree',
                weight: 4
            },
            { 
                value: 'Strongly Disagree',
                class: 'btn-default btn-strongly-disagree',
                weight: 5
            }
        ]
    },
    {
        prompt: '2. … is generally trusting',
        trait: "Agreeableness",
        class: 'group1',
        prompt_values :[
            {
                value: 'Strongly Agree', 
                class: 'btn-default btn-strongly-agree',
                weight: 5 
            },
            {
                value: 'Agree',
                class: 'btn-default btn-agree',
                weight: 4,
            },
            {
                value: 'Neutral', 
                class: 'btn-default',
                weight: 3
            },
            {
                value: 'Disagree',
                class: 'btn-default btn-disagree',
                weight: 2
            },
            { 
                value: 'Strongly Disagree',
                class: 'btn-default btn-strongly-disagree',
                weight: 1
            }
        ]
    },
    {
        prompt: '3. … tends to be lazy',
        trait: "Conscientiousness",
        class: 'group2',
        prompt_values :[
            {
                value: 'Strongly Agree', 
                class: 'btn-default btn-strongly-agree',
                weight: 1
            },
            {
                value: 'Agree',
                class: 'btn-default btn-agree',
                weight: 2
            },
            {
                value: 'Neutral', 
                class: 'btn-default',
                weight: 3
            },
            {
                value: 'Disagree',
                class: 'btn-default btn-disagree',
                weight: 4
            },
            { 
                value: 'Strongly Disagree',
                class: 'btn-default btn-strongly-disagree',
                weight: 5
            }
        ]
    },
    {
        prompt: '4. … is relaxed, handles stress well',
        trait: "Neuroticism",
        class: 'group3',
        prompt_values :[
            {
                value: 'Strongly Agree', 
                class: 'btn-default btn-strongly-agree',
                weight: 1
            },
            {
                value: 'Agree',
                class: 'btn-default btn-agree',
                weight: 2,
            },
            {
                value: 'Neutral', 
                class: 'btn-default',
                weight: 3
            },
            {
                value: 'Disagree',
                class: 'btn-default btn-disagree',
                weight: 4
            },
            { 
                value: 'Strongly Disagree',
                class: 'btn-default btn-strongly-disagree',
                weight: 5
            }
        ]
    },
    {
        prompt: '5. … has few artistic interests',
        trait: "Openness to Experience",
        class: 'group4',
        prompt_values :[
            {
                value: 'Strongly Agree', 
                class: 'btn-default btn-strongly-agree',
                weight: 1
            },
            {
                value: 'Agree',
                class: 'btn-default btn-agree',
                weight: 2,
            },
            {
                value: 'Neutral', 
                class: 'btn-default',
                weight: 3
            },
            {
                value: 'Disagree',
                class: 'btn-default btn-disagree',
                weight: 4
            },
            { 
                value: 'Strongly Disagree',
                class: 'btn-default btn-strongly-disagree',
                weight: 5
            }
        ]
    },
    {
        prompt: '6. … is outgoing, sociable',
        trait: "Extraversion",
        class: 'group5',
        prompt_values :[
            {
                value: 'Strongly Agree', 
                class: 'btn-default btn-strongly-agree',
                weight: 5
            },
            {
                value: 'Agree',
                class: 'btn-default btn-agree',
                weight: 4
            },
            {
                value: 'Neutral', 
                class: 'btn-default',
                weight: 3
            },
            {
                value: 'Disagree',
                class: 'btn-default btn-disagree',
                weight: 2
            },
            { 
                value: 'Strongly Disagree',
                class: 'btn-default btn-strongly-disagree',
                weight: 1
            }
        ]
    },
    {
        prompt: '7. … tends to find fault with others',
        trait: "Agreeableness",
        class: 'group6',
        prompt_values :[
            {
                value: 'Strongly Agree', 
                class: 'btn-default btn-strongly-agree',
                weight: 1
            },
            {
                value: 'Agree',
                class: 'btn-default btn-agree',
                weight: 2
            },
            {
                value: 'Neutral', 
                class: 'btn-default',
                weight: 3
            },
            {
                value: 'Disagree',
                class: 'btn-default btn-disagree',
                weight: 4
            },
            { 
                value: 'Strongly Disagree',
                class: 'btn-default btn-strongly-disagree',
                weight: 5
            }
        ]
    },
    {
        prompt: '8. … does a thorough job',
        trait: "Conscientiousness",
        class: 'group7',
        prompt_values :[
            {
                value: 'Strongly Agree', 
                class: 'btn-default btn-strongly-agree',
                weight: 5
            },
            {
                value: 'Agree',
                class: 'btn-default btn-agree',
                weight: 4,
            },
            {
                value: 'Neutral', 
                class: 'btn-default',
                weight: 3
            },
            {
                value: 'Disagree',
                class: 'btn-default btn-disagree',
                weight: 2
            },
            { 
                value: 'Strongly Disagree',
                class: 'btn-default btn-strongly-disagree',
                weight: 1
            }
        ]
    },
    {
        prompt: '9. … gets nervous easily',
        trait: "Neuroticism",
        class: 'group8',
        prompt_values :[
            {
                value: 'Strongly Agree', 
                class: 'btn-default btn-strongly-agree',
                weight: 5
            },
            {
                value: 'Agree',
                class: 'btn-default btn-agree',
                weight: 4,
            },
            {
                value: 'Neutral', 
                class: 'btn-default',
                weight: 3
            },
            {
                value: 'Disagree',
                class: 'btn-default btn-disagree',
                weight: 2
            },
            { 
                value: 'Strongly Disagree',
                class: 'btn-default btn-strongly-disagree',
                weight: 1
            }
        ]
    },
    {
        prompt: '10. … has an active imagination',
        trait: "Openness to Experience",
        class: 'group9',
        prompt_values :[
            {
                value: 'Strongly Agree', 
                class: 'btn-default btn-strongly-agree',
                weight: 5
            },
            {
                value: 'Agree',
                class: 'btn-default btn-agree',
                weight: 4,
            },
            {
                value: 'Neutral', 
                class: 'btn-default',
                weight: 3
            },
            {
                value: 'Disagree',
                class: 'btn-default btn-disagree',
                weight: 2
            },
            { 
                value: 'Strongly Disagree',
                class: 'btn-default btn-strongly-disagree',
                weight: 1
            }
        ]
    }]
    
    // For each prompt, create a a p tag to hold questions
    function createPromptItems() {
        for (var i = 0; i < prompts.length; i++) {
            var inputlVal = prompts[i].prompt;
            var promptsVals = prompts[0].prompt_values;
            $("#quiz").append(`<p>${inputlVal}</p>`);

            for (var x=0; x < promptsVals.length; x++) {
                console.log("loop hit")
                console.log(promptsVals)
                var radioVal = prompts[i].prompt_values[x].value;
                console.log(radioVal)
                var inputGroup = "group" + i;
                $('#quiz').append(`<li><label>
                <input name="${inputGroup}" type="radio"/>
                <span>${radioVal}</span>
              </label></li>`)
            }
        }
    }
    
    createPromptItems();
    
    // Keep a running total of the values they have selected. If the total is negative, the user is introverted. If positive, user is extroverted.
    // Calculation will sum all of the answers to the prompts using weight of the value * the weight of the prompt.
    
    
    // Get the weight associated to group number
    function findPromptWeight(prompts, group) {
        var weight = 0;
    
        for (var i = 0; i < prompts.length; i++) {
            if (prompts[i].class === group) {
                weight = prompts[i].weight;
            }
        }
    
        return weight;
    }
    
    // Get the weight associated to the value
    function findValueWeight(values, value) {
        var weight = 0;
    
        for (var i = 0; i < values.length; i++) {
            if (values[i].value === value) {
                weight = values[i].weight;
            }
        }
        return weight;
    }
    
    // When user clicks a value to agree/disagree with the prompt, display to the user what they selected
    $(document).on("click", ".value-btn", function () {
        var classList = $(this).attr('class');
        // console.log(classList);
        var classArr = classList.split(" ");
        // console.log(classArr);
        var this_group = classArr[0];
        // console.log(this_group);
    
        // If button is already selected, de-select it when clicked and subtract any previously added values to the total
        // Otherwise, de-select any selected buttons in group and select the one just clicked
        // And subtract deselected weighted value and add the newly selected weighted value to the total
        if($(this).hasClass('active')) {
            $(this).removeClass('active');
            total += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
        } else {
            // $('[class='thisgroup).prop('checked', false);
            total += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $('.'+this_group+'.active').text()));
            // console.log($('.'+this_group+'.active').text());
            $('.'+this_group).removeClass('active');
    
            // console.log('group' + findValueWeight(prompt_values, $('.'+this_group).text()));
            // $(this).prop('checked', true);
            $(this).addClass('active');
            total += (findPromptWeight(prompts, this_group) * findValueWeight(prompt_values, $(this).text()));
        }
    
        console.log(total);
    })
    
    
    
    $(document).on("click", "#submit-btn", function () {
        // After clicking submit, add up the totals from answers
        // For each group, find the value that is active
        $('.results').removeClass('hide');
        $('.results').addClass('show');
        
        if(total < 0) {
            // document.getElementById('intro-bar').style.width = ((total / 60) * 100) + '%';
            // console.log(document.getElementById('intro-bar').style.width);
            // document.getElementById('intro-bar').innerHTML= ((total / 60) * 100) + '%';
            document.getElementById('results').innerHTML = '<b>You are introverted!</b><br><br>\
            Introverts are tricky to understand, since it’s so easy for us to assume that introversion is the same as being shy, when, in fact, introverts are simply people who find it tiring to be around other people.\n\
    <br><br>\
    I love this explanation of an introvert’s need to be alone:\n\
    <br><br>\
    For introverts, to be alone with their thoughts is as restorative as sleeping, as nourishing as eating.\n\n\
    <br><br>\
    Introverted people are known for thinking things through before they speak, enjoying small, close groups of friends and one-on-one time, needing time alone to recharge, and being upset by unexpected changes or last-minute surprises. Introverts are not necessarily shy and may not even avoid social situations, but they will definitely need some time alone or just with close friends or family after spending time in a big crowd.\
            ';
        } else if(total > 0) {
            document.getElementById('results').innerHTML = '<b>You are extroverted!</b><br><br>\
            On the opposite side of the coin, people who are extroverted are energized by people. They usually enjoy spending time with others, as this is how they recharge from time spent alone focusing or working hard.\
    <br><br>\
    I like how this extrovert explains the way he/she gains energy from being around other people:\
    <br><br>\
    When I am among people, I make eye contact, smile, maybe chat if there’s an opportunity (like being stuck in a long grocery store line). As an extrovert, that’s a small ‘ping’ of energy, a little positive moment in the day.';
        } else {
            document.getElementById('results').innerHTML = '<b>You are ambiverted!</b><br><br>\
            Since introverts and extroverts are the extremes of the scale, the rest of us fall somewhere in the middle. Many of us lean one way or the other, but there are some who are quite balanced between the two tendencies. These people are called ambiverts.\
    <br><br>\
    So let’s look at how an ambivert compares.\
    <br><br>\
    Ambiverts exhibit both extroverted and introverted tendencies. This means that they generally enjoy being around people, but after a long time this will start to drain them. Similarly, they enjoy solitude and quiet, but not for too long. Ambiverts recharge their energy levels with a mixture of social interaction and alone time.'
        }
    
        // Hide the quiz after they submit their results
        $('#quiz').hide();
        $('#submit-btn').hide();
        $('#retake-btn').removeClass('hide');
    })
    
    // Refresh the screen to show a new quiz if they click the retake quiz button
    $('#retake-btn').click(function () {
        $('#quiz').removeClass('hide');
        $('#submit-btn').removeClass('hide');
        $('#retake-btn').addClass('hide');
    
        $('.results').addClass('hide');
        $('.results').removeClass('show');
    })