import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { students, teachers } from "@/lib/mockData";
import { useNavigate } from "react-router-dom"; // ✅ New import
import "@/App.css";

export default function Login() {
  const [isStudent, setIsStudent] = useState(true);
  const [roll, setRoll] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { toast } = useToast();
  const navigate = useNavigate(); // ✅ New line

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (isStudent) {
      const student = students.find(
        (s) => s.roll === roll && s.password === password
      );
      if (student) {
        toast({
          title: "Login successful",
          description: `Welcome! Attendance: ${student.attendance.percentage}%`,
        });
        navigate("/home"); // ✅ Redirect to dashboard
      } else {
        toast({
          title: "Login failed",
          description: "You have entered incorrect roll number or password.",
          variant: "destructive",
        });
      }
    } else {
      const teacher = teachers.find(
        (t) => t.email === email && t.password === password
      );
      if (teacher) {
        toast({
          title: "Login successful",
          description: "Welcome Teacher!",
        });
        navigate("/home"); // ✅ Redirect to dashboard
      } else {
        toast({
          title: "Login failed",
          description: "You have entered incorrect email ID or password.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#eef4ff] to-white p-4">
      <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm border">
        <h2 className="text-2xl font-bold text-center mb-6">
          {isStudent ? "Student Login" : "Teacher Login"}
        </h2>

        <div className="flex justify-center gap-4 mb-4">
          <button
            onClick={() => setIsStudent(true)}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              isStudent
                ? "bg-blue-100 text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Student
          </button>
          <button
            onClick={() => setIsStudent(false)}
            className={`px-4 py-1 rounded-full text-sm font-medium ${
              !isStudent
                ? "bg-blue-100 text-blue-600"
                : "text-gray-500 hover:text-blue-500"
            }`}
          >
            Teacher
          </button>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {isStudent ? (
            <div>
              <Label htmlFor="roll">Roll Number</Label>
              <Input
                id="roll"
                type="text"
                value={roll}
                onChange={(e) => setRoll(e.target.value)}
                placeholder="Enter Roll Number"
              />
            </div>
          ) : (
            <div>
              <Label htmlFor="email">Email ID</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email ID"
              />
            </div>
          )}

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter Password"
            />
          </div>

          <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}
