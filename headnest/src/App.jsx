import { Routes, Route } from "react-router-dom";
import { BlankLayout, DefaultLayout } from "./layout";
import Home from "./Components/Pages/home/home";
import Login from "./Components/Pages/auth/Signin";
import Register from "./Components/Pages/auth/Signup";
import Welcome from "./Components/Pages/auth/Welcome";
import MentalWellnessDashboard from "./Components/Pages/dashboard/HonePage";
import { SidebarProvider } from "./Components/ui/sidebar";
import NameChoice from "./Components/Pages/auth/NameChoice";
import TherapistList from "./Components/Pages/dashboard/Therapist";
import BookingPage from "./Components/Pages/dashboard/BookingPage";
import PaymentPage from "./Components/Pages/dashboard/PaymentPage";
import ThankYouPage from "./Components/Pages/dashboard/ThankYouPage";
import EditProfile from "./Components/Pages/EditProfile/edit-profile";
import TransferCard from "./Components/Pages/dashboard/TransferCard";
import Settings from "./Components/Pages/settings/setting";
import Chat from "./Components/Pages/group-chat/group-chat";
import PrivacyPolicy from "./Components/Pages/privacyPolicy/privacyPolicy";
import JournalScreen from "./Components/Pages/Journal/journalScreen";
import CommunitySelection from "./Components/Pages/community/community";
import TherapyChat from "./Components/Pages/therapychat/therapychat";
import TherapistProfile from "./Components/Pages/TherapistProfile/TherapistProfile";
import MoodTracker from "./Components/Pages/dashboard/MoodTracker";
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
