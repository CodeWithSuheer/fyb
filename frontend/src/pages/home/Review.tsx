import { FaStar } from "react-icons/fa";
import Marquee from "react-fast-marquee";

const data = [
  {
    review:
      "I was drowning in database issues, but Octa Tech's consultants were lifesavers! They not only optimized my system but also showed me how to extract valuable insights. Now my data is working for me.",
    name: "A & Z Homes LLC",
    role: "Business Owner",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
  },
  {
    review:
      "My dream app became a reality thanks to Octa Tech's developers. They listened to my vision and built a user-friendly app that's exceeding expectations. Highly recommend!",
    name: "Cosmo lab",
    role: "Business Owner",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
  },
  {
    review:
      "Before Octa Tech, IT headaches were a constant struggle. Now, they're my trusted advisors who simplify everything and keep my business running smoothly. They're true tech troubleshooters!",
    name: "SRT",
    role: "Marketing Director",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
  },
  {
    review:
      "Octa Tech has been a game-changer for my business. Their around-the-clock support saved me when my website crashed before a major launch. I must say their technicians were calm and efficient and got everything back in no time. Highly recommended.",
    name: "Ammedia",
    role: "Marketing Director",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
  },
  {
    review:
      "We partnered with Octa Tech to develop a custom app for our sales team. They took the time to understand our unique needs and made a user-friendly app that our team loved. Thanks, Octa Tech!",
    name: "Emran Akthar",
    role: "Ceo Ammar Forte",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
  },
  {
    review:
      "As a small business owner, I don't have the time or resources to deal with complex IT issues. They handle everything from network security to software updates, allowing me to focus on what I do best - running my business.",
    name: "HR Mortage",
    role: "Marketing Director",
    url: "https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Vector.png?v=1714518760",
  },
];

const Review = () => {
  return (
    <>
      <section className="py-14 sm:py-20 bg-[#FFF3F9]">
        <div className="max-w-5xl xl:max-w-6xl xxl:max-w-7xl mx-auto">
          <h2 className="mb-2.5 playfair text-center text-4xl sm:text-5xl font-bold">
            What our Client Says
          </h2>
        </div>

        <Marquee direction="left" className="testimonial_marquee mt-14">
          {data.map((data, i) => (
            <article
              className="group mx-10 py-8 px-6 bg-white max-w-sm border border-gray-300 rounded-md"
              key={i}
            >
              <div className="card">
                <img className="mb-5" src={data.url} alt="" />

                <p>
                  Lorem ipsum dolor sit amet consectetur. Egestas enim sed duis
                  ut id ullamcorper vel commodo rutrum. Mauris ornare aliquet
                  feugiat pellentesque ornare ornare sit bibendum. Nec augue
                  platea orci turpis
                </p>

                <div className="mt-5 flex justify-start items-center gap-3">
                  <div className="img w-10">
                    <img
                      className="rounded-full w-full"
                      src="https://cdn.shopify.com/s/files/1/0852/5099/8550/files/Ellipse_347.png?v=1714519512"
                      alt=""
                    />
                  </div>

                  <div className="profile">
                    <h3 className="mb-0.5 text-lg font-medium text-gray-900">
                      Myriam Murphy
                    </h3>

                    <div className="mb-2 flex items-center justify-start gap-1">
                      <FaStar className="text-[#FFC107]" />
                      <FaStar className="text-[#FFC107]" />
                      <FaStar className="text-[#FFC107]" />
                      <FaStar className="text-[#FFC107]" />
                      <FaStar className="text-[#FFC107]" />
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </Marquee>
      </section>
    </>
  );
};

export default Review;
