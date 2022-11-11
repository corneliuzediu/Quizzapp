let questions = [
    {
        "question": "Which country has the largest population in the world?",
        "answer_1": "USA",
        "answer_2": "Brazil",
        "answer_3": "China",
        "answer_4": "India",
        "right_answer": 3
    },
    {
        "question": "Which city is the Capital of Romania?",
        "answer_1": "Budapest",
        "answer_2": "Bucarest",
        "answer_3": "Bratislava",
        "answer_4": "Cluj-Napoca",
        "right_answer": 2
    },
    {
        "question": "Which are the colors of the German flag?",
        "answer_1": "Black, Red, Yellow",
        "answer_2": "Black, Red, Mandarin",
        "answer_3": "Black, Red, Orange",
        "answer_4": "Black, Red, Gold",
        "right_answer": 4
    },
    {
        "question": "The second smallest country in the world is?",
        "answer_1": "Vatican",
        "answer_2": "San Marino",
        "answer_3": "Monaco",
        "answer_4": "Nauru",
        "right_answer": 3
    },
    {
        "question": "Which is the city with the highest population in the world?",
        "answer_1": "Tokyo",
        "answer_2": "Delhi",
        "answer_3": "Beijing",
        "answer_4": "New York",
        "right_answer": 1
    },
    {
        "question": "Which country has the longest coastline in the world ?",
        "answer_1": "Norway",
        "answer_2": "Australia",
        "answer_3": "USA",
        "answer_4": "Canada",
        "right_answer": 4
    },
    {
        "question": "People of which country drink the most coffe per person?",
        "answer_1": "Italy",
        "answer_2": "Finland",
        "answer_3": "USA",
        "answer_4": "Brazil",
        "right_answer": 2
    },
    {
        "question": "The most common surname in Germany is : ?",
        "answer_1": "Meyer",
        "answer_2": "Schmidth",
        "answer_3": "Müller",
        "answer_4": "Schneider",
        "right_answer": 3
    },
    {
        "question": "Which is the longest river in the world?",
        "answer_1": "The Nile",
        "answer_2": "The Mississippi",
        "answer_3": "The Amazon River",
        "answer_4": "The Yangtze",
        "right_answer": 1
    },
    {
        "question": "Which is the happiest country in the world ?",
        "answer_1": "Germany",
        "answer_2": "Australia",
        "answer_3": "Denmark",
        "answer_4": "Finland",
        "right_answer": 4
    },
];


function initPage() {
    quiz__lenght();

}

function quiz__lenght() {
    document.getElementById('quizz__lenght') = questions.lenght;
}