import Logo from "../assets/logo.svg";
import Menu from "../assets/hamburger.png";
import { createRef } from "react";
import { useIdentity } from "../context/AppContext";
import { IILogin, IILogout } from "../utils/auth";
import { trimAddress } from "../utils";

function Navbar() {
  const ref = createRef<HTMLUListElement>();
  const { identity, setIdentity } = useIdentity();

  const handleClick = () => {
    if (ref.current) {
      ref.current.style.display =
        ref.current.style.display === "block" ? "none" : "block";
    }
  };

  const handleLogout = () => {
    IILogout().then(() => {
      setIdentity("");
    });
  };

  const handleConnect = () => {
    IILogin().then((id) => setIdentity(id));
  };

  return (
    <div>
      <div className="flex items-center px-24 py-8 mb-8 justify-between text-white">
        <a href="/">
          <div className="flex items-center gap-2">
            <img src={Logo} className="h-8" alt="logo" />
            <p className="text-2xl font-medium">Taleblox</p>
          </div>
        </a>
        <div className="flex items-center gap-8">
          <ul className="list-none md:flex items-center hidden gap-8">
            <li className="text-lg">
              <a href="/#about">About</a>
            </li>
            <li className="text-lg">
              <a href="/#how-to">How It Works</a>
            </li>
            <li className="text-lg">
              <a href="/stories">Explore</a>
            </li>
            <li className="text-lg">
              <a href="/create">Create</a>
            </li>
          </ul>
          {identity ? (
            <p onClick={handleLogout}>{trimAddress(identity)}</p>
          ) : (
            <button onClick={handleConnect} className="hidden md:block">
              Connect Wallet
            </button>
          )}
        </div>

        <div className="md:hidden block" onClick={handleClick}>
          <img src={Menu} className="h-12" alt="menu" />
        </div>
      </div>
      <ul className="list-none hidden gap-x-6 pb-4 bg-white pl-8" ref={ref}>
        <li className="text-xl mb-2" onClick={handleClick}>
          <a href="/#how-to" data-te-smooth-scroll-init>
            How To
          </a>
        </li>
        <li className="text-xl mb-2" onClick={handleClick}>
          <a href="/#about">About</a>
        </li>
        <li className="text-xl mb-2" onClick={handleClick}>
          <a href="/stories">Explore</a>
        </li>
        <li className="text-xl mb-2" onClick={handleClick}>
          <a href="/create">Create</a>
        </li>
        {identity ? (
          <p onClick={handleLogout}>{trimAddress(identity)}</p>
        ) : (
          <button onClick={handleConnect}>Connect Wallet</button>
        )}
      </ul>
    </div>
  );
}

export default Navbar;
