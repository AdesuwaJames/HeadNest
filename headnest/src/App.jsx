import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/home/home";
import EditProfile from "./components/Pages/EditProfile/edit-profile";
import Settings from "./components/Pages/settings/setting";
import Chat from "./components/Pages/group-chat/group-chat";
import PrivacyPolicy from "./components/Pages/privacyPolicy/privacyPolicy";
import JournalScreen from "./components/Pages/Journal/journalScreen";
import CommunitySelection from "./components/Pages/community/community";
import TherapyChat from "./components/Pages/therapychat/therapychat";
import TherapistProfile from "./components/Pages/TherapistProfile/TherapistProfile";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Default route is now Home */}
        <Route path="/" element={<Home />} /> 
        <Route path="/edit-profile" element={<EditProfile />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/journal" element={<JournalScreen />} />
        <Route path="/community" element={<CommunitySelection />} />
        <Route path="/therapy-chat" element={<TherapyChat />} />
        <Route path="/therapist" element={<TherapistProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
