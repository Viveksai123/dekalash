import React from "react";

const UniqueLashesSection = () => {
  const cards = [
    {
      imgSrc: "./img1.jpg", // Replace with the first image URL
      title: "Lashes as unique as you",
      description:
        "Experience the magic of our lash stylists who specialize in creating unique lash designs tailored to your individual style. Our TrueXpress lashes creates a light-volume look with natural- looking length with a full set lasting half the time of a standard volume appointment. Get ready to turn heads and make a statement with your amazing lash line.",
      reverse: true,
    },
    {
      imgSrc: "./img2.jpg", // Replace with the second image URL
      title: "Get the lashes that fit you",
      description:
        "Our Lash Stylists specialize in designing TrueXpress, Hybrid, Volume, and Mega Volume Lashes.Our lightweight eyelash extensions are so comfortable and feel so natural, you'll forget you have them, but everyone else is sure to notice your beautiful Lash line.",
      reverse: false,
    },
    {
      imgSrc: "./img3.jpg", // Replace with the third image URL
      title: "Effortless Elegance",
      description:
        "Achieve a naturally elegant look with our lightweight and comfortable lash extensions.Achieve a naturally elegant look with our lightweight and comfortable lash extensions. Achieve a naturally elegant look with our lightweight and comfortable lash extensions.",
      reverse: true,
    },
  ];

  return (
    <section className="flex flex-col background items-center px-6 md:px-16 lg:px-24 py-12 md:py-20 space-y-14">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`flex flex-col-reverse justify-between ${
            card.reverse ? "md:flex-row-reverse" : "md:flex-row"
          } items-center md:justify-between gap-8 m-6`}
        >
          {/* Text Section */}
          <div className="max-w-md m-3 md:text-left">
            <h3 className="text-4xl font-semibold text-gray-800 mb-4">
              {card.title}
            </h3>
            <p className="text-gray-800 text-base leading-relaxed">
              {card.description}
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-[30vw] md:h-[30vw] sm:w-[50vw] sm:h-[50vw] overflow-hidden rounded-lg shadow-lg">
  <img
    src={card.imgSrc}
    alt={card.title}
    className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
  />
</div>

        </div>
      ))}
    </section>
  );
};

export default UniqueLashesSection;
