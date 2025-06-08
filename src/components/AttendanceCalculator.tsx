
import React from 'react';
import AttendanceResult from './AttendanceResult';

const AttendanceCalculator: React.FC = () => {
  // Fixed attendance data
  const totalDays = 94;
  const attendedDays = Math.round(0.73 * 80); // 73% of 80 days completed
  const plannedDays = 0; // No planned days since we're not taking input

  return (
    <div className="w-full max-w-md mx-auto">
      <AttendanceResult
        totalDays={totalDays}
        attendedDays={attendedDays}
        plannedDays={plannedDays}
      />
    </div>
  );
};

export default AttendanceCalculator;
