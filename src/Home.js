import {useNavigate} from 'react-router-dom';
const Home = () => {
	const navigate = useNavigate();

	return (
		
		<div className="h-screen w-screen items-center justify-center flex">
		<div className="p-6 h-screen w-[400px] flex flex-col gap-y-6 justify-center items-center text-center  shadow-black ">
        <img src="./hero.png" className="h-[250px] w-[280px] lg:h-[310px] lg:w-[335px]" />
        <h1 className="font-semibold text-[44px] lg:text-[48px]">
          All thoughts. One place.
        </h1>
        <p className="text-[16px]">
          Dive right in and clear that mind of yours by writing your thoughts
          down.
        </p>
		<button
		onClick={()=>navigate('/note-list')}
        className="h-12 w-12 rounded-full items-center justify-center bg-black text-white text-[15px] font-semibold"
      >
        <p>{">"}</p>
      </button>
      </div>
	  </div>
	);
};

export default Home;
