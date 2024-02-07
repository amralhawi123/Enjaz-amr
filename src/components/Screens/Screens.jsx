import Slider from "react-slick";
import { screens } from "../../utils/data";

function Screens() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };

  return (
    <section className="bg-[#9ff2bb33] opinions" id="opinions">
      <div className="section-container">
        <h2 className="mb-[1rem] sm:mb-[2rem] text-center text-4xl font-bold">
          <span className="text-[#1BAC4B]">الشاشات الخاصة بالتطبيق</span>
        </h2>
        <Slider {...settings}>
          {screens.map((screen) => {
            const { image } = screen;
            return (
              <div key={screen.id}>
                <div
                  className={`w-full relative sm:flex-row flex-col-reverse`}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img src={image} alt="" />
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </section>
  );
}

export default Screens;
