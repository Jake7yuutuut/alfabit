const words1 = [ { "word": "брала", "stress": 2 }, { "word": "бралась", "stress": 2 }, { "word": "взяла", "stress": 2 },{ "word": "взялась", "stress": 2 },{ "word": "влилась", "stress": 2 },{ "word": "ворвалась", "stress": 3 },{ "word": "восприняла", "stress": 4 },{ "word": "воссоздала", "stress": 4 },{ "word": "вручит", "stress": 2 },{ "word": "гнала", "stress": 2 },{ "word": "гналась", "stress": 2 },{ "word": "добрала", "stress": 3 },{ "word": "добралась", "stress": 3 },{ "word": "дождалась", "stress": 3 },{ "word": "дозвонится", "stress": 3 },{ "word": "дозировать", "stress": 2 },{ "word": "ждала", "stress": 2 },{ "word": "жилось", "stress": 2 },{ "word": "закупорить", "stress": 2 },{ "word": "заняла", "stress": 3 },{ "word": "заперла", "stress": 3 },{ "word": "запломбировать", "stress": 5 },{ "word": "защемит", "stress": 3 },{ "word": "звала", "stress": 2 },{ "word": "звонит", "stress": 2 },{ "word": "кашлянуть", "stress": 1 },{ "word": "клала", "stress": 1 },{ "word": "клеить", "stress": 1 },{ "word": "кралась", "stress": 1 },{ "word": "кровоточить", "stress": 4 },{ "word": "лгала", "stress": 2 },{ "word": "лила", "stress": 2 },{ "word": "лилась", "stress": 2 },{ "word": "наврала", "stress": 3 },{ "word": "наделит", "stress": 3 },{ "word": "надорвалась", "stress": 4 },{ "word": "назвалась", "stress": 3 },{ "word": "накренится", "stress": 3 },{ "word": "налила", "stress": 3 },{ "word": "нарвала", "stress": 3 },{ "word": "начала", "stress": 3 },{ "word": "обзвонит", "stress": 3 },{ "word": "облегчит", "stress": 3 },{ "word": "облилась", "stress": 3 },{ "word": "обнялась", "stress": 3 },{ "word": "обогнала", "stress": 4 },{ "word": "ободрала", "stress": 4 },{ "word": "ободрит", "stress": 3 },{ "word": "ободрится", "stress": 3 },{ "word": "обострить", "stress": 3 },{ "word": "одолжит", "stress": 3 },{ "word": "озлобить", "stress": 2 },{ "word": "оклеить", "stress": 2 },{ "word": "окружит", "stress": 3 },{ "word": "опошлить", "stress": 2 },{ "word": "осведомится", "stress": 2 },{ "word": "отбыла", "stress": 3 },{ "word": "отдала", "stress": 3 },{ "word": "откупорить", "stress": 2 },{ "word": "отозвала", "stress": 4 },{ "word": "отозвалась", "stress": 4 },{ "word": "перезвонит", "stress": 4 },{ "word": "перелила", "stress": 4 },{ "word": "плодоносить", "stress": 4 },{ "word": "пломбировать", "stress": 4 },{ "word": "повторит", "stress": 3 },{ word: "аэропорты", stress: 4 }, { word: "банты", stress: 1 }, { word: "бороду", stress: 1 }, { word: "бухгалтеров", stress: 2 }, { word: "вероисповедание", stress: 5 }, { word: "водопровод", stress: 4 }, { word: "газопровод", stress: 4 }, { word: "гражданство", stress: 2 }, { word: "дефис", stress: 2 }, { word: "дешевизна", stress: 3 }, { word: "диспансер", stress: 3 }, { word: "договорённость", stress: 4 }, { word: "документ", stress: 3 }, { word: "досуг", stress: 2 }, { word: "еретик", stress: 3 }, { word: "жалюзи", stress: 3 }, { word: "значимость", stress: 1 }, { word: "иксы", stress: 1 }, { word: "каталог", stress: 3 }, { word: "квартал", stress: 2 }, { word: "километр", stress: 3 }, { word: "конусов", stress: 1 }, { word: "корысть", stress: 2 }, { word: "краны", stress: 1 }, { word: "кремень", stress: 2 }, { word: "лекторов", stress: 1 }, { word: "локтя", stress: 1 }, { word: "лыжня", stress: 2 }, { word: "местностей", stress: 1 }, { word: "намерение", stress: 2 }, { word: "нарост", stress: 2 }, { word: "недруг", stress: 1 }, { word: "недуг", stress: 2 }, { word: "некролог", stress: 3 }, { word: "ненависть", stress: 1 }, { word: "нефтепровод", stress: 4 }, { word: "новостей", stress: 3 }, { word: "ногтя", stress: 1 }, { word: "отзыв (o кaрeтe)", stress: 1 }, { word: "отзыв (пoслa oт стрaн)", stress: 2 }, { word: "отрочество", stress: 1 }, { word: "партер", stress: 2 }, { word: "портфель", stress: 2 }, { word: "поручни", stress: 1 }, { word: "приданое", stress: 2 }, { word: "призыв", stress: 2 }, { word: "свёкла", stress: 1 }, { word: "сироты", stress: 2 }, { word: "созыв", stress: 2 }, { word: "сосредоточение", stress: 4 }, { word: "средства", stress: 1 }, { word: "статуя", stress: 1 }, { word: "столяр", stress: 2 }, { word: "таможня", stress: 2 }, { word: "торты", stress: 1 }, { word: "туфля", stress: 1 }, { word: "цемент", stress: 2 }, { word: "центнер", stress: 1 }, { word: "цепочка", stress: 2 }, { word: "шарфы", stress: 1 }, { word: "шофёр", stress: 2 }, { word: "эксперт", stress: 2 }, { word: "верна", stress: 2 }, { word: "значимый", stress: 1 }, { word: "красивее", stress: 2 }, { word: "кухонный", stress: 1 }, { word: "ловка", stress: 2 }, { word: "мозаичный", stress: 3 }, { word: "оптовый", stress: 2 }, { word: "прозорливый", stress: 3 }, { word: "сливовый", stress: 1 }, { word: "позвонить", stress: 3 }, { word: "полила", stress: 3 }, { word: "положить", stress: 3 }, { word: "положил", stress: 3 }, { word: "понять", stress: 2 }, { word: "поняла", stress: 3 }, { word: "послала", stress: 2 }, { word: "прибыть", stress: 2 }, { word: "прибыл", stress: 1 }, { word: "прибыла", stress: 3 }, { word: "прибыли", stress: 1 }, { word: "принять", stress: 2 }, { word: "принял", stress: 1 }, { word: "приняла", stress: 3 }, { word: "приняли", stress: 1 }, { word: "рвала", stress: 2 }, { word: "сверлит", stress: 2 }, { word: "сняла", stress: 2 }, { word: "соврала", stress: 3 }, { word: "создала", stress: 3 }, { word: "сорвала", stress: 3 }, { word: "сорит", stress: 2 }, { word: "убрала", stress: 3 }, { word: "углубить", stress: 3 }, { word: "укрепит", stress: 3 }, { word: "черпать", stress: 1 }, { word: "щемит", stress: 2 }, { word: "щёлкать", stress: 1 }, { word: "довезённый", stress: 3 }, { word: "загнутый", stress: 1 }, { word: "занятый", stress: 1 }, { word: "занята", stress: 3 }, { word: "запертый", stress: 1 }, { word: "заселённый", stress: 3 }, { word: "заселена", stress: 4 }, { word: "кормящий", stress: 2 }, { word: "кровоточащий", stress: 4 }, { word: "наживший", stress: 2 }, { word: "наливший", stress: 2 }, { word: "нанявшийся", stress: 2 }, { word: "начавший", stress: 2 }, { word: "начатый", stress: 1 }, { word: "низведённый", stress: 3 }, { word: "облегчённый", stress: 3 }, { word: "ободрённый", stress: 3 }, { word: "обострённый", stress: 3 }, { word: "отключённый", stress: 3 }, { word: "повторённый", stress: 3 }, { word: "поделённый", stress: 3 }, { word: "понявший", stress: 2 }, { word: "принятый", stress: 1 }, { word: "принята", stress: 3 }, { word: "приручённый", stress: 3 }, { word: "проживший", stress: 2 }, { word: "снята", stress: 2 }, { word: "снятый", stress: 1 }, { word: "согнутый", stress: 1 }, { word: "углублённый", stress: 3 }, { word: "закупорив", stress: 2 }, { word: "начав", stress: 2 }, { word: "начавшись", stress: 2 }, { word: "отдав", stress: 2 }, { word: "подняв", stress: 2 }, { word: "поняв", stress: 2 }, { word: "прибыв", stress: 2 }, { word: "создав", stress: 2 }, { word: "вовремя", stress: 1 }, { word: "доверху", stress: 1 }, { word: "донельзя", stress: 2 }, { word: "донизу", stress: 1 }, { word: "досуха", stress: 1 }, { word: "засветло", stress: 1 }, { word: "затемно", stress: 1 }, { word: "красивее", stress: 2 }, { word: "надолго", stress: 2 }, { word: "ненадолго", stress: 3 } ];
const vowels = ['а', 'у', 'о', 'ы', 'и', 'э', 'я', 'ю', 'е', 'ё'];
const output = document.getElementById("tek");
const playButton = document.getElementById("play");
const nextbutton = document.getElementById("next");
const stopbutton =document.getElementById("stop");
const againbutton =document.getElementById("again");
const counterDisplay = document.getElementById("counter");
const contbutton =document.getElementById("continue");

