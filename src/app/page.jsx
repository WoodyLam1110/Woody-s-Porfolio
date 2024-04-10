import Navbar from '../components/NavBar/Navbar';
import Footer from '../components/Footer/Footer';
import ProjectCard from '../components/ProjectCard/ProjectCard';

function Home() {
  const links = [
    {
      title: 'Home',
      url: '/',
    },
    {
      title: 'About',
      url: '/about',
    },
    {
      title: 'Projects',
      url: '/projects',
    },
    {
      title: 'Uses',
      url: '/uses',
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
      <ProjectCard
        name={'Class CS-220 Final Project'}
        logo={'/ensign.png'}
        content={
          'In this project, students are tasked with developing a portfolio website using Next.js and TailwindCSS, guided by a specific Figma design. The assignment begins with preparatory steps like familiarizing with relevant documentation and setting up the development environment, including Git configurations. The core objective is to craft a responsive webpage that accurately reflects the Figma layout, leveraging TailwindCSS for styling. Additional challenges include implementing a theme switcher for extra credit. Students will demonstrate their proficiency by organizing clean, well-documented code and committing their work to GitHub, with evaluation criteria focusing on layout accuracy, responsiveness, and coding practices.'
        }
        link={'https://www.ensign.edu/'}
      />

    </div>
    <Footer links={links} />
    </div>
  );
}

export default Home;
