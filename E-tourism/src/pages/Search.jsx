import NavBar from "../component/Landing Page/NavBar";
import { SearchComponent } from "../component/Search/SearchComponent";

const Search = () => {
    return ( 
    <>
        <NavBar />
        <div className='w-screen h-screen text-[#333] bg-[##F8F8F8]'>
            <div className='h-[15vh]'></div>
            <SearchComponent/>
        </div>

    </> );
}
 
export default Search;