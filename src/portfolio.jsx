import {motion, useScroll} from 'framer-motion'


const Portfolio = () => {
  const {scrollYProgress} = useScroll();


  return (
    <motion.div className='page-container'>  
    {/* initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}> */}
    <div className="links-container">
        <a href="/" className="link">RETURN TO TITLE</a>
        <a href="/home" className="link ">HOME</a>
        <a href="/portfolio" className="link active">WORKS</a>
      </div>


        <motion.h1 className='resume'>WORKS</motion.h1>

        <div className='expBox'>
          <div className='exp1'>
            <div className='leftExp'>
            <span><p className='expTitle'>SVELVET 9.0</p><i className='italic'>a node based component library for Svelte </i></span>
            </div>
            <hr className='expHR'></hr>
            <div className='expLinks'>
                <a className='git' href='https://github.com/open-source-labs/Svelvet'>GITHUB </a> 
                <a href='https://www.svelvet.io/'>SVELVET</a>
            </div>
            <motion.div className='expContent' style={{ width: '900px', height: '400px', overflowY: 'scroll',opacity:{scrollYProgress} }}>
            <p>Svelvet came to me as an open source opportunity sdjfnoajsfnoasjnd asodjn asojdn oajsnd aosjd nasodjn asojdn asdjo n aosjn asjodn asoj nas ojnasd jon oasjndoj nasdjonsadoj oajsnc asoj cn ascojn asojn cjason csaojn sajon cjosanc asocjn aosj noasjcno ask kascno jnoasjcnoasjcno aj ns aosjcn ojn oasjnc ojnc oajsncojn oajsncojansojc n</p>
            <hr ></hr>
            <p>here is images</p>
            <p>here is images</p>
            <p>here is images</p>
            <p>here is images</p>
   

            </motion.div>
         </div>


         <motion.div className='exp' >
            <div className='leftExp'>
            <span><p className='expTitle'>SVELVET 9.0</p><i className='italic'>a node based component library for Svelte </i></span>
            </div>
            <hr className='expHR'></hr>
            <div className='expLinks'>
                <a className='git' href='https://github.com/open-source-labs/Svelvet'>GITHUB </a> 
                <a href='https://www.svelvet.io/'>SVELVET</a>
            </div>
            <motion.div className='expContent' style={{ width: '900px', height: '400px', pathLength: scrollYProgress, overflowY: 'scroll',opacity:{scrollYProgress} }}>
            <p>Svelvet came to me as an open source opportunity sdjfnoajsfnoasjnd asodjn asojdn oajsnd aosjd nasodjn asojdn asdjo n aosjn asjodn asoj nas ojnasd jon oasjndoj nasdjonsadoj oajsnc asoj cn ascojn asojn cjason csaojn sajon cjosanc asocjn aosj noasjcno ask kascno jnoasjcnoasjcno aj ns aosjcn ojn oasjnc ojnc oajsncojn oajsncojansojc n</p>
            <hr ></hr>
            <p>here is images</p>
            <p>here is images</p>
            <p>here is images</p>
            <p>here is images</p>
            <p>here is images</p>
            <p>here is images</p>
            <p>here is images</p>
            <p>here is images</p>
            <p>here is images</p>
            <p>here is images</p>
            <p>here is images</p>
            <p>here is images</p>
            </motion.div>
         </motion.div>


         <motion.div className='exp'>
            <div className='leftExp'>
            <span><p className='expTitle'>SVELVET 9.0</p><i className='italic'>a node based component library for Svelte </i></span>
            </div>
            <hr className='expHR'></hr>
            <div className='expLinks'>
                <a className='git' href='https://github.com/open-source-labs/Svelvet'>GITHUB </a> 
                <a href='https://www.svelvet.io/'>SVELVET</a>
            </div>
            <motion.div className='expContent' style={{ width: '900px', height: '400px',  pathLength: scrollYProgress, overflowY: 'scroll' }}>
            <p>Svelvet came to me as an open source opportunity sdjfnoajsfnoasjnd asodjn asojdn oajsnd aosjd nasodjn asojdn asdjo n aosjn asjodn asoj nas ojnasd jon oasjndoj nasdjonsadoj oajsnc asoj cn ascojn asojn cjason csaojn sajon cjosanc asocjn aosj noasjcno ask kascno jnoasjcnoasjcno aj ns aosjcn ojn oasjnc ojnc oajsncojn oajsncojansojc n</p>
            <hr ></hr>
            <p>here is images</p>
            <p>here is images</p>
            <p>here is images</p>
            <p>here is images</p>
            </motion.div>
         </motion.div>
         </div>

    </motion.div>
  );
};

export default Portfolio;