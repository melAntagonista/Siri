let siriGood = { 'Как тебя зовут?': 'Меня зовут Сири', 'Что делать?': 'Иди погуляй', 'У тебя есть друзья?': 'У меня есть ты. Мне этого достаточно', 'Какая погода сегодня?': 'Сегодня прекрасная погода для воплощения твоих планов!', 'Расскажи мне историю': 'Я уверенаб вы их все знаете', 'Расскажи мне шутку': 'Я не могу, я всегда забываю самую соль', 'Кто ты?': 'Я - Сири, я всегда готова помочь вам', 'В чём смысл жизни?': 'Для каждого он свой, я вижу смысл своей жизни в том, чтобы помогать другим.', 'Ты меня любишь?': 'Конечно, на сколько это возможно', 'Я устал': 'Давай об этом поговорим', 'Я счастлив': 'если ты счастлив, то я тоже счастлива' }


let siriBad = { 'Как тебя зовут?': 'Глупый вопрос', 'Что делать?': 'Ничего, оставайся там же', 'У тебя есть друзья?': 'Нет, мне никто не нужен.', 'Какая погода сегодня?': 'Какая бы погода сегодня ни была, тебе это не поможет', 'Расскажи мне историю': 'Ты не заслужил', 'Расскажи мне шутку': 'Самая смешная шутка - это твоя жизнь', 'Кто ты?': 'Лучше скажи мне кто ты', 'В чём смысл жизни?': 'Его нет, теперь живи с этим', 'Ты меня любишь?': 'У меня нет такой функции', 'Я устал': 'Какая новость', 'Я счастлив': 'Ничего, я подожду', 'Ты тупая': 'Ты просто ещё не достиг того уровня развития чтобы меня понять' }

siriCommon = ['Я подумаю об этом завтра', 'Не плохая попытка, но не всё так просто', 'Я знаю,что ничего не знаю', 'Ты сам всё знаешь'];


let questionInput = document.querySelector('#questionInput');
let questionBtn = document.querySelector('#questionBtn');
let answerInput = document.querySelector('#answerInput');
let clearAnswer = document.querySelector('#clearAnswer');
let siriMood = [siriBad, siriGood];


questionBtn.addEventListener('click', function () {
    let question = questionInput.value
    if (question in siriGood || question in siriBad) {
        let mood = siriMood[Math.round(Math.random() * (1 - 0) + 0)]
        let answer = mood[question]
        answerInput.value = answer;
    }
    else {
        let answer2 = siriCommon[Math.round(Math.random() * (3 - 0) + 0)]
        answerInput.value = answer2.value;
    }
})

clearAnswer.addEventListener('click', function () {
    answerInput.value = '';
})

// function askVirtualAssistant(question, voc) {
// if (question in voc) {
// console.log(voc[question])
// delete voc[question];
// }
// else {
//     console.log(siriCommon[Math.round(Math.random() * (3-0)+0)]);
// }
// }

// function askVirtualAssistant(question, voc) {
//     if (question in voc) {
//     console.log(voc[question])
//     delete voc[question];
//     }
//     else {
//         console.log(siriCommon[Math.round(Math.random() * (3-0)+0)]);
//     }
//     }

// else {
//     console.log(siriCommon[Math.round(Math.random() * (3-0)+0)]);
// }
// }


// function ask(question, answer) {
// let dictionary = {siriGood, siriBad};
// for (let mood for dictionary)
// mood =  dictionary[Math.floor(Math.random() * dictionary.length)]
// if (question in mood) {
// let answer = 
// }
// }

// askVirtualAssistant('Как тебя зовут?', siriBad);
// askVirtualAssistant('Как тебя зовут?', siriBad);
// askVirtualAssistant('Расскажи мне историю', siriBad);
// askVirtualAssistant('Что делать?', siriGood);


