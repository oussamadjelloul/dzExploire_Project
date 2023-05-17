const Adress = () => {
    return ( 
    <div className='w-full  shadow-md mt-6 p-4 bg-white '>
        <h3 className='text-[28px]  font-bold'>Adresse</h3>
        <div className='flex sm:flex-row flex-col justify-center sm:items-center lg:gap-60 md:gap-48  sm:gap-36 gap-4 my-4'>
            <p className='text-[16px] font-semibold'>Adress : <span className='text-[#5C727D] font-normal'>Chemin Omar Kechkar , El Madania</span> </p>
            <p className='text-[16px] font-semibold'>City : <span className='text-[#5C727D] font-normal'>El Madania</span> </p>
            <p className='text-[16px] font-semibold'>State : <span className='text-[#5C727D] font-normal'>Algiers </span> </p>
        </div>
    </div> );
}
 
export default Adress;