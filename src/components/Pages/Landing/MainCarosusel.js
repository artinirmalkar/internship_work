import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// import * as ReactDOMClient from "react-dom/client";

import Carousel from "react-simply-carousel";
import Card from "./Card";

function MainCarousel() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const [activeSlide, setActiveSlide] = useState(0);
  const names = [
    "Arti",
    "Himanshu",
    "leena",
    "mena",
    "hena",
    "jay",
    "aman",
    "yash",
    "pankaj",
    "anshu"
  ];
  const positions = [
    "Software Engineer",
    "Front-End devloper",
    "Accountant",
    "Graphic Designer",
    "Sales Representative",
    "Data Analyst",
    "Human Resources Manager",
    "Customer Service Representative",
    "Product Manager",
    "Web Developer"
  ];
  const descs = [
    "Thanks to the job portal, I was able to find my dream job in just a few weeks!",
    "I was impressed by the job portal's user-friendly interface and extensive job listings.",
    "The job portal's search filters allowed me to narrow down my job search to the exact criteria I was looking for.",
    "The job portal's job matching algorithm is top-notch and provided me with relevant job recommendations based on my skills and experience.",
    "I appreciated the job portal's email alerts, which kept me updated on new job postings that matched my search criteria.",
    "The job portal's resume builder tool helped me create a professional resume that caught the attention of employers.",
    "I found the job portal's salary estimator tool to be extremely helpful in negotiating my job offer.",
    "The job portal's interview preparation resources helped me feel confident and well-prepared for my job interviews.",
    "The job portal's career advice articles and forums provided me with valuable insights and tips for advancing my career.",
    "I would highly recommend the job portal to anyone looking for a job, as it made the entire job search process much easier and more efficient."
  ];

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <h1
          style={{ textAlign: "center", paddingBottom: "2rem" }}
          data-aos="zoom-in"
        >
          Zaajira Success Stories
        </h1>{" "}
        <Carousel
          containerProps={{
            style: {
              width: "100%",

              justifyContent: "space-around",

              userSelect: "none"
            }
          }}
          preventScrollOnSwipe
          swipeTreshold={60}
          activeSlideIndex={activeSlide}
          // activeSlideProps={{}}
          onRequestChange={setActiveSlide}
          forwardBtnProps={{
            children: ">",

            style: {
              width: 60,

              height: 60,

              borderRadius: 30,

              minWidth: 60,

              alignSelf: "center"
            }
          }}
          backwardBtnProps={{
            children: "<",

            style: {
              width: 60,

              height: 60,

              borderRadius: 30,

              minWidth: 60,

              alignSelf: "center"
            }
          }}
          dotsNav={{
            show: true,

            itemBtnProps: {
              style: {
                height: 16,

                width: 16,

                borderRadius: "50%",

                border: 0,

                display: "none"
              }
            },

            activeItemBtnProps: {
              style: {
                height: 16,

                width: 16,

                borderRadius: "50%",

                border: 0,

                background: "black",

                display: "none"
              }
            }
          }}
          itemsToShow={3}
          speed={400}
        >
          {Array.from({ length: 10 }).map((item, index) =>
            <div key={index}>
              <div data-aos="fade-in" data-aos-duration="3000">
                <Card
                  name={names[index % names.length]}
                  position={positions[index % positions.length]}
                  desc={descs[index % descs.length]}
                />
              </div>
              {/* <CardDesc desc={descs[index % descs.length]} /> */}
            </div>
          )}
        </Carousel>
      </div>
    </div>
  );
}

export default MainCarousel;
// const rootElement = document.getElementById("root");

// const root = ReactDOMClient.createRoot(rootElement);

// root.render(
//   <StrictMode>
//         <App /> {" "}
//   </StrictMode>
// );
