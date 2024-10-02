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
  
// const subjects = [
//     {
//       "name": "Mathematics",
//       "chapters": [
//         {
//           "name": "Basic Math",
//           "levels": [
//             {
//               "level": 1,
//               "questions": [
//                 {
//                   "question": "What is 5 + 7?",
//                   "options": ["10", "11", "12", "13"],
//                   "answer": "12"
//                 },
//                 {
//                   "question": "What is 15 - 6?",
//                   "options": ["9", "8", "7", "6"],
//                   "answer": "9"
//                 },
//                 {
//                   "question": "What is 3 × 4?",
//                   "options": ["10", "12", "14", "16"],
//                   "answer": "12"
//                 },
//                 {
//                   "question": "What is 16 ÷ 4?",
//                   "options": ["2", "4", "6", "8"],
//                   "answer": "4"
//                 },
//                 {
//                   "question": "What is the square of 5?",
//                   "options": ["20", "25", "30", "15"],
//                   "answer": "25"
//                 },
//                 {
//                   "question": "What is 8 + 2 × 5?",
//                   "options": ["18", "20", "10", "14"],
//                   "answer": "18"
//                 },
//                 {
//                   "question": "What is 10% of 200?",
//                   "options": ["10", "20", "30", "40"],
//                   "answer": "20"
//                 },
//                 {
//                   "question": "What is 100 - 45?",
//                   "options": ["55", "65", "75", "85"],
//                   "answer": "55"
//                 },
//                 {
//                   "question": "What is 7 × 8?",
//                   "options": ["54", "56", "58", "60"],
//                   "answer": "56"
//                 },
//                 {
//                   "question": "What is 9 + 3 × 2?",
//                   "options": ["12", "15", "18", "21"],
//                   "answer": "15"
//                 }
//               ]
//             },
//             {
//               "level": 2,
//               "questions": [
//                 {
//                   "question": "What is the value of π (pi) to two decimal places?",
//                   "options": ["3.12", "3.14", "3.16", "3.18"],
//                   "answer": "3.14"
//                 },
//                 {
//                   "question": "What is 5²?",
//                   "options": ["25", "20", "30", "15"],
//                   "answer": "25"
//                 },
//                 {
//                   "question": "What is the next prime number after 5?",
//                   "options": ["6", "7", "8", "9"],
//                   "answer": "7"
//                 },
//                 {
//                   "question": "What is 12 ÷ 3?",
//                   "options": ["2", "3", "4", "5"],
//                   "answer": "4"
//                 },
//                 {
//                   "question": "What is 10 + 15?",
//                   "options": ["20", "25", "30", "35"],
//                   "answer": "25"
//                 },
//                 {
//                   "question": "What is the area of a rectangle with length 5 and width 4?",
//                   "options": ["20", "25", "30", "15"],
//                   "answer": "20"
//                 },
//                 {
//                   "question": "What is 100 ÷ 25?",
//                   "options": ["2", "3", "4", "5"],
//                   "answer": "4"
//                 },
//                 {
//                   "question": "What is 3 + 4 + 5?",
//                   "options": ["10", "12", "11", "13"],
//                   "answer": "12"
//                 },
//                 {
//                   "question": "What is the perimeter of a square with side length 3?",
//                   "options": ["6", "9", "12", "15"],
//                   "answer": "12"
//                 },
//                 {
//                   "question": "What is the value of 2³?",
//                   "options": ["4", "6", "8", "10"],
//                   "answer": "8"
//                 }
//               ]
//             },
//             {
//               "level": 3,
//               "questions": [
//                 {
//                   "question": "What is the formula for the area of a triangle?",
//                   "options": ["1/2 × base × height", "base × height", "base + height", "none of the above"],
//                   "answer": "1/2 × base × height"
//                 },
//                 {
//                   "question": "What is 4 × 3 - 5?",
//                   "options": ["7", "8", "9", "10"],
//                   "answer": "7"
//                 },
//                 {
//                   "question": "What is the cube of 3?",
//                   "options": ["6", "9", "27", "81"],
//                   "answer": "27"
//                 },
//                 {
//                   "question": "What is 100 - 10 × 5?",
//                   "options": ["50", "45", "40", "55"],
//                   "answer": "50"
//                 },
//                 {
//                   "question": "What is the square root of 64?",
//                   "options": ["6", "7", "8", "9"],
//                   "answer": "8"
//                 },
//                 {
//                   "question": "What is 9 - 3 + 2?",
//                   "options": ["6", "7", "8", "9"],
//                   "answer": "8"
//                 },
//                 {
//                   "question": "What is 15 ÷ 3 + 4?",
//                   "options": ["6", "7", "8", "9"],
//                   "answer": "9"
//                 },
//                 {
//                   "question": "What is 14 - 2 × 4?",
//                   "options": ["6", "4", "8", "10"],
//                   "answer": "6"
//                 },
//                 {
//                   "question": "What is the value of 6²?",
//                   "options": ["30", "36", "32", "38"],
//                   "answer": "36"
//                 },
//                 {
//                   "question": "What is the sum of the angles in a triangle?",
//                   "options": ["180°", "360°", "90°", "270°"],
//                   "answer": "180°"
//                 }
//               ]
//             },
//             {
//               "level": 4,
//               "questions": [
//                 {
//                   "question": "What is the value of 3 × (2 + 4)?",
//                   "options": ["12", "18", "15", "21"],
//                   "answer": "18"
//                 },
//                 {
//                   "question": "What is 7 × 9?",
//                   "options": ["56", "63", "72", "81"],
//                   "answer": "63"
//                 },
//                 {
//                   "question": "What is the value of 5! (5 factorial)?",
//                   "options": ["120", "60", "30", "24"],
//                   "answer": "120"
//                 },
//                 {
//                   "question": "What is the volume of a cube with side length 3?",
//                   "options": ["9", "18", "27", "36"],
//                   "answer": "27"
//                 },
//                 {
//                   "question": "What is the term for a number that cannot be divided evenly?",
//                   "options": ["Prime", "Composite", "Integer", "Rational"],
//                   "answer": "Prime"
//                 },
//                 {
//                   "question": "What is the sum of the first 10 natural numbers?",
//                   "options": ["45", "55", "50", "60"],
//                   "answer": "55"
//                 },
//                 {
//                   "question": "What is 8 × 8?",
//                   "options": ["64", "72", "56", "62"],
//                   "answer": "64"
//                 },
//                 {
//                   "question": "What is the value of 0.5 + 0.5?",
//                   "options": ["1", "2", "0", "0.5"],
//                   "answer": "1"
//                 },
//                 {
//                   "question": "What is the probability of rolling a 1 on a fair six-sided die?",
//                   "options": ["1/6", "1/3", "1/2", "1/4"],
//                   "answer": "1/6"
//                 },
//                 {
//                   "question": "What is the next number in the sequence: 2, 4, 8, 16?",
//                   "options": ["20", "24", "32", "30"],
//                   "answer": "32"
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "name": "Science",
//       "chapters": [
//         {
//           "name": "General Science",
//           "levels": [
//             {
//               "level": 1,
//               "questions": [
//                 {
//                   "question": "What is H₂O commonly known as?",
//                   "options": ["Hydrogen", "Water", "Oxygen", "Hydrogen Peroxide"],
//                   "answer": "Water"
//                 },
//                 {
//                   "question": "What is the boiling point of water in Celsius?",
//                   "options": ["0°C", "50°C", "100°C", "150°C"],
//                   "answer": "100°C"
//                 },
//                 {
//                   "question": "What gas do plants absorb from the atmosphere?",
//                   "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
//                   "answer": "Carbon Dioxide"
//                 },
//                 {
//                   "question": "What is the largest organ in the human body?",
//                   "options": ["Heart", "Liver", "Skin", "Lungs"],
//                   "answer": "Skin"
//                 },
//                 {
//                   "question": "What is the process by which plants make their food?",
//                   "options": ["Photosynthesis", "Respiration", "Digestion", "Transpiration"],
//                   "answer": "Photosynthesis"
//                 },
//                 {
//                   "question": "What part of the cell contains genetic material?",
//                   "options": ["Nucleus", "Cytoplasm", "Membrane", "Ribosome"],
//                   "answer": "Nucleus"
//                 },
//                 {
//                   "question": "What is the powerhouse of the cell?",
//                   "options": ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
//                   "answer": "Mitochondria"
//                 },
//                 {
//                   "question": "What is the main source of energy for the Earth?",
//                   "options": ["The Moon", "The Sun", "The Stars", "Geothermal"],
//                   "answer": "The Sun"
//                 },
//                 {
//                   "question": "What is the chemical symbol for Gold?",
//                   "options": ["Au", "Ag", "Fe", "Pb"],
//                   "answer": "Au"
//                 },
//                 {
//                   "question": "What type of animal is a dolphin?",
//                   "options": ["Mammal", "Reptile", "Fish", "Amphibian"],
//                   "answer": "Mammal"
//                 }
//               ]
//             },
//             {
//               "level": 2,
//               "questions": [
//                 {
//                   "question": "What is the chemical formula for table salt?",
//                   "options": ["NaCl", "KCl", "CaCO₃", "H₂O"],
//                   "answer": "NaCl"
//                 },
//                 {
//                   "question": "What is the most abundant gas in the Earth's atmosphere?",
//                   "options": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
//                   "answer": "Nitrogen"
//                 },
//                 {
//                   "question": "What organ is responsible for pumping blood?",
//                   "options": ["Brain", "Heart", "Lungs", "Kidneys"],
//                   "answer": "Heart"
//                 },
//                 {
//                   "question": "What is the process of water vapor turning into liquid called?",
//                   "options": ["Evaporation", "Condensation", "Precipitation", "Transpiration"],
//                   "answer": "Condensation"
//                 },
//                 {
//                   "question": "What is the term for animals that eat both plants and animals?",
//                   "options": ["Carnivores", "Herbivores", "Omnivores", "Detritivores"],
//                   "answer": "Omnivores"
//                 },
//                 {
//                   "question": "What type of energy is stored in food?",
//                   "options": ["Chemical", "Nuclear", "Thermal", "Mechanical"],
//                   "answer": "Chemical"
//                 },
//                 {
//                   "question": "What is the basic unit of life?",
//                   "options": ["Atom", "Cell", "Tissue", "Organ"],
//                   "answer": "Cell"
//                 },
//                 {
//                   "question": "What is the common name for the substance known as sodium bicarbonate?",
//                   "options": ["Baking Soda", "Baking Powder", "Flour", "Sugar"],
//                   "answer": "Baking Soda"
//                 },
//                 {
//                   "question": "What is the main function of red blood cells?",
//                   "options": ["Fight infections", "Carry oxygen", "Clot blood", "Transport nutrients"],
//                   "answer": "Carry oxygen"
//                 },
//                 {
//                   "question": "What is the process of plants releasing water vapor into the atmosphere called?",
//                   "options": ["Evaporation", "Condensation", "Transpiration", "Precipitation"],
//                   "answer": "Transpiration"
//                 }
//               ]
//             },
//             {
//               "level": 3,
//               "questions": [
//                 {
//                   "question": "What is the primary component of the Earth's atmosphere?",
//                   "options": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
//                   "answer": "Nitrogen"
//                 },
//                 {
//                   "question": "What is the chemical symbol for Water?",
//                   "options": ["H₂O", "HO", "O₂", "H₂"],
//                   "answer": "H₂O"
//                 },
//                 {
//                   "question": "What type of bond is formed when electrons are shared?",
//                   "options": ["Ionic", "Covalent", "Metallic", "Hydrogen"],
//                   "answer": "Covalent"
//                 },
//                 {
//                   "question": "What is the force that keeps planets in orbit around the sun?",
//                   "options": ["Electromagnetic", "Nuclear", "Gravitational", "Friction"],
//                   "answer": "Gravitational"
//                 },
//                 {
//                   "question": "What type of energy is produced by moving water?",
//                   "options": ["Solar", "Wind", "Hydraulic", "Geothermal"],
//                   "answer": "Hydraulic"
//                 },
//                 {
//                   "question": "What is the primary source of energy for living organisms?",
//                   "options": ["The Sun", "Water", "Air", "Soil"],
//                   "answer": "The Sun"
//                 },
//                 {
//                   "question": "What is the name of the pigment that gives plants their green color?",
//                   "options": ["Chlorophyll", "Melanin", "Carotene", "Hemoglobin"],
//                   "answer": "Chlorophyll"
//                 },
//                 {
//                   "question": "What is the process of converting sugar into energy in cells called?",
//                   "options": ["Photosynthesis", "Respiration", "Digestion", "Fermentation"],
//                   "answer": "Respiration"
//                 },
//                 {
//                   "question": "What is the primary function of the immune system?",
//                   "options": ["Digestion", "Protection", "Respiration", "Circulation"],
//                   "answer": "Protection"
//                 },
//                 {
//                   "question": "What is the term for the variety of life in the world or a particular habitat?",
//                   "options": ["Ecosystem", "Biodiversity", "Population", "Community"],
//                   "answer": "Biodiversity"
//                 }
//               ]
//             },
//             {
//               "level": 4,
//               "questions": [
//                 {
//                   "question": "What is the scientific study of living organisms called?",
//                   "options": ["Biology", "Chemistry", "Physics", "Astronomy"],
//                   "answer": "Biology"
//                 },
//                 {
//                   "question": "What is the name of the process by which cells divide?",
//                   "options": ["Mitosis", "Meiosis", "Fission", "Fusion"],
//                   "answer": "Mitosis"
//                 },
//                 {
//                   "question": "What is the basic building block of proteins?",
//                   "options": ["Amino acids", "Nucleotides", "Fatty acids", "Sugars"],
//                   "answer": "Amino acids"
//                 },
//                 {
//                   "question": "What is the study of matter and its interactions called?",
//                   "options": ["Physics", "Chemistry", "Biology", "Geology"],
//                   "answer": "Chemistry"
//                 },
//                 {
//                   "question": "What is the process by which plants convert light energy into chemical energy?",
//                   "options": ["Respiration", "Fermentation", "Photosynthesis", "Transpiration"],
//                   "answer": "Photosynthesis"
//                 },
//                 {
//                   "question": "What is the smallest unit of matter?",
//                   "options": ["Atom", "Molecule", "Cell", "Compound"],
//                   "answer": "Atom"
//                 },
//                 {
//                   "question": "What is the term for the number of protons in an atom's nucleus?",
//                   "options": ["Mass number", "Atomic number", "Isotope", "Ion"],
//                   "answer": "Atomic number"
//                 },
//                 {
//                   "question": "What is the name of the process by which an organism's internal environment is kept stable?",
//                   "options": ["Metabolism", "Homeostasis", "Adaptation", "Evolution"],
//                   "answer": "Homeostasis"
//                 },
//                 {
//                   "question": "What is the main purpose of the scientific method?",
//                   "options": ["To prove a hypothesis", "To answer questions", "To conduct experiments", "To publish findings"],
//                   "answer": "To answer questions"
//                 },
//                 {
//                   "question": "What is the term for a species that is at risk of extinction?",
//                   "options": ["Endangered", "Threatened", "Vulnerable", "Protected"],
//                   "answer": "Endangered"
//                 }
//               ]
//             }
//           ]
//         }
//       ]
//     }
//   ]

//   export default subjects;
