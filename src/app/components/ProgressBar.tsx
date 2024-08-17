import React, { useState, useEffect } from "react";

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  const [progress, setProgress] = useState(value);

  useEffect(() => {
    let startValue = 0;
    const interval = setInterval(() => {
      startValue += 1;
      if (startValue <= value) {
        setProgress(startValue);
      } else {
        clearInterval(interval);
      }
    }, 10); // Скорость анимации (чем меньше значение, тем быстрее)

    return () => clearInterval(interval);
  }, [value]);

  const progressValue = {
    background: `conic-gradient(rgb(96, 221, 167) 0% ${progress}%, rgb(246, 246, 246) 0% 100%)`,
  };

  return (
    <div className="progress-bar">
      <div className="progress-bar__circle" style={progressValue}>
        <div className="progress-bar__circle-white">
          <div className="progress-bar__text-block">
            <h3>{progress}%</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
