import { notFound } from "next/navigation";

import Navbar from "@/components/Navbar";
import TestRunner from "@/components/TestRunner";
import { tests } from "@/data/tests";
import { questions } from "@/data/questions";

interface Props {
  params: Promise<{
    testId: string;
  }>;
}

export default async function TestPage({ params }: Props) {
  const { testId } = await params;

  const test = tests.find(
    (item) => item.id === testId,
  );

  if (!test) {
    notFound();
  }

  const testQuestions = questions.filter(
    (question) =>
      question.jurisdiction.includes(test.jurisdiction) &&
      question.licenceCategories.includes(
        test.licenceCategory,
      ),
  );

  if (testQuestions.length === 0) {
    notFound();
  }

  return (
    <>
      <Navbar />

      <TestRunner
        test={test}
        questions={testQuestions.slice(
          0,
          test.questionCount,
        )}
      />
    </>
  );
}
