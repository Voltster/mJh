import PrimaryButton from "../common/PrimaryButton";

const Hero = () => {
  return (
    <div className=" h-[80vh]  flex flex-col justify-center items-center gap-4 ">
      <div className=" relative heroBg " data-aos="fade-up"></div>
      <h1
        className="text-[5rem] leading-[4rem]  font-semibold  text-center  mx-auto -mt-[7.6rem] z-10 relative w-1/2"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        The finest{" "}
        <span className="bg-gradient-to-r font-bold from-[#db3700] to-[#fe5628] text-transparent bg-clip-text">
          Pharama
        </span>{" "}
        ever
      </h1>
      <p
        className="text-center w-1/2 mx-auto"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        MHJ is a manufacturing company in the pharmaceutical industry with an
        extensive range of products that include generic ad branded
        formulations, biotechnology products, and advanced drug delivery systems
        (adds).
      </p>
      <PrimaryButton className={"mt-8"} >
        Learn More
      </PrimaryButton>
    </div>
  );
};

export default Hero;

// import React from "react";

// const Hero = () => {
//   return (
//     <section className="p-8 bg-gray-50">
//       <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
//         <div className="md:w-1/2 p-4">
//           <h2 className="text-4xl font-bold mb-4">
//             We're changing the way people connect.
//           </h2>
//           <p className="text-gray-700 mb-6">
//             Cupidatat minim id magna ipsum sint dolor qui. Sunt sit in quis
//             cupidatat mollit aute velit. Et labore commodo nulla aliqua proident
//             mollit ullamco exercitation tempor. Sint aliqua anim nulla sunt
//             mollit id pariatur in voluptate cillum. Eu voluptate tempor esse
//             minim amet fugiat veniam occaecat aliqua.
//           </p>
//         </div>
//         <div className="md:w-1/2 grid grid-cols-3  gap-4">
//           <img
//             src="https://img.freepik.com/free-photo/examining-sample-with-microscope_1098-18424.jpg?t=st=1721364033~exp=1721367633~hmac=908d885b61b233e743c870c090b7da405baed1822ce152d3f6400856641e2df8&w=996"
//             alt="Image 1"
//             className="rounded-lg shadow-lg"
//           />
//           <img
//             src="https://img.freepik.com/free-photo/examining-sample-with-microscope_1098-18424.jpg?t=st=1721364033~exp=1721367633~hmac=908d885b61b233e743c870c090b7da405baed1822ce152d3f6400856641e2df8&w=996"
//             alt="Image 2"
//             className="rounded-lg shadow-lg"
//           />
//           <img
//             src="https://img.freepik.com/free-photo/examining-sample-with-microscope_1098-18424.jpg?t=st=1721364033~exp=1721367633~hmac=908d885b61b233e743c870c090b7da405baed1822ce152d3f6400856641e2df8&w=996"
//             alt="Image 3"
//             className="rounded-lg shadow-lg"
//           />
//           <img
//             src="https://img.freepik.com/free-photo/examining-sample-with-microscope_1098-18424.jpg?t=st=1721364033~exp=1721367633~hmac=908d885b61b233e743c870c090b7da405baed1822ce152d3f6400856641e2df8&w=996"
//             alt="Image 4"
//             className="rounded-lg shadow-lg"
//           />
//           <img
//             src="https://img.freepik.com/free-photo/examining-sample-with-microscope_1098-18424.jpg?t=st=1721364033~exp=1721367633~hmac=908d885b61b233e743c870c090b7da405baed1822ce152d3f6400856641e2df8&w=996"
//             alt="Image 4"
//             className="rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
