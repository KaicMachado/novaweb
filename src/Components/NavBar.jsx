import NovaWebLogo from "../assets/logo.png";
import LogoWhats from "../assets/logo-whats.svg";
const NavBar = () => {
 return (
  <nav>
   <div className="flex text-white justify-around items-center p-6">
    <img src={NovaWebLogo} className="hidden sm:block" alt="Logo Nova Web" />
    <ul className=" flex justify-between gap-6 sm:gap-12 font-light text-2xl">
     <li>
      <a href="#">Home</a>
     </li>
     <li>
      <a href="#servicos">Serviços</a>
     </li>
     <li>
      <a href="#projetos">Projetos</a>
     </li>
    </ul>
    <a
     target="_blank"
     href="https://api.whatsapp.com/send?phone=+5516992967026&text=Ol%C3%A1%2C+gostaria+de+fazer+um+orcamento"
     className="p-3 border rounded-xl gap-4 hidden sm:flex font-light"
    >
     <img src={LogoWhats} width={25} alt="Logo do Whatsapp" />
     <button>Contato</button>
    </a>
   </div>
  </nav>
 );
};

export default NavBar;
