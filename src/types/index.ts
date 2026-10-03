export type Jurisdiction =
  | "VIC"
  | "NSW"
  | "QLD"
  | "SA"
  | "WA"
  | "TAS"
  | "NT"
  | "ACT";

export type LicenceCategory =
  | "PEDESTRIAN"
  | "BIKE"
  | "CAR"
  | "MOTORCYCLE"
  | "MR"
  | "HR"
  | "HC"
  | "MC";

export type Difficulty = "easy" | "medium" | "hard";

export interface Question {
  id: string;
  jurisdiction: Jurisdiction[];
  licenceCategories: LicenceCategory[];
  topic: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  difficulty: Difficulty;
  image?: string;
  source?: {
    authority: string;
    title: string;
    url: string;
    lastVerified: string;
  };
}

export interface TestConfiguration {
  id: string;
  name: string;
  jurisdiction: Jurisdiction;
  licenceCategory: LicenceCategory;
  questionCount: number;
  passPercentage: number;
  timeLimitMinutes?: number;
  randomiseQuestions: boolean;
  randomiseAnswers: boolean;
}

export interface TestAnswer {
  questionId: string;
  selectedAnswer: number;
}

export interface TestResult {
  testId: string;
  score: number;
  correct: number;
  incorrect: number;
  total: number;
  passed: boolean;
  answers: TestAnswer[];
  completedAt: string;
}