let countwords = 1;
let countrightwords = 0;
let words = shufflearray(words1);
let arraywrong =[];

let f=0;
let i = 0;


againbutton.addEventListener("click", () => {
    i=0;
    countwords = 0;
    countrightwords = 0;
    words = shufflearray(words1);
    renderWord();

});    

nextbutton.addEventListener("click", () => {
    i++;
    countwords+=1
    console.log(countwords)
    renderWord();
}); 

stopbutton.addEventListener("click", () => {
    output.textContent = "Тренировка завершена!";
    counterDisplay.textContent = `Правильно: ${countrightwords} из ${countwords}`;
    counterDisplay.style.display = "block";
    playButton.style.display = "none";
    nextbutton.style.display = "none";
    stopbutton.style.display = "none";
    againbutton.style.display = "inline-block";
    againbutton.addEventListener("click", () => {
        i=0;
        f=1;
        countwords = 0;
        countrightwords = 0;
        words =arraywrong.filter((word, index) => arraywrong.indexOf(word) === index);
        arraywrong = [];
        
    
        console.log(words)
        renderWord();
    });
    
        
});

contbutton.addEventListener("click", () => {
    words = shufflearray(words1);
    i=0;
    f=0;
    countwords = 0;
    countrightwords = 0;
    renderWord();
});

