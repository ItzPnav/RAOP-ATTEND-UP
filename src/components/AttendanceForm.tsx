
import React, { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

interface AttendanceFormProps {
  onCalculate: (totalDays: number, attendedDays: number, plannedDays: number) => void;
}

const AttendanceForm: React.FC<AttendanceFormProps> = ({ onCalculate }) => {
  const [totalDays, setTotalDays] = useState<number>(100); // Default value, should come from API
  const [attendedDays, setAttendedDays] = useState<number>(60); // Default value, should come from API
  const [plannedDays, setPlannedDays] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Simulate API call to get attendance data
  useEffect(() => {
    const fetchAttendanceData = async () => {
      setIsLoading(true);
      try {
        // In a real implementation, this would be an actual API call to campX
        // For now, we'll simulate a delay and use default values
        setTimeout(() => {
          // Mock data - in real app, this would come from campX API
          setTotalDays(100);
          setAttendedDays(60);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching attendance data:", error);
        toast.error("Failed to load attendance data. Please try again later.");
        setIsLoading(false);
      }
    };

    fetchAttendanceData();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Input validation
    if (plannedDays < 0) {
      toast.error("Planned days cannot be negative");
      return;
    }
    
    if (attendedDays + plannedDays > totalDays) {
      toast.error("Total attended days cannot exceed total working days");
      return;
    }
    
    onCalculate(totalDays, attendedDays, plannedDays);
  };

  return (
    <Card className="p-6">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="totalDays">Total Working Days</Label>
          <Input
            id="totalDays"
            type="number"
            value={totalDays}
            onChange={(e) => setTotalDays(Number(e.target.value))}
            disabled={isLoading}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="attendedDays">Days Already Attended</Label>
          <Input
            id="attendedDays"
            type="number"
            value={attendedDays}
            onChange={(e) => setAttendedDays(Number(e.target.value))}
            disabled={isLoading}
            required
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="plannedDays">
            Additional Days You Plan to Attend
          </Label>
          <Input
            id="plannedDays"
            type="number"
            value={plannedDays}
            onChange={(e) => setPlannedDays(Number(e.target.value))}
            required
          />
        </div>
        
        <Button 
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700"
          disabled={isLoading}
        >
          Calculate Attendance
        </Button>
      </form>
    </Card>
  );
};

export default AttendanceForm;
