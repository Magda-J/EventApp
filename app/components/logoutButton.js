import React , { useEffect , useState } from 'react';

const LogoutButton = ({setToken}) => {
    const [isOnline, setIsOnline] = useState(true);

    const handleLogout = () => {
        localStorage.setItem("token", undefined);
        setToken(null);
        setIsOnline(false);
    }

    useEffect(() => {
        console.log("Logging out");
    }, [isOnline])

    return (
        <button className="bg-[#D6CE93] text-[#2E2E2E] hover:bg-[#DFC2F2] px-4 py-2 rounded transition duration-200 ease-in-out"
        onClick={handleLogout}>            
        Logout
        </button>
    );
};

export default LogoutButton;