function renderWord() {
    
    output.innerHTML = '';
    


    if (i >= words.length && f!=1) {
        output.textContent = "Тренировка завершена!";
        playButton.style.display = "none";
        nextbutton.style.display = "none";
        stopbutton.style.display = "none";
        againbutton.style.display = "inline-block";
        
        return;
    }
    else if (f===1 && countwords===words.length){
        output.textContent = "Вы прошли эти слова заново!";
        playButton.style.display = "none";
        stopbutton.style.display = "none";
        nextbutton.style.display = "none";
        againbutton.style.display = "inline-block";
        contbutton.style.display = "inline-block";
        counterDisplay.style.display = "inline-block";
        counterDisplay.textContent = `Правильно: ${countrightwords} из ${countwords}`;
        
        return;

    }
    else{
        // Очищаем перед добавлением нового слова
        
        playButton.style.display = "none";
        nextbutton.style.display = "none";
        stopbutton.style.display = "none";
        againbutton.style.display = "none";
        contbutton.style.display = "none";
        counterDisplay.style.display = "none";
    }
    let tekword = words[i].word;//получили слово
    let tekstress = words[i].stress;
    let letters = tekword.split('');//разбили на буквы
    let k=0;
    let h=0;

    

    for (let j = 0; j < letters.length; j++) {
        const span = document.createElement("span");
        span.textContent = letters[j];

        // если гласная — добавляем класс
        if (vowels.includes(letters[j])) {
            k+=1;
            const currentVowelIndex = k;  
            const tekword1 = words[i]

            
            span.classList.add("vowel");
            // Добавляем обработчики клика
            span.addEventListener("click", () => {
                arraywrong.push(tekword1)
        
                if (currentVowelIndex===tekstress){

                    if (h===0){
                        countrightwords+=1;
                        console.log(countrightwords)

                    }
                    
                    alert('Правильно!')
                    span.classList.add("wright");

                    // Показать кнопку «Слушать»
                    playButton.style.display = "inline-block";
                    nextbutton.style.display = "inline-block";
                    if (countwords>=5){
                        stopbutton.style.display = "inline-block";
                    }

                    const allSpans = output.querySelectorAll("span");
                    allSpans.forEach(s => {
                        if (s !== span) {
                            s.classList.add("wrong");
                            s.style.pointerEvents = "none"; // отключаем клики
                        }
                    });
                }
                else{
                    h=1
                    
                    alert('Неправильно!')
                    span.classList.add("wrong");
            }
            
        });
    }


    
    output.appendChild(span);
}
// Синтез речи
playButton.addEventListener("click", () => {
    speechSynthesis.cancel(); // Остановить всё, что уже играет
    const utterance = new SpeechSynthesisUtterance(words[i].word);
    utterance.lang = "ru-RU";
    speechSynthesis.speak(utterance);

    // Блокируем кнопку на время
    playButton.disabled = true;
    setTimeout(() => {
        playButton.disabled = false;
    }, 200);
});
}



   

renderWord();

//функция, чтобы перемешать массив
function shufflearray(array){
    for (let i=array.length-1;i>0;i--){//?????
        const j = Math.floor(Math.random()*(i+1));
        [array[i],array[j]]=[array[j],array[i]];

    }
    return array

}

