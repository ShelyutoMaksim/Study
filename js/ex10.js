'use strict'

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        let b = plan.skills.languages.join(` `).toUpperCase()
        return `Мне ${plan.age} и я владею языками: ${b} `
    }
};

function showExperience(plan) {
    return plan.skills.exp
}


function showProgrammingLangs(plan) {
    let b = ``;
    for (let lang in plan.skills.programmingLangs) {
        b += `Язык ${lang} изучен на ${plan.skills.programmingLangs[lang]}\n`
    }
    return b;
}
