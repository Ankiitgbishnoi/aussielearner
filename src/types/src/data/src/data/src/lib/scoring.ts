import {
  Question,
  TestAnswer,
  TestConfiguration,
  TestResult,
} from "@/types";

export function calculateResult(
  test: TestConfiguration,
  questions: Question[],
  answers: TestAnswer[],
): TestResult {
  let correct = 0;

  questions.forEach((question) => {
    const answer = answers.find(
      (item) => item.questionId === question.id,
    );

    if (!answer) return;

    if (answer.selectedAnswer === question.correctAnswer) {
      correct++;
    }
  });

  const total = questions.length;

  const incorrect = total - correct;

  const score =
    total === 0 ? 0 : Math.round((correct / total) * 100);

  const passed = score >= test.passPercentage;

  return {
    testId: test.id,
    score,
    correct,
    incorrect,
    total,
    passed,
    answers,
    completedAt: new Date().toISOString(),
  };
}
