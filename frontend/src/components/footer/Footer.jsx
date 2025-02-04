import {assets} from "../../assets/assets";

const Footer = () => {
  return (
    <div className="bg-gray-500/60" id="contact">
      <div className="content flex justify-between p-20 ">
        <div className="w-1/2 space-y-8">
          <img className="" src={assets.logo} alt="" />
          <p className="">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            aperiam fugit deserunt, doloribus, explicabo cumque illo eaque sed
            nobis possimus vitae obcaecati nostrum sequi numquam accusamus
            blanditiis. Ipsum, distinctio saepe voluptatum veniam assumenda
            totam amet!
          </p>
          <div className="flex items-center space-x-3">
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>

        <div className="">
          <h1 className="font-medium text-2xl">CONPANY</h1>
          <ul className="mt-8 space-y-2 font-medium">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div className="">
          <h1 className="font-medium text-2xl mb-8 space-y-2">GET IN TOUCH</h1>
          <p className="font-medium">+212 069-487-5213</p>
          <p className="font-medium">contact@food.com</p>
        </div>
      </div>

      <div className="text-center">
        <p>
          Copyright 2025 © Food.com - All Right Reserverd.
        </p>
      </div>
    </div>
  );
}

export default Footer