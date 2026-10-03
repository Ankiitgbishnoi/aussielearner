"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Question, TestAnswer, TestConfiguration } from "@/types";
import { calculateResult } from "@/lib/scoring";
import { saveResult } from "@/lib/storage";

interface Props {
  test: TestConfiguration;
  questions: Question[];
}

export default function TestRunner({
  test,
  questions,
}: Props) {
  const router = useRouter();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<TestAnswer[]>([]);
  const [submitting, setSubmitting] = useState(false);

  const currentQuestion = questions[currentIndex];

  const selectedAnswer = useMemo(() => {
    return answers.find(
      (answer) => answer.questionId === currentQuestion.id,
    )?.selectedAnswer;
  }, [answers, currentQuestion.id]);

  function selectAnswer(answerIndex: number) {
    setAnswers((previous) => {
      const filtered = previous.filter(
        (answer) =>
          answer.questionId !== currentQuestion.id,
      );

      return [
        ...filtered,
        {
          questionId: currentQuestion.id,
          selectedAnswer: answerIndex,
        },
      ];
    });
  }

  function nextQuestion() {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((index) => index + 1);
    }
  }

  function previousQuestion() {
    if (currentIndex > 0) {
      setCurrentIndex((index) => index - 1);
    }
  }

  function finishTest() {
    setSubmitting(true);

    const result = calculateResult(
      test,
      questions,
      answers,
    );

    saveResult(result);

    const attemptId = crypto.randomUUID();

    sessionStorage.setItem(
      `aussie-result-${attemptId}`,
      JSON.stringify(result),
    );

    router.push(`/results/${attemptId}`);
  }

  const isLastQuestion =
    currentIndex === questions.length - 1;

  return (
    <div className="min-h-screen bg-[#07111f] px-5 pb-12 pt-28">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between text-sm text-slate-400">
          <span>{test.name}</span>

          <span>
            {currentIndex + 1} / {questions.length}
          </span>
        </div>

        <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-green-500 transition-all duration-300"
            style={{
              width: `${
                ((currentIndex + 1) / questions.length) *
                100
              }%`,
            }}
          />
        </div>

        <div
          key={currentQuestion.id}
          className="mt-10 rounded-[2rem] bg-white p-6 shadow-2xl sm:p-10"
        >
          <div className="text-sm font-bold uppercase tracking-[0.2em] text-green-600">
            {currentQuestion.topic}
          </div>

          <h1 className="mt-5 text-2xl font-black leading-tight text-slate-950 sm:text-4xl">
            {currentQuestion.question}
          </h1>

          {currentQuestion.image && (
            <img
              src={currentQuestion.image}
              alt=""
              className="mt-8 max-h-72 w-full rounded-2xl object-cover"
            />
          )}

          <div className="mt-8 space-y-3">
            {currentQuestion.options.map(
              (option, index) => {
                const selected =
                  selectedAnswer === index;

                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => selectAnswer(index)}
                    className={`flex w-full items-center gap-4 rounded-2xl border p-5 text-left transition ${
                      selected
                        ? "border-green-500 bg-green-50"
                        : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border text-sm font-black ${
                        selected
                          ? "border-green-500 bg-green-500 text-white"
                          : "border-slate-300 text-slate-500"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>

                    <span className="font-semibold text-slate-800">
                      {option}
                    </span>
                  </button>
                );
              },
            )}
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between">
          <button
            type="button"
            onClick={previousQuestion}
            disabled={currentIndex === 0}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 font-bold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-30"
          >
            <ChevronLeft className="h-5 w-5" />
            Previous
          </button>

          {!isLastQuestion ? (
            <button
              type="button"
              onClick={nextQuestion}
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-6 py-3 font-black text-[#06130b] transition hover:bg-green-400"
            >
              Next
              <ChevronRight className="h-5 w-5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={finishTest}
              disabled={
                submitting ||
                answers.length !== questions.length
              }
              className="rounded-full bg-green-500 px-7 py-3 font-black text-[#06130b] transition hover:bg-green-400 disabled:cursor-not-allowed disabled:opacity-40"
            >
              {submitting
                ? "Calculating..."
                : "Finish Test"}
            </button>
          )}
        </div>

        <p className="mt-6 text-center text-sm text-slate-500">
          Your result will be shown after you finish the test.
        </p>
      </div>
    </div>
  );
}
