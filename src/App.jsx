import Header from './componentes/1-header/Header'
import Hero from './componentes/2-hero/Hero'
import Main from './componentes/3-main/Main'
import Contact from './componentes/4-contact/Contact'
import Footer from './componentes/5-footer/Footer'




function App() {


   return (
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
   )
 }
 
 export default App
 