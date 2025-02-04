import {assets} from "../../assets/assets"

export const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-3 md:px-6 py-3">
      <img className="logo w-[180px] min-w-[140px]" src={assets.logo} alt="" />
      <img className="profile size-12" src={assets.profile_image} alt="" />
    </div>
  );
}
