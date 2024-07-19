import heroBg from "../assets/p1.png";
import videoBg from "../assets/video.mp4";
import Card from "../components/common/Card";
import Hero from "../components/Home/Hero";
import mjh from "../assets/mjh2.png";
import icon1 from "../assets/Icon1.svg";
import icon2 from "../assets/Icon2.svg";

const Home = () => {
  return (
    <div className="py-1 container h-screen relative">
      <div className="my-20 w-11/12  mx-auto">
        <Hero />
        {/* section2 */}
        <div className="heroBg2 flex justify-center items-center">
          <video
            autoPlay
            loop
            muted
            className=" inset-0 w-[53%] rounded-md object-cover "
            data-aos="zoom-in-up" data-aos-delay="200"
          >
            <source src={videoBg} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Card />
        <div className="w-11/12 flex mt-20 gap-8">
          <div className="w-1/2" data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-4xl font-bold mb-2">OFFERING EXCEPTIONAL EMINENCE AND PROTECTION FOR WELL-BEING</h2>
            <p>
              MHJ PHARMACONCEPTS is a company that has been accredited by
              WHO-GMP, and is involved in fulfilling medical requirements across
              the world by offering a range of top-grade medical products that
              are aimed at enhancing the quality of life.<br/> We thrive in the
              direction of development in a way where we can bring bold
              competition to some of the world's most expensive medicines by
              developing generics.<br/> Therefore, we are facilitating access to
              superior class of generic medicines for a greater number of
              patients around the world with critical ailments. We also provide
              access to our high-quality and finest generic versions of our
              medications to the entire world manufactured under most pioneered
              plant with highly trained professionals who follow EU-GMP, PIC/s,
              US-FDA and TGA-AUSTRALIA standards. <br/> As a result, we have been
              trusted by health care proficient and patients across the globe
              over the years.
            </p>
            <div className="flex  items-center mt-8 border-t gap-x-12 py-2" data-aos="zoom-in-up" data-aos-delay="200" data-aos-offset="50">
              <div className="flex justify-end items-center gap-x-4"><img src={icon1} alt="call icon" /><a href="">+91 12345 56789</a></div>
              <div className="flex justify-end items-center gap-x-4"><img src={icon2} alt="call icon" /><a href="">Mjhpharma@gmail.com</a></div>
            </div>
          </div>
          <div className="w-1/2 flex justify-center ">
            <img src={mjh} alt="mjh comp" className="w-full"  data-aos="fade-left" data-aos-delay="200"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
