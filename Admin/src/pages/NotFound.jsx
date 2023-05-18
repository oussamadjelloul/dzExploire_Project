import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
    <section className="flex items-center h-screen w-full lg:p-16 md:p-14 sm:p-12 p-10 bg-[#5C727D] text-white">
	<div className="container flex flex-col items-center justify-center lg:px-5 md:px-4 sm:px-3 px-2  mx-auto lg:my-8 md:my-6 sm:my-4 my-2">
		<div className="max-w-md text-center">
			<h2 className="lg:mb-8 md:mb-6 sm:mb-4 mb-2 font-extrabold lg:text-9xl md:text-[100px] t sm:text-[90px] text-[80px] ">
				<span className="sr-only ">Error</span>404
			</h2>
			<p className="text-2xl  font-semibold md:text-3xl">Sorry, we couldn t find this page.</p>
			<p className="mt-4 mb-8  ">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link  to="/" className="px-8 py-3 font-semibold rounded   text-[#FFFF] hover:bg-blue-800 bg-blue-950">Back to homepage</Link>
		</div>
	</div>
</section> );
}
 
export default NotFound;

