import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="flex items-center text-[#734b91] hover:text-[#F67280] text-sm font-medium mb-4"
    >
      <ArrowLeft className="h-5 w-5 mr-1" />
      Go Back
    </button>
  );
};

export default GoBackButton;
