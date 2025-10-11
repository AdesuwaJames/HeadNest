import { Routes, Route } from "react-router-dom";
import { BlankLayout, DefaultLayout } from "./layout";
import Home from "./temp_components/Pages/home/home";
import Login from "./temp_components/Pages/auth/Signin";
import Register from "./temp_components/Pages/auth/Signup";
import Welcome from "./temp_components/Pages/auth/Welcome";
import MentalWellnessDashboard from "./temp_components/Pages/dashboard/HonePage";
import { SidebarProvider } from "./temp_components/ui/sidebar";
import NameChoice from "./temp_components/Pages/auth/NameChoice";
import TherapistList from "./temp_components/Pages/dashboard/Therapist";
import BookingPage from "./temp_components/Pages/dashboard/BookingPage";
import PaymentPage from "./temp_components/Pages/dashboard/PaymentPage";
import ThankYouPage from "./temp_components/Pages/dashboard/ThankYouPage";
import EditProfile from "./temp_components/Pages/EditProfile/edit-profile";
import TransferCard from "./temp_components/Pages/dashboard/TransferCard";
import Settings from "./temp_components/Pages/settings/setting";
import Chat from "./temp_components/Pages/group-chat/group-chat";
import PrivacyPolicy from "./temp_components/Pages/privacyPolicy/privacyPolicy";
import JournalScreen from "./temp_components/Pages/Journal/journalScreen";
import CommunitySelection from "./temp_components/Pages/community/community";
import TherapyChat from "./temp_components/Pages/therapychat/therapychat";
import TherapistProfile from "./temp_components/Pages/TherapistProfile/TherapistProfile";
import MoodTracker from "./temp_components/Pages/dashboard/MoodTracker";
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
