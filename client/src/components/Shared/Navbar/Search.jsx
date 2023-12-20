import { BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="hidden md:block w-full md:w-auto py-2 rounded-full shadow-sm transition cursor-pointer">
      <div className=" flex flex-row items-center justify-between space-x-4">
        <div className="text-[16px] font-bold px-6 ">
          <Link to="/">Home</Link>
        </div>
        <div className="text-[16px] font-bold px-6 ">
          <Link to="colleges">Colleges</Link>
        </div>
        <div className="text-[16px] font-bold px-6 ">
          <Link to="/admission">Admission</Link>
        </div>
        <div className="text-[16px] font-bold px-6 ">
          <Link to="/myCollege">My College</Link>
        </div>
      </div>
    </div>
  );
};

export default Search;
