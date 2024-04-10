import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
//import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher';

function Uses() {
  const links = [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "About",
      url: "/about",
    },
    {
      title: "Projects",
      url: "/projects",
    },
    {
      title: "Uses",
      url: "/uses",
    },
  ];


  return (
    <div>
    <div>
      <Navbar
        options={[
          { title: '/', label: 'Home' },
          { path: '/about', label: 'About' },
          { path: '/projects', label: 'Projects' },
          { path: '/uses', label: 'Uses' },
        ]}
      />
    </div>
    <div>

<h1>Software I Use, gadgets I love, and other things i recommend.</h1>
    </div>
    <Footer links={links} />
    </div>
  );

}

export default Uses;
