import Header from './componentes/1-header/Header'
import Hero from './componentes/2-hero/Hero'
import Card from './componentes/3-cards/Card'
import Main from './componentes/4-main/Main'
import Contact from './componentes/5-contact/Contact'
import Footer from './componentes/6-footer/Footer'




function App() {


   return (
      <div className='contaner'>     
         <Header />
         <Hero />
         <div className="divider"/>
         <Card/>
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
 