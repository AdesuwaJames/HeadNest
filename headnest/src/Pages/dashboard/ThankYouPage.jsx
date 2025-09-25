import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DashboardLayout from "./DashboardLayout";

const ThankYouPage = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-2xl rounded-2xl shadow-md text-center p-10 bg-white">
          <h1 className="text-3xl font-semibold mb-6">
            Thanks for booking a session with us
          </h1>

          <p className="text-lg mb-12">Your session details</p>

          {/* session info */}
          <div className="grid grid-cols-2 gap-y-12 text-left mb-12">
            <div className="font-medium text-gray-700">Name of therapist</div>
            <div className="text-gray-900">{state?.therapistName}</div>

            <div className="font-medium text-gray-700">Time of session</div>
            <div className="text-gray-900">{state?.sessionTime}</div>
          </div>

          <p className="text-gray-500 mb-10">Check your email for reminders</p>

          <Button
            onClick={() => navigate("/")}
            className="bg-[#38485C] text-white hover:bg-gray-700 rounded-full px-10 py-4 text-lg">
            Back to homepage
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ThankYouPage;
