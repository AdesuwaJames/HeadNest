// src/pages/PaymentPage.jsx
import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/temp_components/ui/button";
import DashboardLayout from "./DashboardLayout";
import { useState, useEffect } from "react";
import Sidebar from "../../sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const paymentMethods = ["Paystack", "Transfer", "E-wallets"];

const PaymentPage = () => {
  const { state } = useLocation(); // Data passed from BookingPage
  const navigate = useNavigate();
  const [selectedPayment, setSelectedPayment] = useState("");

  // 🔸 Responsive sidebar states
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          amount: "$20",
        },
      });
      return;
    }

    // 🔹 Simulate other payment methods
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

  const content = (
    <div className="w-full min-h-screen overflow-x-auto bg-gray-50">
      <div className="min-w-[400px] sm:min-w-[500px] md:min-w-[640px] lg:min-w-0 flex">
        {/* Sidebar for mobile */}
        {isMobile && (
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        )}

        {/* Hamburger menu */}
        {isMobile && (
          <button
            className="lg:hidden fixed top-4 left-4 z-50 bg-[#38485C] text-white p-2 rounded-md shadow"
            onClick={() => setSidebarOpen((open) => !open)}
            aria-label="Open sidebar"
          >
            <FontAwesomeIcon icon={sidebarOpen ? faTimes : faBars} />
          </button>
        )}

        {/* Payment Page Content */}
        <div className="flex-1 flex items-center justify-center px-4 py-10">
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
                  onClick={() => setSelectedPayment(method)}
                >
                  {method}
                </Button>
              ))}
            </div>

            <Button
              onClick={handlePay}
              className="w-full bg-[#38485C] text-white hover:bg-gray-700 rounded-full py-6 text-base"
            >
              Pay Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

  return isMobile ? content : <DashboardLayout>{content}</DashboardLayout>;
};

export default PaymentPage;
