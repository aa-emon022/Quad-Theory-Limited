import Banner from '@/components/Banner/Banner'
import Footer from '@/components/Footer/Footer'
import IndexWrap from '@/components/IndexWrap'
import NavBar from '@/components/NavBar/NavBar'


export default function Home() {
  return (
   <div className='bg-gray-200'>
    <NavBar/>
    <Banner/>
    <IndexWrap/>
    <Footer/>
   </div>
  )
}

export async function generateMetadata(){
 
  return{
    title: "Home",
  }

}