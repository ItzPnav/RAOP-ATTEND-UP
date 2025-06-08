
import React from 'react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Clock } from 'lucide-react';

interface AttendanceResultProps {
  totalDays: number;
  attendedDays: number;
  plannedDays: number;
}

const AttendanceResult: React.FC<AttendanceResultProps> = ({ 
  totalDays, 
  attendedDays, 
  plannedDays 
}) => {
  // Calculate current attendance percentage
  const currentAttendancePercentage = (attendedDays / totalDays) * 100;
  
  // Calculate days needed to reach 75% attendance
  const daysNeededFor75Percent = Math.ceil(0.75 * totalDays) - attendedDays;
  
  // Check if it's possible to reach 75% attendance
  const isPossibleToReach75Percent = daysNeededFor75Percent <= (totalDays - attendedDays);
  
  // Determine message based on calculations
  let message = "";
  let messageClass = "";
  
  if (currentAttendancePercentage >= 75) {
    message = "You have already reached 75% attendance!";
    messageClass = "text-green-600";
  } else if (isPossibleToReach75Percent) {
    message = `You need to attend at least ${daysNeededFor75Percent} more days to reach 75% attendance.`;
    messageClass = "text-blue-600";
  } else {
    message = "It is not possible to reach 75% attendance with the remaining days.";
    messageClass = "text-red-600";
  }

  return (
    <Card className="p-6 mt-6">
      <div className="space-y-6">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">Current Attendance Status</h3>
          
          <div className="relative pt-1">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full bg-blue-100 text-blue-600">
                  Current Attendance
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-semibold inline-block text-blue-600">
                  {currentAttendancePercentage.toFixed(2)}%
                </span>
              </div>
            </div>
            <div className="mt-2">
              <Progress 
                className="h-2" 
                value={currentAttendancePercentage} 
              />
            </div>
          </div>
          
          <div className="mt-4 flex items-start space-x-3">
            <div className="mt-1">
              <Clock className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h4 className="font-medium">Attendance Summary</h4>
              <p className="text-sm text-gray-600">Total working days: {totalDays}</p>
              <p className="text-sm text-gray-600">Days completed so far: 80</p>
              <p className="text-sm text-gray-600">Days attended: {attendedDays}</p>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-4 rounded-md border border-gray-100">
          <h3 className="text-lg font-medium">Attendance Prediction</h3>
          <p className={`mt-2 ${messageClass} font-medium`}>{message}</p>
        </div>
      </div>
    </Card>
  );
};

export default AttendanceResult;
