import { Routes, Route } from "react-router-dom";
import { BlankLayout, DefaultLayout } from "./layout";
import Home from "./components/Pages/home/home";
import Login from "./components/Pages/auth/Signin";
import Register from "./components/Pages/auth/Signup";
import Welcome from "./components/Pages/auth/Welcome";
import AboutUs from "./Components/Pages/about/AboutUs";
import ComingSoon from "./Components/Pages/comingSoon";
import TermsOfService from "./Components/Pages/legal/TermsOfService";
import MentalWellnessDashboard from "./components/Pages/dashboard/HonePage";
import { SidebarProvider } from "./components/ui/sidebar";
import NameChoice from "./components/Pages/auth/NameChoice";
import TherapistList from "./components/Pages/dashboard/Therapist";
import BookingPage from "./components/Pages/dashboard/BookingPage";
import PaymentPage from "./components/Pages/dashboard/PaymentPage";
import ThankYouPage from "./components/Pages/dashboard/ThankYouPage";
import EditProfile from "./components/Pages/EditProfile/edit-profile";
import TransferCard from "./components/Pages/dashboard/TransferCard";
import Settings from "./components/Pages/settings/setting";
import Chat from "./components/Pages/group-chat/group-chat";
import PrivacyPolicy from "./components/Pages/privacyPolicy/privacyPolicy";
import JournalScreen from "./components/Pages/Journal/journalScreen";
import CommunitySelection from "./components/Pages/community/community";
import TherapyChat from "./components/Pages/therapychat/therapychat";
import TherapistProfile from "./components/Pages/TherapistProfile/TherapistProfile";
import MoodTracker from "./components/Pages/dashboard/MoodTracker";
import GoogleCallback from "./components/Pages/AuthCallback"
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route
        path="/"
        element={
          <DefaultLayout>
            <Home />
          </DefaultLayout>
        }
      />

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

      {/* Dashboard & Main App Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
          <SidebarProvider>
            <MentalWellnessDashboard />
          </SidebarProvider>
          </ProtectedRoute>
        }
      />
      <Route
        path="/mood-tracker"
        element={
          <SidebarProvider>
            <MoodTracker />
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

      {/* Therapist Dynamic Profile */}
      <Route
        path="/therapist/:id"
        element={
          <SidebarProvider>
            <TherapistProfile />
          </SidebarProvider>
        }
      />

      {/* Booking & Payment Flow */}
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

      {/* Other Pages */}
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/journal" element={<JournalScreen />} />
      <Route path="/community" element={<CommunitySelection />} />
      <Route path="/therapy-chat" element={<TherapyChat />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/coming-soon" element={<ComingSoon />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/auth-callback" element={<GoogleCallback />} />

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
