
const ForgotPassword = () => {
    return (
    <div id="login" className="h-screen w-full flex justify-center items-center">
        <div className="flex-col justify-center items-center">
            <div className="relative  shadow-md bg-white rounded-lg  ">
            <div className="p-4   w-[500px]   ">
                    <h3 className="text-[32px] font-extrabold text-center">Forgot Password</h3>
                    <p className="text-[16px] text-[#262626] opacity-75 mt-3">Enter your email and we will Send you a reset link</p>
                    <div className="mt-6 flex-col ">
                        <label htmlFor="email" className="text-[18px] font-semibold">
                            Email
                            <br/>
                        </label>
                        <input id="email" name="email" type="email" placeholder="johnsmith@gmail.com"  className="text-[16px] p-1 px-2 border-2 rounded-md w-full mt-3  focus:border-blue-800 "/>

                    </div>
                    <div className="mt-2 flex justify-center">
                        <button className="py-2 w-fit px-10 mb-4  bg-blue-800 rounded-md hover:bg-blue-950 text-white font-semibold mt-8">
                            Send me the link
                        </button>
                    </div>
                   
                   
                </div>
            </div>
        </div>
    </div> );
}
 
export default ForgotPassword;