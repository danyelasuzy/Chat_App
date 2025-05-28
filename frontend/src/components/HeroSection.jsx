import { motion } from "framer-motion";
import { useState } from "react";
import Modal from "../components/Modal";

export default function HeroSection() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalTab, setModalTab] = useState("signup");

  const openModal = (tab) => {
    setModalTab(tab);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-[#f7f3ff] bg-repeat bg-[length:80px_80px] rounded-lg ">
      <div className="flex flex-col md:flex-row items-center justify-center mt-10 md:px-8">
        {/* Left Side: Image */}
        <div className="md:w-3/4">
          <img
            src={`${import.meta.env.BASE_URL}ladypark.avif`}
            alt="Happy dog"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="md:w-1/2 text-center md:text-left md:px-20">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3 flex items-center justify-center md:justify-start gap-2">
            Connect with Dog Lovers! 🐾
          </h1>
          <p className="mt-4 text-gray-600 text-sm md:text-lg">
            WoofHood is the ultimate community for dog lovers. Chat, share, and
            make new furry friends!
          </p>

          {/* Trigger buttons */}
          <div className="flex justify-center md:justify-start">
            <motion.button
              className="mt-6 md:ml-17 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-full text-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => openModal("signup")}
            >
              Join Now
            </motion.button>
            <motion.button
              className="mt-6 ml-3 md:ml-6 bg-purple-200 hover:bg-purple-700 text-black py-3 px-6 rounded-full text-lg border-2 border-purple-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => openModal("login")}
            >
              Login
            </motion.button>
          </div>
          <p className="mt-4 md:ml-21 text-sm text-gray-500">
            Takes less than a minute to join 🐶
          </p>
        </div>
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} initialTab={modalTab} />
    </div>
  );
}
