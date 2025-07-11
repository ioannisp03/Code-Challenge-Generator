import "react";
import { useState } from "react";

export function MCQChallenge({ challenge, showExplanation = false }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [shouldShowExplanation, setShouldShowExplanation] =
    useState(showExplanation);

  const options =
    typeof challenge.options === "string"
      ? JSON.parse(challenge.options)
      : challenge.options;

  //   Option they choose (index)
  const handleOptionSelect = (index) => {
    if (selectedOption !== null) return;
    setSelectedOption(index);
    setShouldShowExplanation(true);
  };

  //   Style correct and wrong answers
  const getOptionClass = (index) => {
    if (selectedOption === null) return "option"; //Default CSS
    if (index === challenge.correct_answer_id) return "option correct";
    if (selectedOption === index && index !== challenge.correct_answer_id) {
      return "option incorrect";
    }
    return "option";
  };

  return (
    <div className="challenge-display">
      <p>
        <strong>Difficulty:</strong> {challenge.difficulty}
      </p>
      <p className="challenge-title">{challenge.title}</p>
      <div className="options">
        {options.map((option, index) => {
          <div
            className={getOptionClass(index)}
            key={index}
            onClick={() => handleOptionSelect(index)}
          >
            {option}
          </div>;
        })}
      </div>
      {shouldShowExplanation && selectedOption !== null && (
        <div className="explanation">
          <h4>Explanation</h4>
          <p>{challenge.explanation}</p>
        </div>
      )}
    </div>
  );
}
