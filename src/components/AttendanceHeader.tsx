
import React from 'react';

interface AttendanceHeaderProps {
  title: string;
  subtitle?: string;
}

const AttendanceHeader: React.FC<AttendanceHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
      {subtitle && <p className="text-gray-600">{subtitle}</p>}
    </div>
  );
};

export default AttendanceHeader;
