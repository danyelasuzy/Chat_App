// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Video */}
      <video
        src="/dog-video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover  z-0"
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10"></div>

      {/* Hero Text */}
      <div className="relative top-35 z-20 flex items-center justify-center h-screen text-center px-4">
        <h1 className="text-white text-4xl md:text-5xl font-bold font-cursive drop-shadow">
          Connect with Dog Lovers!
          <p className="mt-4 text-white text-sm md:text-xl opacity-65">
            WoofHood is the ultimate community for dog lovers. Chat, share, and
            make new furry friends!
          </p>
          <div className="flex justify-center items-center">
            <Link to="/signup">
              <motion.button
                className="mt-6  bg-purple-600 hover:bg-purple-700 text-white py-3 px-8 rounded-full text-lg "
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Join Now
              </motion.button>
            </Link>
            <Link to="/login">
              <motion.button
                className="mt-6 ml-3 md:ml-6 hover:bg-purple-200 hover:text-black text-white py-3 px-8 rounded-full text-lg border-2 border-white"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Login
              </motion.button>
            </Link>
          </div>
        </h1>
      </div>
    </div>
  );
};
