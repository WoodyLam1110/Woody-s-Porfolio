import Navbar from "@/components/NavBar/Navbar";
import Footer from "@/components/Footer/Footer";
//import ThemeSwitcher from '../components/ThemeSwitcher/ThemeSwitcher';

function Projects() {
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
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/uses", label: "Uses" },
          ]}
        />
            <div class="card">
  <div class="content">
    <h2>Company</h2>
    <p>Creating technology to empower civilians to explore space on their own terms.</p>
    <a href="https://company.com">https://company.com</a>
  </div>
</div>
      </div>
      <div></div>
      <Footer links={links} />
    </div>
  );
}

export default Projects;
