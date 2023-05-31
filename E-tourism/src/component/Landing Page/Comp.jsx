import mm from '../../assets/Landing Page/cmpimg.png'
import ll from '../../assets/Landing Page/location.png.png'
const Comp = () => {
    return ( 
        <div className='flex flex-col justify-center items-center'> 

                    <div className="sm:mx-5 w-fit bg-[#EDF0FD] border-2 w-[300px]  md:w-[320px] lg:w-[350px]" >
                        <div className=' relative h-fit  ' >
                           <img src={mm} href='mm'  className='w-full' />

                               <div className='w-fit px-2 py-0.5 absolute bottom-2 right-2 flex items-center justify-between  bg-[#142361] opacity-[90%] rounded-lg'>
                                    <div><img src={ll} href='ll' /></div>
                                    <p className='text-[#EDF0FD] sm:text-[16px] text-[14px]' >tizi-ouzou</p>
                               </div>
                       </div>
                     <div className='w-fit'>
                         <div className='py-2 p-4 text-[#142361]'>Ella</div>
                          <div className='sp-4 pb-2 text-[#4D608A] text-center'>kdsjfkljqLorem ipsum dolor sit amet, conseda eleifend ex. Morbi rhoncus felis metus, a tempor risus ultrices lobortis. Suspendisse eget lectus libero. Nam semper posuere urna et semper. Duis nec lorem eget ante pretium accumsan.</div>
                      </div>
            
                 </div>


                 {/* <div className="mx-5 w-[40vw] bg-[#EDF0FD] border-2 hidden md:block lg:hidden">
                        <div className=' relative h-fit' >
                           <img src={mm} href='mm'   />

                               <div className='w-[15vw] px-2 py-0.5 absolute bottom-2 right-2 flex items-center justify-between  bg-[#142361] opacity-[90%] rounded-lg'>
                                    <div><img src={ll} href='ll' /></div>
                                    <p className='text-[#EDF0FD]'>tizi-ouzou</p>
                               </div>
                       </div>
                     <div className=''>
                         <div className='py-2 pl-5 text-[#142361]'>Ella</div>
                          <div className='pl-8 text-[#4D608A] text-center'>kdsjfkljqLorem ipsum dolor sit amet, conseda eleifend ex. Morbi rhoncus felis metus, a tempor risus ultrices lobortis. Suspendisse eget lectus libero. Nam semper posuere urna et semper. Duis nec lorem eget ante pretium accumsan.</div>
                      </div>
            
                 </div> */}

            
        </div>
  
     );
}
 
export default Comp;