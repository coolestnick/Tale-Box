import Logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className="text-center footer w-full py-16 px-32">
      <div className="flex items-center justify-center gap-2 mb-6">
        <img src={Logo} alt="logo" /> <p className="text-2xl">TaleBlox</p>
      </div>
      <p className="text-xl">Crafting Dreams, One Chapter at a Time.</p>
      <div className="flex items-center justify-between mt-16">
        <p className="text-white">&copy; 2023 TaleBlox. All rights reserved.</p>
        <div className="flex gap-8">
          <p>Terms and Condition</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
