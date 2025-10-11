// src/App.jsx
import { Routes, Route } from "react-router-dom";
import { BlankLayout, DefaultLayout } from "./layout";
import Home from "./components/Pages/Home/Home";
import Login from "./components/Pages/auth/Signin";
import Register from "./components/Pages/auth/Signup";
import GoogleCallback from "./Components/Pages/auth/GoogleCallback";
import Welcome from "./components/Pages/auth/Welcome";
import MentalWellnessDashboard from "./components/Pages/dashboard/HonePage";
import { SidebarProvider } from "./Components/ui/sidebar";
import NameChoice from "./components/Pages/auth/NameChoice";
import TherapistList from "./components/Pages/dashboard/Therapist";
import BookingPage from "./components/Pages/dashboard/BookingPage";
import PaymentPage from "./components/Pages/dashboard/PaymentPage";
import ThankYouPage from "./components/Pages/dashboard/ThankYouPage";
import EditProfile from "./components/Pages/EditProfile/edit-profile";
import TransferCard from "./components/Pages/dashboard/TransferCard";
import Settings from "./components/Pages/settings/setting";
import PrivacyPolicy from "./components/Pages/privacyPolicy/privacyPolicy";
import JournalScreen from "./components/Pages/Journal/journalScreen";

// 🧠 Community & Chat Imports
import CommunitySelection from "./components/Pages/community/community";
import Chat from "./components/Pages/group-chat/group-chat";

import TherapyChat from "./components/Pages/therapychat/therapychat";
import TherapistProfile from "./components/Pages/TherapistProfile/TherapistProfile";

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
      <Route path="/auth/google/callback" element={<GoogleCallback />} />

      {/* Other Pages */}
      <Route path="/edit-profile" element={<EditProfile />} />
      <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/journal" element={<JournalScreen />} />

      {/* 🧠 Community & Chat Routing */}
      <Route path="/community" element={<CommunitySelection />} />
      <Route path="/community/:communityName" element={<Chat />} />

      <Route path="/therapy-chat" element={<TherapyChat />} />

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
