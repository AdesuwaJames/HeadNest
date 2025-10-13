import React from "react";
import SupportImg from "../../../assets/Support.png";
import { Link } from "react-router-dom";
import Image1 from "../../../assets/Landing1.png";
import Image2 from "../../../assets/Landing2.png";
import Image3 from "../../../assets/Landing3.png";
import Image4 from "../../../assets/Landing4.png";

const Home = () => {
  return (
    <div className="min-h-screen w-full overflow-x-auto">
      {/* Inner wrapper with a min width so small screens cause horizontal scroll */}
      <div className="min-w-[400px] sm:min-w-[500px] md:min-w-0">
        {/* HERO SECTION */}
        <section className="w-full h-[85vh] flex flex-col items-center justify-center space-y-6 px-6">
          <div className="w-full md:w-[80%]">
            <h1 className="text-4xl font-semibold text-[#38485C]">
              Quiet the world
            </h1>
            <h1 className="text-4xl font-semibold mt-4 text-[#38485C]">
              Listen to the sound of your voice again
            </h1>
            <p className="max-w-lg mt-4 text-xs">
              Life gets loud—outside and within. At Headnest, we offer a gentle
              space where you can pause, reflect and reconnect with yourself.
            </p>
            <button className="bg-[#2c3e50] text-white px-4 py-2 rounded-full hover:bg-[#1a252f] mt-10">
              <Link to="/signup">Create Account</Link>
            </button>
          </div>
        </section>

        {/* TOOLS SECTION */}
        <section className="max-w-6xl mx-auto px-4 py-8">
          <img
            src={SupportImg}
            alt="Support"
            className="w-full h-auto object-cover rounded-xl mb-8"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-[#38485C] text-center mb-8">
            Different tools, one goal: your peace of mind.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-sky-200 rounded-xl p-8 md:p-16 shadow-md md:col-span-2">
              <h3 className="font-semibold text-[#403F3F] text-center text-lg mb-2">
                Care from real professionals
              </h3>
              <p className="text-gray-700 leading-7">
                With access to licensed, compassionate therapists, you can talk
                through what’s on your mind. Whether it’s stress, anxiety, or
                simply needing someone to listen, our professionals are here to
                guide you towards balance and healing.
              </p>
            </div>

            <div className="bg-sky-200 rounded-xl p-8 md:p-16 shadow-md md:col-span-1">
              <h3 className="font-semibold text-[#403F3F] text-lg mb-2 text-center">
                Your journal
              </h3>
              <p className="text-gray-700 leading-7">
                Track your thoughts, feelings and see your growth over time, all
                in a private, judgement-free journal.
              </p>
            </div>

            <div className="bg-sky-200 rounded-xl p-8 md:p-16 shadow-md md:col-span-1">
              <h3 className="font-semibold text-[#403F3F] text-lg mb-2 text-center">
                Track your moods
              </h3>
              <p className="text-gray-700 leading-7">
                Stay in touch with how you feel, one day at a time.
              </p>
            </div>

            <div className="bg-sky-200 rounded-xl p-8 md:p-16 shadow-md md:col-span-2">
              <h3 className="font-semibold text-[#403F3F] text-lg mb-2 text-center">
                Connect without judgement
              </h3>
              <p className="text-gray-700 leading-7">
                Share your experiences and find support in a safe, anonymous
                community where everyone understands and no one has to feel
                alone.
              </p>
            </div>
          </div>
        </section>
         {/* FINAL SECTION */}
        <section className="bg-white py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="flex flex-row items-center gap-8 lg:gap-16">
              {/* Left text */}
              <div className="flex-1 lg:max-w-xl">
                <h2 className="text-3xl md:text-4xl lg:text-[40px] font-semibold text-[#38485C] mb-6 leading-tight">
                  Take the first step towards a clearer mind
                </h2>
                <p className="text-gray-700 text-base md:text-[17px] leading-relaxed">
                  Whether you're a student, a professional, a parent, or simply
                  seeking balance, support is always within reach.
                </p>
                <p className="text-gray-700 text-base md:text-[17px] leading-relaxed mt-4">
                  Life looks different for everyone. Our support adapts to you.
                </p>
              </div>

              {/* Right images (2x2 grid) */}
              <div className="flex-1 flex items-center justify-center lg:justify-end">
                <div className="grid grid-cols-2 gap-3 md:gap-4 w-full max-w-[500px]">
                  <img
                    src={Image1}
                    alt="Support community"
                    className="w-full aspect-square object-cover rounded-2xl"
                  />
                  <img
                    src={Image2}
                    alt="Professional guidance"
                    className="w-full aspect-square object-cover rounded-2xl"
                  />
                  <img
                    src={Image3}
                    alt="Personal growth"
                    className="w-full aspect-square object-cover rounded-2xl"
                  />
                  <img
                    src={Image4}
                    alt="Mental wellness"
                    className="w-full aspect-square object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
