import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import DashboardLayout from "./DashboardLayout";
import TransferCard from "./TransferCard";
import { useState } from "react";

const paymentMethods = ["Card", "Transfer", "E-wallets"];

const PaymentPage = () => {
  const { state } = useLocation(); // data passed from BookingPage
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("");

  const handlePay = () => {
    if (!selectedPayment) {
      alert("Please select a payment method");
      return;
    }
     // 🔹 Navigate to transfer page if Transfer is selected
    if (selectedPayment === "Transfer") {
      navigate("/payment-transfercard", {
        state: {
          therapistName: state?.therapistName,
          sessionTime: state?.sessionTime,
          note: state?.note,
          amount: "$20"
        }
      });
      return;
    }
    // 🔹 Integrate payment gateway here
    setTimeout(() => {
      navigate("/thank-you", {
        state: {
          therapistName: state?.therapistName,
          sessionTime: state?.sessionTime,
          note: state?.note,
        },
      });
    }, 1000);
  };

  return (
    <DashboardLayout>
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="w-full max-w-xl rounded-2xl shadow-md space-y-10 p-6 bg-white">
          <h1 className="text-2xl font-semibold">Make Payment</h1>

          <div className="flex justify-between">
            <span className="font-medium text-lg">Total Amount</span>
            <span className="text-lg">$20</span>
          </div>

          <p className="text-gray-700">Choose a Payment Method</p>

          <div className="flex flex-wrap gap-3">
            {paymentMethods.map((method) => (
              <Button
                key={method}
                variant={selectedPayment === method ? "default" : "outline"}
                className={`${
                  selectedPayment === method
                    ? "bg-gray-800 text-white"
                    : "bg-beige-200 text-gray-700"
                }`}
                onClick={() => setSelectedPayment(method)}>
                {method}
              </Button>
            ))}
          </div>

          <Button
            onClick={handlePay}
            className="w-full bg-[#38485C] text-white hover:bg-gray-700 rounded-full py-6 text-base">
            Pay Now
          </Button>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default PaymentPage;
