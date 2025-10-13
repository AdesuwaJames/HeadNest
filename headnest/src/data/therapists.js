import React from "react";
import MaleTherapist from "../assets/maleTherapist.jpg";
import FemaleTherapist from "../assets/femaleTherapist.jpg";

// src/data/therapists.js
const therapists = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialization: "Therapy A",
    image: MaleTherapist,
    about:
      "I am a mental health professional that helps individuals cope with stress, anxiety, and depression. My approach is empathetic, evidence-based, and tailored to your needs.",
    specialties: ["Anxiety", "Stress Management", "Depression"],
    qualifications: [
      "BSc Psychology",
      "Master Behavioral Psychology",
      "Member Nigeria Mental Health Society",
    ],
    pricing: "N1000 per person",
  },
  {
    id: 2,
    name: "Dr. Jane Doe",
    specialization: "Therapy B",
    image: FemaleTherapist,
    about:
      "I help people manage trauma, grief, and emotional imbalance using holistic approaches and talk therapy.",
    specialties: ["Trauma", "Grief Counseling", "Mindfulness"],
    qualifications: [
      "BSc Counseling Psychology",
      "Certified Trauma Specialist",
      "Member Nigerian Association of Psychologists",
    ],
    pricing: "N1500 per person",
  },
];

export default therapists;
