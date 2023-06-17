const Description = ({place}) => {
    return ( 
<div className='w-full  shadow-md mt-6 p-4 bg-white '>
    <h3 className='text-[28px]  font-bold'>Description</h3>
    <p className='mt-4 text-[16px] '>
        {place.description}
    </p>
</div> );
}
 
export default Description;