import { motion } from "framer-motion";
const HomePage = () => {
  return (
    <div className="bg-[#f7f3ff] bg-repeat bg-[length:80px_80px] p-8 rounded-lg">
      <div className="flex flex-col md:flex-row items-center justify-center mt-20 px-8">
        {/* Left Side: Image */}
        <div className="md:w-1/2">
          <img
            src="/ladypark.avif"
            alt="Happy dog"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left px-8">
          <h1 className="text-4xl font-bold text-gray-800">
            Connect with Dog Lovers! 🐾
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            WoofHood is the ultimate community for dog lovers. Chat, share, and
            make new furry friends!
          </p>
          <motion.button
            className="mt-6 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full text-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            Join Now
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
