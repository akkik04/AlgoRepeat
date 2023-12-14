import { Link } from 'react-router-dom';

export const EntryNavbar = () => {
    return (
        <div className="fixed top-0 left-0 w-full bg-white border-b border-gray-100 z-10">
            <div className="flex justify-between items-center px-16 py-4 sm:px-4">
                <Link to="/">
                    <h2 className="text-2xl font-bold font-inter cursor-pointer">AlgoRepeat</h2>
                </Link>
                <div className="flex items-center gap-4">
                    <Link to="/about">
                        <button className="text-black p-2 cursor-pointer transition-all duration-300 hover:border-gray-300 border border-transparent rounded-full hover:bg-gray-100">
                            About
                        </button>
                    </Link>
                    <Link to="/signup">
                        <button className="text-black p-2 cursor-pointer transition-all duration-300 hover:border-gray-300 border border-transparent rounded-full hover:bg-gray-100">
                            Sign Up
                        </button>
                    </Link>
                    <Link to="/login">
                        <button className="text-black p-2 cursor-pointer transition-all duration-300 hover:border-gray-300 border border-transparent rounded-full hover:bg-gray-100">
                            Log In
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};
