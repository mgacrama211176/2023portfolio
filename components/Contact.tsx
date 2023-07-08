import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ArrowUpIcon,
} from "@heroicons/react/20/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mgacrama_ccs@uspf.edu.ph?subject=${formData.subject}&body=Hi, my name is ${formData.name}. 
    ${formData.message}`;
  };
  return (
    <div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center">
      <h3 className="absolute top-28 uppercase tracking-[20px] text-3xl text-[#CB890D]">
        Contact
      </h3>
      <div>
        <h4 className="text-xl md:text-2xl xl:text-4xl font-semibold text-center flex flex-col text-[#00255e] mb-5">
          Looking for a Web/Mobile developer?
          <span className="decoration-[#CB890D]/50 underline  text-[#CB890D]">
            Lets Talk
          </span>
        </h4>
        <div className="space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-[#00255e] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">+63 939 681 0206</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-[#00255e] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">Cebu City, Philippines</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#00255e] h-7 w-7 animate-pulse" />
            <p className="text-xl md:text-2xl">mgacrama_ccs@uspf.edu.ph</p>
          </div>
          <form
            className="flex flex-col space-y-2 w-fit mx-auto"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex md:space-x-2 flex-col md:flex-row">
              <input
                placeholder="Name"
                className="contactInput"
                type="text"
                {...register("name")}
              />
              <input
                placeholder="Email"
                className="contactInput"
                type="email"
                {...register("email")}
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              placeholder="Message"
              className="contactInput"
              {...register("message")}
            />
            <button
              className="bg-[#00255e] py-5 px-10 rounded-md text-black font-bold text-lg hover:text-white hover:bg-[#CB890D] transition ease-in-out"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
