import Head from 'next/head'
import Header from 'components/Header'
import Hero from 'components/Hero'
import About from 'components/About'
import Skills from 'components/Skills'
import Contact from 'components/Contact'
import Project from 'components/Project'
import Footer from 'components/Footer'

 
export default function Home() {
  return (
    <div className='  text-white h-screen  snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0   '>
      <Head>
        <title>Raushan Sharma</title>    
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"></link>
       </Head>
       <Header/>
        
          <Hero/>
     
      
        <About/>
      
        
        <Skills/>
       
        <Project/>
       
        
          <Contact/>         
         
          <Footer/>
       
    </div>
  )
}
