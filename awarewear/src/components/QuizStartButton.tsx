import Link from "next/link";

const QuizStartButton = () => {
  return (
    <Link
      href="/quizStart"
      className="bg-dark-midnight-blue px-12 py-4 text-white font-bold rounded-3xl z-20 text-lg"
    >
      Start
    </Link>
  );
};

export default QuizStartButton;
