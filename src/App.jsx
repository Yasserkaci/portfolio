import Header from './componentes/1-header/Header'
import Hero from './componentes/2-hero/Hero'
import Card from './componentes/3-cards/Card'
import Main from './componentes/4-main/Main'
import Contact from './componentes/5-contact/Contact'
import Footer from './componentes/6-footer/Footer'
import { Helmet,  } from 'react-helmet-async';





function App() {


   return (
      <>
         <Helmet>
            <link rel="icon" type="image/svg+xml" href="/me.jpg" />
            <meta name="description" content="Welcome to Unixes! Your one-stop shop for freelance services. From writing to marketing, design, websites, and more, we've got you covered. Our team ensures quality results to bring your ideas to life. Let's work together and make it happen!"/>
            <meta name="keywords" content="html,CSS,JavaScript,web services, freelancing,web dev, webdev, web development, unixes, Unixes,unixes.org,agancy, video editing, logo desighn "/>
            <meta name="author" content="yaser kaci"/>
         </Helmet>
         <div className='contaner'>     
            <Header />
            <Hero />
          
            <div className="divider"/>
            <Main />
            <div className="divider"/>
            <Contact />
            <div className="divider"/>
            <Footer/>
         </div>
      </>
   )
 }
 
 export default App
 