const AddComment = () => {
    return ( 
    <div>
        <h3 className='text-[20px]  text-[#121797] font-bold ml-3 mt-3'>Add Comment</h3>
        <p className="text-[#404040] ml-6 text-[16px]">Required fields are marked *</p>
        <div className="mt-3 ml-6">
           <div className="w-full">
                <label htmlFor="comment" className="text-[#404040] text-[16px] ">
                        Comment *
                </label>
                <br/>
                <textarea id="comment" name="comment" rows="6" className="md:w-3/4 w-full mt-2 text-black text-[16px] bg-white rounded-sm  border-2 p-2"  ></textarea>
           </div>
            <div className="w-full flex justify-start items-center gap-0">
                <label htmlFor="name" className="text-[#404040] text-[16px] w-[100px]">
                     Name *
                </label>
                <input type="text" id="name" name="name"  className=" mt-2 text-black text-[16px] bg-white rounded-sm md:w-2/4 w-full  border-2 p-1 ml-2"  ></input>
            </div>
            <div className="w-full flex justify-start items-center gap-0">
                <label htmlFor="name" className="text-[#404040] text-[16px] w-[100px] ">
                    Job *
                </label>
                <input type="text" id="name" name="name"  className=" mt-2 text-black text-[16px] bg-white rounded-sm md:w-2/4 w-full  border-2 p-1 ml-2"  ></input>
            </div>
            <div className="flex justify-start">
                <button className="p-2 bg-[#0D23E5] px-4 font-semibold text-white rounded-md  mt-3 hover:cursor-pointer hover:bg-[#0e1978] ">Submit</button>
            </div>
            
        </div>
    </div> );
}
 
export default AddComment;