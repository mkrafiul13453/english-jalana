const loadLesson = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((json) => displayLesson(json.data))
};

const loadLevelWord = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`;
    fetch(url)
    .then((res) => res.json())
    .then((data) => displayLevelWord(data.data))
};

// {
//     "id": 76,
//         "level": 1,
//             "word": "Fast",
//                 "meaning": "দ্রুত",
//                     "pronunciation": "ফাস্ট"
// }
const displayLevelWord = (words) =>{
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML="";

    if(words.length == 0){
        wordContainer.innerHTML = `
        <div class=" text-center col-span-full  py-10 rounded-xl space-y-5 font-bangla">
        <img class="mx-auto" src="./assets/alert-error.png" alt="">
            <p class="text-xl font-medium text-gray-600">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
            <h2 class="font-bold text-4xl">নেক্সট Lesson এ যান</h2>
        </div>
        `;
    }

    words.forEach(word => {
        console.log(word)
        const card = document.createElement("div");
        card.innerHTML=`
        <div class="bg-white rounded-xl shadow-sm text-center py-10 px-5 space-y-4">
            <h2 class="font-bold text-2xl">${word.word ? word.word :"শব্দ পাওয়া জায়নি"}</h2>
            <p class="font-semibold">Meaning /Pronounciation</p>
            <div class="text-2xl font-medium font-bangla">"${word.meaning ? word.meaning : "অর্থ পাওয়া জায়নি"} / ${word.pronunciation ? word.pronunciation :"Pronunciation পাওয়া জায়নি"}"</div>
            <div class="flex justify-between items-center">
                <button class="btn bg-gray-100 hover:bg-gray-300"><i class="fa-solid fa-circle-info "></i></button>
                <button class="btn bg-gray-100 hover:bg-gray-300"><i class="fa-solid fa-volume-high "></i></button>
            </div>
        </div>
        `;
        wordContainer.append(card);
    });
}

const displayLesson = (lessons) => {
    const levelContainer = document.getElementById("level-container");
    levelContainer.innerHTML="";
    for(let lesson of lessons){
        
        const btnDiv = document.createElement("div");
        btnDiv.innerHTML=`
        <button onclick="loadLevelWord(${lesson.level_no})" href="" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson - ${lesson.level_no}</button>
        `
        levelContainer.append(btnDiv);
    };
};

loadLesson();