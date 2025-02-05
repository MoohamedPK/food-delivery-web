import {assets} from "../../assets/assets";

const Footer = () => {
  return (
    <div className="bg-black text-neutral-400" id="contact">
      <div className="content flex flex-col md:flex-row md:justify-around py-10">
        <div className="md:w-1/2 flex flex-col items-center text-center space-y-6">
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

        <div className="mt-8 md:mt-0 mx-auto">
          <h1 className="font-medium text-xl">CONPANY</h1>
          <ul className="mt-6 space-y-1 font-medium">
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div className="mx-auto my-7">
          <h1 className="font-medium text-xl mb-6 space-y-2">GET IN TOUCH</h1>
          <p className="font-medium">+212 069-487-5213</p>
          <p className="font-medium">contact@food.com</p>
        </div>
      </div>

      <div className="text-center">
        <p>Copyright 2025 © Food.com - All Right Reserverd.</p>
      </div>
    </div>
  );
}

export default Footer