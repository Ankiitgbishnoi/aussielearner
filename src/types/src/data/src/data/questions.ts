import { Question } from "@/types";

export const questions: Question[] = [
  {
    id: "vic-car-001",
    jurisdiction: ["VIC"],
    licenceCategories: ["CAR"],
    topic: "Giving Way",
    question:
      "When approaching an intersection, what should you do before proceeding?",
    options: [
      "Check for other road users and give way when required",
      "Accelerate through the intersection",
      "Always give way to vehicles behind you",
      "Sound your horn and continue",
    ],
    correctAnswer: 0,
    explanation:
      "Drivers must follow the applicable give-way rules and check for other road users before proceeding.",
    difficulty: "easy",
    source: {
      authority: "VicRoads",
      title: "Road to Solo Driving",
      url: "https://www.vicroads.vic.gov.au/",
      lastVerified: "2026-10-04",
    },
  },

  {
    id: "vic-car-002",
    jurisdiction: ["VIC"],
    licenceCategories: ["CAR"],
    topic: "Road Safety",
    question:
      "What is an important reason for maintaining a safe following distance?",
    options: [
      "It gives you more time to react",
      "It lets you drive faster",
      "It prevents all traffic congestion",
      "It means you do not need to check mirrors",
    ],
    correctAnswer: 0,
    explanation:
      "A safe following distance provides additional time to react if the vehicle ahead slows or stops.",
    difficulty: "easy",
  },

  {
    id: "vic-bike-001",
    jurisdiction: ["VIC"],
    licenceCategories: ["BIKE"],
    topic: "Bicycle Safety",
    question:
      "What should a cyclist do before changing direction?",
    options: [
      "Check surroundings and signal when required",
      "Move immediately without checking",
      "Only check behind when travelling downhill",
      "Stop in the middle of the road",
    ],
    correctAnswer: 0,
    explanation:
      "Cyclists should check their surroundings and communicate their intentions when required.",
    difficulty: "easy",
  },
];
