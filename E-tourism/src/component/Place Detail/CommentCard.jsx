import user from '../../assets/Place Detail/user.jpg'


const CommentCard = () => {
    return ( 
    <div className="flex sm:flex-row  flex-col justify-center sm:items-center border-b-2 px-8 ">
        <div className="sm:p-10 p-2    h-full">
            <div className="flex justify-center items-center gap-2">
                <div className='rounded-full w-[50px] h-[50px]'>
                    <img src={user} alt="user" className='rounded-full w-full h-full' />
                </div>
                <div className='self-start'>
                    <h3 className='text-[18px] font-bold'>Steve Marker</h3>
                    <h3 className='text-[16px] font-semibold text-[#142361]'>Desginer</h3>
                </div>
            </div>
        </div>
        <div className='p-3 pl-4 flex-1 h-fit overflow-auto sm:border-l-2'>
            <h4 className='text-[16px] w-3/4 sm:mx-0 mx-auto text-left '>Hi. I’m thinking I may have signed up for the <br/> wrong type of blog. I’ve just created a wordpress.com personal blog site (ancestry). I’m just starting the site but am getting notifications that to use ANY plug-ins I need to upgrade to a business account (yikes not inexpensive!). Should I have signed up for WordPress.org??</h4>
        </div>
    </div> );
}
 
export default CommentCard;