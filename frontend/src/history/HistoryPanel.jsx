import "react";
import { useState, useEffect } from "react";
import { MCQChallenge } from "../challenge/MCQChallenge";
import { useApi } from "../utils/api";

export function HistoryPanel() {
  const {makeRequest} = useApi()
  const [history, setHistory] = useState([]);
  const [isLoading, setisLoading] = useState(true); //takes a second to load this as it boots up
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchHistory();
  }, []); //as soon as component mounts on screen, trigger useEffect

  const fetchHistory = async () => {
    setisLoading(true);
    setError(null);

    try {
      const data = await makeRequest("my-history");
      console.log(data)
      setHistory(data.challenges);
    } catch (err) {
      setError("Failed to load history", err);
    } finally {
      setisLoading(false);
    }
  };
  if (isLoading) {
    <div className="loading">Loading history...</div>;
  }
  if (error) {
    return (
      <div className="error-message">
        <p>{error}</p>
        <button onClick={fetchHistory}> Retry</button>
      </div>
    );
  }

  return (
    <div className="history-panel">
      <h2>History</h2>
      {history.length === 0 ? (
        <p>No challenge history</p>
      ) : (
        <div className="history-list">
          {history.map((challenge) => {
            return (
              <MCQChallenge
                challenge={challenge}
                key={challenge.id}
                showExplanation
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
