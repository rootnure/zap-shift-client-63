import logo from "../../../assets/logo.png";

const ZapFastLogo = () => {
  return (
    <div className="flex items-end">
      <img className="mb-2" src={logo} alt="" />
      <p className="text-3xl font-extrabold -ml-2">ZapFast</p>
    </div>
  );
};

export default ZapFastLogo;