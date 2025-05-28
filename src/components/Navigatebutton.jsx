import { useNavigate } from "react-router-dom";
import AnimatedTitle from "./AnimatedTitle";

const NavigateButton = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className="h-200 flex flex-col items-center justify-center text-center"> 
      <AnimatedTitle
        title="<b>Click t<b>he butt<b>o</b>n to <br /> E<b>n</b>ter <b>a</b>ren<b>a"
        containerClass="mt-5 !text-black"
      />
      <button
        onClick={handleClick}
        className="mt-6 bg-teal-500 text-white font-bold text-xl px-10 py-3 rounded-xl shadow-md hover:brightness-110 transition-all"
        style={{
          minWidth: "220px",
          textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
        }}
      >
        BATTLE ARENA 
      </button>
    </div>
  );  
};

export default NavigateButton;
