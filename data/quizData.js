const quizData = [
    {
      id: 1,
      title: "Current Affairs",
      level:1,
      chapter: 1,
      questions: [
        {
          question: "What is the capital of France?",
          options: ["Berlin", "Madrid", "Paris", "Lisbon"],
          correctAnswer: 2, // index of the correct answer
        },
        {
          question: "Who is the current President of the USA?",
          options: ["Obama", "Biden", "Trump", "Bush"],
          correctAnswer: 1,
        },
        {
          question: "Which country hosted the 2020 Summer Olympics?",
          options: ["Japan", "China", "Brazil", "USA"],
          correctAnswer: 0,
        },
        {
          question: "What is the largest economy in the world?",
          options: ["USA", "China", "Japan", "Germany"],
          correctAnswer: 1,
        },
      ],
    },
    {
      id: 2,
      title: "Current Affairs",
      level:2,
      chapter: 2,
      questions: [
        {
          question: "What is the currency of Japan?",
          options: ["Dollar", "Yen", "Euro", "Won"],
          correctAnswer: 1,
        },
        {
          question: "Who won the Nobel Peace Prize in 2021?",
          options: ["Maria Ressa", "Malala Yousafzai", "Barack Obama", "Greta Thunberg"],
          correctAnswer: 0,
        },
        {
          question: "What is the main greenhouse gas contributing to climate change?",
          options: ["Carbon Dioxide", "Methane", "Ozone", "Nitrous Oxide"],
          correctAnswer: 0,
        },
        {
          question: "In which country was the first COVID-19 vaccine developed?",
          options: ["USA", "UK", "Russia", "China"],
          correctAnswer: 1,
        },
      ],
    },
    {
      id: 3,
      title: "General Knowledge",
      level:3,
      chapter: 1,
      questions: [
        {
          question: "What is the smallest planet in our solar system?",
          options: ["Earth", "Mars", "Mercury", "Venus"],
          correctAnswer: 2,
        },
        {
          question: "What is the largest mammal in the world?",
          options: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
          correctAnswer: 1,
        },
        {
          question: "Who wrote 'Romeo and Juliet'?",
          options: ["Charles Dickens", "Mark Twain", "William Shakespeare", "Ernest Hemingway"],
          correctAnswer: 2,
        },
        {
          question: "What is the capital city of Australia?",
          options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
          correctAnswer: 2,
        },
      ],
    },
    {
      id: 4,
      title: "Science and Nature",
      level:4,
      chapter: 1,
      questions: [
        {
          question: "What is the chemical symbol for water?",
          options: ["H2O", "O2", "CO2", "HO"],
          correctAnswer: 0,
        },
        {
          question: "What force keeps us on the ground?",
          options: ["Friction", "Gravity", "Magnetism", "Inertia"],
          correctAnswer: 1,
        },
        {
          question: "What is the hardest natural substance on Earth?",
          options: ["Diamond", "Iron", "Gold", "Sapphire"],
          correctAnswer: 0,
        },
        {
          question: "Which planet is known as the Red Planet?",
          options: ["Earth", "Mars", "Jupiter", "Saturn"],
          correctAnswer: 1,
        },
      ],
    },
  ];
  
  export default quizData;
  