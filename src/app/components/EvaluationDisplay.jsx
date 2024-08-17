// components/EvaluationDisplay.tsx

import { useCourseworkStore } from "../store/useCourseworkStore";

export default function EvaluationDisplay({ id }: { id: string }) {
  const { courseworkList } = useCourseworkStore();
  const coursework = courseworkList.find((item: any) => item.id === id);

  if (!coursework || !coursework.evaluation) return <div>No Evaluation Data</div>;

  return (
    <div className="p-4 border rounded-lg">
      <div className="text-center mb-4">
        <h2>{coursework.title}</h2>
        <p>Overall Score: {coursework.evaluation.score}</p>
        {/* Progress Indicator - using Tailwind CSS */}
        <div className="relative pt-1">
          <div className="overflow-hidden h-2 text-xs flex rounded bg-blue-200">
            <div
              style={{ width: `${coursework.evaluation.score}%` }}
              className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-blue-500"
            ></div>
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p>Evaluation Date: {coursework.evaluation.date}</p>
        <h3 className="mt-4">Criteria Breakdown:</h3>
        <ul>
        {Object.entries(coursework.evaluation.criteria).map(([criteria, score]) => (
  <li key={criteria}>
    {criteria}: {score as string | number}
  </li>
))}

        </ul>
      </div>
    </div>
  );
}
