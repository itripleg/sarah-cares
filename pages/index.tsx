import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      {/* Background container */}
      <div className="bg-gradient-to-t from-purple-500 bg-blue-300 h-screen p-20 flex mx-auto items-center justify-center">
        {/* Header */}
        <div className="">
          <div className="flex">
            <h1 className="text-8xl text-purple-800 pb-20">Sarah Cares Avl</h1>
            <div className="pl-20 text-4xl text-white mt-2">
              <p>Contact me!</p>
              <p>828-555-5555</p>
            </div>
          </div>
          {/* Intro */}
          <div className="flex">
            <Image
              src="/sarah.jpg"
              width={200}
              height={200}
              className="rounded-full"
            />
            <div className="flex pl-20 content-center items-center">
              <p>
                Let me take care of your needs so you don't have to worry about
                your week.
              </p>
            </div>
          </div>
          {/* Services */}
          <div className="flex justify-end pb-6">
            <div className="flex pr-20 items-center">
              <ul className="list-disc">
                <li>House Services</li>
                <li>Pet Sitting</li>
                <li>Errand pickup</li>
              </ul>
            </div>
            <Image
              src="/sarah.jpg"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="flex flex-col content-center items-center bg-purple-900 w-full py-6 ">
        <div className="">
          <a href="https://www.facebook.com/sarah.gibbs.165685">
            Check out my Facebook
          </a>
        </div>
        <div>
          <a className="">Check out my Insta</a>
        </div>
      </div>
    </>
  );
};

export default Home;
