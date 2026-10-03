import { TestConfiguration } from "@/types";

export const tests: TestConfiguration[] = [
  {
    id: "vic-car-learner",
    name: "Victoria Car Learner Practice Test",
    jurisdiction: "VIC",
    licenceCategory: "CAR",
    questionCount: 32,
    passPercentage: 78,
    randomiseQuestions: true,
    randomiseAnswers: true,
  },

  {
    id: "vic-motorcycle",
    name: "Victoria Motorcycle Practice Test",
    jurisdiction: "VIC",
    licenceCategory: "MOTORCYCLE",
    questionCount: 30,
    passPercentage: 80,
    randomiseQuestions: true,
    randomiseAnswers: true,
  },

  {
    id: "vic-mr",
    name: "Victoria MR Practice Test",
    jurisdiction: "VIC",
    licenceCategory: "MR",
    questionCount: 30,
    passPercentage: 80,
    randomiseQuestions: true,
    randomiseAnswers: true,
  },

  {
    id: "vic-hr",
    name: "Victoria HR Practice Test",
    jurisdiction: "VIC",
    licenceCategory: "HR",
    questionCount: 30,
    passPercentage: 80,
    randomiseQuestions: true,
    randomiseAnswers: true,
  },

  {
    id: "vic-hc",
    name: "Victoria HC Practice Test",
    jurisdiction: "VIC",
    licenceCategory: "HC",
    questionCount: 30,
    passPercentage: 80,
    randomiseQuestions: true,
    randomiseAnswers: true,
  },

  {
    id: "vic-mc",
    name: "Victoria MC Practice Test",
    jurisdiction: "VIC",
    licenceCategory: "MC",
    questionCount: 30,
    passPercentage: 80,
    randomiseQuestions: true,
    randomiseAnswers: true,
  },
];
