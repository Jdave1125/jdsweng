import {motion, useScroll} from 'framer-motion'
import AnimatedPage from './AnimatedPage';
import Homepart from './homePart';
import { useState } from 'react';
import Bio from './Bio';
import Contact from './Contact';

const HomePage = () => {

  const {scrollYProgress} = useScroll();
  const [currentCardIndex, setCurrentCardIndex] = useState(0)
  const svevlText = `

  In my role at OSLabs, I spearheaded pivotal enhancements to the 9th iteration of Svelvet, leveraging my expertise in the Svelte framework and Playwright testing suite. Tasked with revitalizing key components, my contributions significantly elevated the functionality, reliability, and user experience of the platform. 
  
  Harnessing the power of the Svelte framework, I meticulously designed and rendered components with a keen focus on reactivity, optimizing DOM manipulation, and seamlessly integrating them into the node-based diagram. This approach not only streamlined performance but also fostered a more intuitive development environment.
  
  Central to my efforts was the overhaul and debugging of the Editor component, where I meticulously addressed significant bugs and non-functional aspects, ensuring unparalleled functionality and reliability. Through strategic restyling and meticulous debugging, I transformed the Editor into a robust and indispensable tool for developers.
  
  Furthermore, I took the initiative to revamp the interlinking node experience, empowering developers and users alike to perform tasks such as node deletion, renaming, and resizing with unprecedented ease. These enhancements not only bolstered overall usability but also significantly boosted efficiency and productivity.
  
  Underscoring my commitment to quality, I doubled the testing coverage from 21 to 45 tests using Playwright, resulting in a remarkable improvement in component functionality and a drastic reduction in production bugs across the library. This achievement not only solidified the platform's stability but also instilled confidence within the community.
  
  Through my contributions to the 9th iteration of Svelvet, I not only navigated an unfamiliar and extensive codebase but also introduced new components, features, and testing methodologies. My dedication to excellence, coupled with a proactive approach to problem-solving, culminated in tangible improvements that continue to resonate within the development community.
  `;

  const k401 = `
  Overview:
  401KApp is a user-friendly web application designed to empower individuals in planning their retirement finances effectively. By leveraging modern technologies, it provides users with insightful estimations of their 401(k) balances as they progress through their career and towards retirement. The application utilizes React for the frontend interface, React Router for client-side routing, Google Charts for dynamic chart generation, and an Express backend integrated with SendGrid for email functionality.
  
  Key Features:
  
  1. Interactive Estimation: Users input their current age, anticipated retirement age, current 401(k) balance, salary, and yearly contribution. The application then generates an estimated total balance at retirement based on these inputs.
  
  2. Dynamic Visualizations: Through Google Charts, users are presented with interactive graphical representations illustrating the projected growth of their 401(k) balance over time, based on the provided data.
  
  3. Detailed Reporting: Users can opt to view a detailed breakdown of their yearly 401(k) balance alongside the graphical representation. This breakdown offers a comprehensive overview of how their contributions and market trends impact their retirement savings trajectory.
  
  4. Email Reporting: For enhanced convenience, users have the option to email themselves a copy of the generated report. By simply clicking the "email me" button, entering their email address, and submitting, the application sends a detailed report to their provided email address.
  
  Technologies Used:
  
  - Frontend: Developed using React.js to create a seamless and responsive user interface, providing an intuitive user experience.
  - Routing: Utilized React Router for efficient client-side routing, ensuring smooth navigation within the application.
  - Chart Generation: Integrated Google Charts API to dynamically generate graphical representations of users' retirement savings projections.
  - Backend: Employed Express.js to handle server-side logic, data processing, and API integrations.
  - Email Functionality: Leveraged SendGrid API to facilitate seamless email communication, enabling users to receive detailed reports directly in their inbox.
  
  User Flow:
  
  1. Input Data: Users provide their current age, retirement age, current 401(k) balance, salary, and yearly contribution.
  2. Generate Estimates: The application processes the input data to generate an estimated total balance at retirement and presents it to the user.
  3. Visual Representation: Users are presented with a dynamic graphical representation of their retirement savings trajectory.
  4. Detailed Report: Users can choose to view a detailed breakdown of their yearly 401(k) balance alongside the graphical representation.
  5. Email Report: For record-keeping and future reference, users have the option to email themselves a copy of the detailed report.
    
  401KApp aims to empower individuals in making informed decisions about their retirement savings, offering them a comprehensive toolset to visualize and plan for a financially secure future.
  `;

  const bioDesc = ` My name is Jeremy David.
  
  As a results-driven professional, I've embarked on a journey akin to a series of dates, exploring various roles from legal consulting and IT help desk support to life coaching and peer counseling. Each endeavor was like a date, offering valuable lessons and insights, but none quite elicited that unmistakable feeling of "knowing" – until I delved into the world of software engineering and web development.

  Much like dating, where we seek that elusive sense of connection and compatibility, my quest for the perfect fit led me through a myriad of experiences. With each role, I gained valuable skills and insights, yet it wasn't until I immersed myself in software engineering that I experienced that profound sense of certainty – the feeling that I had finally found my true calling.
  
  In software engineering, I discovered an unparalleled blend of teamwork, creativity, and challenge – qualities that resonated deeply with me. Just as in a fulfilling relationship, where every moment feels right, software engineering provided the perfect harmony of passion and purpose.

  Currently serving as a Software Engineer at Svelvet, I harness the power of the Svelte framework to craft seamless user experiences. Through overhauling critical components and enhancing testing coverage, I've contributed to the reliability and functionality of our products, minimizing production bugs and optimizing performance. This technical prowess is complemented by a rich tapestry of experiences, including consulting with clients at Harding & Mazzotti, LLP, and troubleshooting technical issues as a Service Desk Technician at Ellis Hospital.
  
  Beyond technical expertise, my journey has instilled in me a deep sense of empathy and understanding. As a life coach and peer counselor, I've honed the ability to forge genuine connections, actively listen, and provide support in diverse situations. This unique blend of technical acumen and empathetic understanding positions me as not only a skilled engineer but also a valuable addition to any team. Eager to continue leveraging my multifaceted background to drive innovation and foster collaborative environments, I am committed to excellence in all aspects of my work.
  
  My goal is to become the best engineer that I can be (both technically and empathetically), in order to contribute to projects that can create a lasting positive impact on society.`
 
  const weiBio = `
  
  Overview:
  Weightr is a versatile application designed to assist users in managing their weight and calorie intake effectively. Through intuitive features and seamless integration, users can input their daily weight and calorie consumption, which is then organized into a comprehensive weekly log. This log provides users with valuable insights into their progress, offering weekly averages for both weight and calorie intake. Weightr ensures data privacy and security by implementing user authentication and authorization features.
  
  Key Features:
  
  1. Daily Tracking: Users can log their daily weight and calorie intake, allowing for a detailed record of their progress over time.
  
  2. Weekly Log: Weightr organizes daily entries into a weekly log, providing users with a clear overview of their weight and calorie trends on a weekly basis.
  
  3. Weekly Averages: The application calculates and displays weekly averages for both weight and calorie intake, enabling users to track their overall progress and make informed decisions regarding their health goals.
  
  4. User Authentication: Implemented with bcrypt and JWTs, Weightr ensures secure user authentication and authorization, safeguarding user data and providing a personalized experience.
  
  5. Database Integration: Utilizing a PostgreSQL database, Weightr stores user log data and login information securely, ensuring reliable data management and retrieval.
  
  Technologies Used:
  
  - Frontend: Developed using React.js, Weightr offers a user-friendly and responsive interface, enhancing user experience and accessibility.
  - Backend: Powered by Express.js, Weightr's backend handles data processing, API integrations, and user authentication, providing a robust foundation for the application.
  - Database: Integrated with a PostgreSQL database, Weightr securely stores user log data and login information, facilitating efficient data management and retrieval.
  - User Authentication: Enhanced with bcrypt for password hashing and JWTs for token-based authentication, Weightr ensures data privacy and user security throughout the application.
  
  User Flow:
  
  1. Daily Input: Users input their daily weight and calorie intake through the application interface.
  2. Weekly Log: Weightr organizes daily entries into a weekly log, providing users with a consolidated view of their progress.
  3. Weekly Averages: Users can view weekly averages for both weight and calorie intake, enabling them to monitor their overall health trends.
  4. User Authentication: Secure login functionality allows users to access their personal data while ensuring data privacy and security.
  5. Data Management: Weightr securely stores user data in a PostgreSQL database, facilitating efficient data retrieval and management.
  
  Weightr empowers users to take control of their health journey by providing a comprehensive platform for tracking weight and calorie intake, backed by robust security measures and user-friendly features.
  `;

  const webBio = `
  Website Description: Personal Portfolio Website
  
  Overview:
  My personal portfolio website serves as a showcase of my skills and projects, providing visitors with insights into my professional background and expertise. Built with React.js on the frontend and Express.js on the backend, the website offers seamless navigation, engaging page transitions powered by Framer Motion, captivating CSS animations and keyframes, and dynamic visual effects with tsParticles. Additionally, the website features a contact form integrated with SendGrid, allowing visitors to reach out directly via email.
  
  Key Features:
  
  1. Portfolio Showcase: Visitors can explore my portfolio to gain a better understanding of my skills, projects, and areas of expertise.
  
  2. About Me: The website provides an overview of my background, experience, and professional interests, enabling visitors to learn more about me as an engineer.
  
  3. Contact Form: Integrated with Express.js and SendGrid, the contact form allows visitors to send direct emails, facilitating communication and inquiries.
  
  4. Seamless Navigation: Utilizing React Router, the website offers smooth client-side navigation, enhancing user experience and accessibility.
  
  5. Engaging Visuals: With Framer Motion for page transitions, CSS animations and keyframes for dynamic effects, and tsParticles for captivating visual elements, the website delivers an engaging and immersive experience for visitors.
  
  Technologies Used:
  
  - Frontend: Developed with React.js, the frontend offers a responsive and intuitive user interface, providing visitors with a seamless browsing experience.
  - Page Transitions: Enhanced with Framer Motion, the website features smooth and visually appealing page transitions, elevating the overall user experience.
  - Visual Effects: Leveraging CSS animations and keyframes, as well as tsParticles for dynamic visual elements, the website captivates visitors with engaging visuals.
  - Backend Integration: Integrated with Express.js, the backend handles the contact form functionality, enabling seamless communication with visitors through SendGrid email integration.
  
  User Flow:
  
  1. Exploration: Visitors navigate through the website to explore my portfolio, learn more about me, and view my projects.
  2. Engagement: Engaging visuals and smooth transitions captivate visitors, enhancing their browsing experience and encouraging further exploration.
  3. Contact: Visitors interested in reaching out can use the contact form to send direct emails, facilitating communication and inquiries.
  
  My personal portfolio website serves as a platform for showcasing my skills, projects, and professional background, providing visitors with valuable insights and opportunities for engagement.
  `;

  const cards = [
    {
      title: 'SVELVET 9.0',
      link: 'https://www.svelvet.io/',
      linkTitle:'WEBSITE',
      description: 'Node Based Component Library for Svelte',
      bio:svevlText,
    },
    {
      title: '401KAPP',
      link: 'https://401kapp.vercel.app/',
      linkTitle:'WEBSITE',
      description: 'calculate and generate reports for your 401k balance',
      bio:k401,
    },
    {
      title: 'WEIGHTR',
      link: 'https://github.com/Jdave1125/Weightr',
      linkTitle:'GITHUB',
      description: 'fitness based tracking app',
      bio:weiBio,
    },
    {
      title: 'THIS WEBSITE',
      description: 'Portfolilo/Personal Website',
      bio:webBio,
      className:'webSite',
    },
  ]

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === cards.length - 1 ? 0 : prevIndex + 1));
  };


  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex === 0 ? cards.length - 1 : prevIndex - 1));
  };

  return (
    <AnimatedPage>

    <Homepart />
    <div className='page-container'>
      
      <div className="links-container">
        <a href="/" className="link active">RETURN TO TITLE</a>
        {/* <a href="/portfolio" className="link">WORKS</a> */}
      </div>
      
      <div className="content-container">
        <h1 className='welcome'>WELCOME</h1>
        <div className='wordHome'>
        <p className='homeQuote'><i>"There's no such thing as a painless lesson-they just don't exist. Sacrifices are necessary. You can't gain anything without losing something first. Although if you can endure that pain and walk away from it, you'll find that you now have a heart strong enough to overcome any obstacle. Yeah... a heart made Fullmetal."</i> - Edward Elric</p>
       
        <div className='collage'>
          <div className='portrait'>
            <div className="photo"></div>
            <h1 className='portraitName'>Jeremy David</h1>
          </div>

          <div className='stats'>
            <h1>Favorite App: Spotify</h1>
            <h1>Favorite Pasttime:Lifting weights while listening to ABBA</h1>
            <h1>Netflix Reccs: Pluto, The Batman, The Elephant Whisperers</h1>
            <h1>Top Dinner Guests:Musashi Miyamoto, Alan Watts, My Grandfather</h1>
            <h1>Favorite Form of Art: Manga - Vagabond, Berserk, Vinland Saga</h1>
            <h1>Quote to live by: 'You are who you choose to be' - The Iron Giant</h1>
          </div>
        </div>

        <div className='hcontain'>
          <Bio className="bioC" text={bioDesc} />
        </div>
     


        </div>
      </div>
       <motion.div
          style={{ opacity: scrollYProgress, transition: 'opacity 1.5s ease-in-out' }}
          className='portfolio-cont'>
          <h1 className='works'>WORKS</h1>
            <div className='expCards'>
              <motion.div className='card'>
                <h1 className='cardTitle'>{cards[currentCardIndex].title}</h1>
                <a className='expLink' href={cards[currentCardIndex].link}>
                  {cards[currentCardIndex].linkTitle}
                </a>
                <h3>{cards[currentCardIndex].description}</h3>
                <hr className='cardHr'/>
                <Bio className="yo" text={cards[currentCardIndex].bio} />
              </motion.div>
            </div>
            <div className='navigation-buttons'>
              <button onClick={handlePrevCard}>PREVIOUS</button>
              <button onClick={handleNextCard}>NEXT</button>
            </div>
          </motion.div>


        <div className='contactContainer'>
          <h1 className='contactTitle'>CONTACT ME</h1>
          <Contact />
        </div>
    </div>


    </AnimatedPage>
  );
};

export default HomePage;