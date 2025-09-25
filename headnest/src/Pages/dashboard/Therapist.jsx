// src/pages/TherapistList.jsx
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "./DashboardLayout";

const therapists = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialization: "Therapy A",
    image: "/images/therapist1.jpg",
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    specialization: "Therapy B",
    image: "/images/therapist2.jpg",
  },
  // ...
];

export default function TherapistList() {
  const navigate = useNavigate();

  return (
    <DashboardLayout>
      <div className="max-w-6xl mx-auto py-10">
        <h1 className="text-3xl font-bold text-center mb-2">
          Book a therapist,
        </h1>
        <h2 className="text-2xl text-center mb-10">
          Start your healing journey
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {therapists.map((t) => (
            <Card
              key={t.id}
              className="cursor-pointer hover:shadow-lg"
              onClick={() => navigate(`/booking/${t.id}`)}>
              <CardContent className="p-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-full h-48 object-cover rounded"
                />
                <div className="mt-3">
                  <p className="font-medium text-gray-800">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.specialization}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}
