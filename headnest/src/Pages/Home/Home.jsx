import React from "react";
import SupportImg from "../../assets/Support.png";

const Home = () => {
  return (
    <div className="min-h-screen ">
      <section className="w-full h-[85vh] flex flex-col items-center justify-center space-y-6 ">
        <div className="w-full md:w-[80%] px-6">
          <h1 className="text-4xl font-semibold">Quiet the world</h1>
          <h1 className="text-4xl font-semibold mt-4">
            Listen to the sound of your voice again
          </h1>
          <p className="max-w-lg mt-4 text-xs">
            Life gets loud-outside and within. At Headnest, we offer a gentle
            space where you can pause, reflect and reconnect with yourself.
          </p>
          <button className="bg-[#2c3e50] text-white px-4 py-2 rounded-full hover:bg-[#1a252f] mt-10">
            Create Account
          </button>
        </div>
      </section>
      <section className="max-w-6xl mx-auto px-4 py-8">
        <img src={SupportImg} alt="Support" className="w-full h-full object-cover rounded-xl mb-8" />
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Different tools, one goal: your peace of mind.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-sky-200 rounded-xl p-16 shadow-md md:col-span-2">
            <h3 className="font-semibold text-center text-lg mb-2">
              Care from real professionals
            </h3>
            <p className="text-gray-700 leading-7">
              With access to licensed , compassionate therapists, you can talk
              through what’s on your mind. Whether it’s stress, anxiety, or
              simply needing someone to listen, our professionals are here to
              guide you towards balance and healing.
            </p>
          </div>

          <div className="bg-sky-200 rounded-xl p-16 shadow-md md:col-span-1">
            <h3 className="font-semibold text-lg mb-2 text-center">Your journal</h3>
            <p className="text-gray-700 leading-7">
              TTrack your thoughts, feelings and see your growth over time, all
              in a private, judgement-free journal.
            </p>
          </div>

          {/* Bottom row */}
          <div className="bg-sky-200 rounded-xl p-16 shadow-md md:col-span-1">
            <h3 className="font-semibold text-lg mb-2">Track your moods</h3>
            <p className="text-gray-700 leading-7">
              Stay in touch with how you feel, one day at a time.
            </p>
          </div>

          <div className="bg-sky-200 rounded-xl p-16 shadow-md md:col-span-2">
            <h3 className="font-semibold text-lg mb-2 text-center">
              Connect without judgement
            </h3>
            <p className="text-gray-700 leading-7">
              Share your experiences and find support in a safe, anonymous
              community where everyone understands and no one has to feel alone.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 py-12 flex flex-col lg:flex-row items-start gap-10">
          {/* Left text */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 mb-4">
              Take the first step towards a clearer mind
            </h2>
            <p className="text-gray-700 text-[15px] leading-7">
              Whether you’re a student, a professional, a parent, or simply
              seeking balance, support is always within reach. <br />
              Life looks different for everyone. Our support adapts to you.
            </p>
          </div>

          {/* Right images */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Top row: two equal images */}
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6"
                alt="top-1"
                className="w-1/2 h-36 sm:h-44 object-cover rounded-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1551434678-e076c223a692"
                alt="top-2"
                className="w-1/2 h-36 sm:h-44 object-cover rounded-xl"
              />
            </div>

            {/* Bottom row: one tall + one short */}
            <div className="flex gap-4">
              <img
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1"
                alt="bottom-left"
                className="w-1/2 h-56 sm:h-72 object-cover rounded-xl"
              />
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb"
                alt="bottom-right"
                className="w-1/2 h-28 sm:h-36 object-cover rounded-xl self-end"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
