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
          <h1 className="text-6xl text-purple-800 pb-20">Sarah Cares Avl</h1>
          {/* Intro */}
          <div className="flex">
            <Image
              src="/sarah.jpg"
              width={200}
              height={200}
              className="rounded-full"
            />
            <div className="pl-20">
              <p>
                Let me take care of your needs so you don't have to worry about
                you week.
              </p>
            </div>
          </div>
          <div className="py-20"></div>
          {/* Services */}
          <div className="flex">
            <div className="pl-20 ">
              <ul>
                <li>thing 1</li>
                <li>thing 1</li>
                <li>thing 1</li>
              </ul>
            </div>
            <Image
              src="/sarah.jpg"
              width={200}
              height={200}
              className="rounded-full"
            />
          </div>
          {/* Footer */}
          <div className="">
            <a href="https://www.facebook.com/sarah.gibbs.165685">
              Check out my facebook
            </a>
          </div>
          <div className="">Check out my insta</div>
        </div>
      </div>
    </>
  );
};

export default Home;
