import React from "react";
const Header = () => {
 const [isVisible, setIsVisible] = React.useState(false);

 React.useEffect(() => {
  setIsVisible(true);
 }, []);
 return (
  <div className={`text-center py-28 `}>
   <h1
    className={`text-3xl sm:text-6xl font-bold text-white transition-transform duration-1000 ease-out transform ${
     isVisible ? "translate-y-0 opacity-100" : "-translate-y-44 opacity-0"
    }  `}
   >
    <span className="text-[#89F1FF] ">NovaWeb</span> Digital Services
   </h1>
   <div
    className={`font-light text-2xl sm:text-5xl text-center text-white mt-5 sm:mt-8 transition-transform duration-1000 ease-out transform ${
     isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
    }  `}
   >
    <p className="pb-1 max-w-max mx-auto border-b border-white">
     CONECTANDO SUAS IDEIAS
    </p>
    <p>AO MUNDO DIGITAL</p>
   </div>
  </div>
 );
};

export default Header;
