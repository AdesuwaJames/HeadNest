import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlankLayout, DefaultLayout } from "./layout";
import Home from "./Pages/Home/Home";
import Login from "./Pages/auth/Signin";
import Register from "./Pages/auth/Signup";
import Welcome from "./Pages/auth/Welcome";
import MentalWellnessDashboard from "./Pages/dashboard/HonePage";
import { SidebarProvider } from "./Components/ui/sidebar";
import NameChoice from "./Pages/auth/NameChoice";
import TherapistList from "./Pages/dashboard/Therapist";
import BookingPage from "./Pages/dashboard/BookingPage";
import PaymentPage from "./Pages/dashboard/PaymentPage";
import ThankYouPage from "./Pages/dashboard/ThankYouPage";
import TransferCard from "./Pages/dashboard/TransferCard";

function App() {
  return (
    <Routes>
      {/* Default Layout pages */}
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />

      {/* Blank Layout pages (Authentication pages) */}
      <Route
        path="/signin"
        element={
          <BlankLayout>
            <Login />
          </BlankLayout>
        }
      />
      <Route
        path="/signup"
        element={
          <BlankLayout>
            <Register />
          </BlankLayout>
        }
      />
      <Route
        path="/welcome"
        element={
          <BlankLayout>
            <Welcome />
          </BlankLayout>
        }
      />
      <Route
        path="/name"
        element={
          <BlankLayout>
            <NameChoice />
          </BlankLayout>
        }
      />

      {/* Dashboard routes with Sidebar layout */}
      <Route
        path="/dashboard"
        element={
          <SidebarProvider>
            <MentalWellnessDashboard />
          </SidebarProvider>
        }
      />
      <Route
        path="/therapist"
        element={
          <SidebarProvider>
            <TherapistList />
          </SidebarProvider>
        }
      />
      <Route
        path="/booking/:id"
        element={
          <SidebarProvider>
            <BookingPage />
          </SidebarProvider>
        }
      />
      <Route
        path="/payment"
        element={
          <SidebarProvider>
            <PaymentPage />
          </SidebarProvider>
        }
      />
      <Route
        path="/payment-transfercard"
        element={
          <SidebarProvider>
            <TransferCard />
          </SidebarProvider>
        }
      />

      <Route
        path="/thank-you"
        element={
          <SidebarProvider>
            <ThankYouPage />
          </SidebarProvider>
        }
      />

      {/* 404 Page */}
      <Route
        path="*"
        element={
          <DefaultLayout>
            <div className="min-h-screen flex items-center justify-center">
              <h1 className="text-2xl font-bold">404 - Page Not Found</h1>
            </div>
          </DefaultLayout>
        }
      />
    </Routes>
  );
}

export default App;
