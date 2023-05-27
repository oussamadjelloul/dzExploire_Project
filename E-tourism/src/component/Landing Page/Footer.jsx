import gg from '../../assets/Landing Page/github.png.png'
import dd from '../../assets/Landing Page/discord-logo--v1.png.png'
import mm from '../../assets/Landing Page/gmail-new.png.png'
import pp from '../../assets/Landing Page/phone.png.png'
import ww from '../../assets/Landing Page/whatsapp--v1.png.png'

const Footer = () => {
    return ( 
        <div className=" ">
              <div className='bg-[#142361] '>
              <div className="flex space-between px-8 py-10">
                    <div className='w-[80vw] pr-10 border-r-2 hidden md:block'> 
                          <div className="font-bold text-2xl text-[#FFFFFF] ">Roadie</div>
                          <div className="text-[#A4B9E7] text-sm">Discover New Destinations. See breath-taking places and experience them from your device online.
                               Our travel writing captures the one thing we always strive to create – incredible travel experiences. From learning
                               about the historical and political context of a destination to finding some really great hikes, each new place has
                               something to discover.
                               We have a passion for storytelling, a knack for putting itineraries together and a strong desire to have fun. Here are
                               all our adventures, our travel tips and our guides.</div>
                    </div>
                    <div className=''>
                         <div className="font-bold text-2xl text-[#FFFFFF] flex justify-center">Contact</div>
                         <div  className="text-[#A4B9E7] text-sm pl-8">If you want to make any inquiries about the website, you can contact me through below options</div>
                         <div className='flex justify-between px-6 pt-4'>
                               <div><img src={gg} alt="gg" /></div>
                               <div><img src={ww} alt="ww" /></div>
                               <div><img src={pp} alt="pp" /></div>
                               <div><img src={mm} alt="mm" /></div>
                               <div><img src={dd} alt="dd" /></div>
                             
                         </div>
                    </div>
               </div>
              </div>
               <div className="bg-[#CA7717] flex justify-center py-2 "><p className="text-[#FFFFFF] pr-2">This website is designed and developed by </p><p className="text-[#142361]">DZXplore</p> </div>
        </div>
     );
}
 
export default Footer;
