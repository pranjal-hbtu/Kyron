import React, { Component } from "react";
import Slider from "react-slick";

import abheetJpeg from "../assetes/abheet.jpeg";
import amanJpg from "../assetes/aman.jpg";
import asadJpeg from "../assetes/asad.jpeg";
import mikaPng from "../assetes/mika.png";
import saurabhJpeg from "../assetes/saurabh.jpeg";
import satyaJpeg from "../assetes/satya.jpeg";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "gray" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
       className={className}
      style={{ ...style,  background: "gray" }}
      onClick={onClick}
    />
  );
}

export default class Testinomialslider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
    };
    return (
      <Slider {...settings}>
        <div>
          <img
            class="mx-auto  h-[150px] p-3 rounded-full shadow-lg dark:shadow-black/20  w-[150px]"
            src={mikaPng}
            alt="avatar"
            height={"100%"}
            width={"100%"}
          />
          <div class="flex flex-wrap justify-center">
            <div class="w-full shrink-0 grow-0 basis-auto px-3 pt-3 lg:w-8/12">
              <h5 class="mb-2 text-lg font-bold">Mika Hama</h5>
              <p class="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                Director Second Language Testing Institute (SLTI)
              </p>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                The ASR and scoring models were completed in summer 2021 and our
                AI scored speaking test has been operational since then. Our AI
                speaking test has been used by approximately 1500 test-takers
                and the clients are happy with the accuracy of the test results.
                The system has been quite reliable, and we had only a few minor
                errors with the system. It also supports maintenance work and
                errors were resolved promptly. We together presented the system
                at a renowned language testing conference and our paper will
                appear in the International Journal of Artificial Intelligence
                in Education in 2022.
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            class="mx-auto  h-[150px] p-3 rounded-full shadow-lg dark:shadow-black/20  w-[150px]"
            src={satyaJpeg}
            alt="avatar"
            height={"100%"}
            width={"100%"}
          />
          <div class="flex flex-wrap justify-center">
            <div class="w-full shrink-0 grow-0 basis-auto px-3 pt-3 lg:w-8/12">
              <h5 class="mb-2 text-lg font-bold">Satya Prakash</h5>
              <p class="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                Student
              </p>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                It all started with the coding competition. I participated on
                the Kyron app, held by the MIDAS lab. Kyron proved to be a great
                platform to give exams. The platform was not only intuitive to
                use but also offered a very smooth experience. This has been the
                best platform I’ve ever used so far, for any examination. The
                user experience and overall UI are really amazing. Its
                easy-to-use UI has enabled me to participate as well as give
                tests on this app. I’ll recommend everyone to use this app for
                online examinations.
              </p>
            </div>
          </div>
        </div>
        <div
          class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
          data-te-carousel-items
        >
          <img
            class="mx-auto  h-[150px] p-3 rounded-full shadow-lg dark:shadow-black/20  w-[150px]"
            src={amanJpg}
            alt="avatar"
            height={"100%"}
            width={"100%"}
          />
          <div class="flex flex-wrap justify-center">
            <div class="w-full shrink-0 grow-0 basis-auto px-3 pt-3 lg:w-8/12">
              <h5 class="mb-2 text-lg font-bold">Amanullah Asad</h5>
              <p class="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                Student
              </p>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                Kyron is a fantastic testing platform that provides an excellent
                exam experience for applicants. The UI is clean and the
                performance is at par with online judges like Codechef and
                Leetcode. The questions appear in an easy to read format and the
                coding questions are solved on the embedded compiler, which is
                very fast and responsive, supporting all the major programming
                languages used in competitive coding. The candidate verification
                is very hassle free and secure. Kyron tries to be minimally
                invasive and only accesses the data that is mandatory to
                maintain the integrity of the online test. The invigilators are
                well trained and have a sharp eye for detail. Kyron's technical
                staff and developers are very responsive and quick to help out
                in case of the rare technical glitch. I had a marvelous
                experience with Kyron and would be very happy if more recruiters
                used Kyron for their coding tests
                <img src="" alt="" />
              </p>
            </div>
          </div>
        </div>
        <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
          <img
            class=" mx-auto  h-[150px] p-3 rounded-full shadow-lg dark:shadow-black/20  w-[150px]"
            src={asadJpeg}
            alt="avatar"
            height={"100%"}
            width={"100%"}
          />
          <div class="flex flex-wrap justify-center">
            <div class="w-full shrink-0 grow-0 basis-auto px-3 pt-3 lg:w-8/12">
              <h5 class="mb-2 text-lg font-bold">Asad Nizami</h5>
              <p class="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                Student
              </p>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                The test was a delightful experience. Especially the platform on
                which it was conducted, Kyron, was very good. It truly felt like
                a test as the candidates were monitored properly. Screen
                monitoring as well as camera and microphone monitoring ensured
                that the test was conducted in a fair manner and every candidate
                got the marks they deserved. One can rest assured that the only
                thing that matters in a competition is their skills and there is
                no space for variables such as unfair means undertaken by some
                other candidate. Kyron is truly an innovative platform for
                online proctoring in exams. This was my first experience with
                Kyron, the results were impressive and I confident that it would
                be a success, it surpassed my expectations
                <img src="" alt="" />
              </p>
            </div>
          </div>
        </div>
        <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
          <img
            class="mx-auto  h-[150px] p-3 rounded-full shadow-lg dark:shadow-black/20  w-[150px]"
            src={abheetJpeg}
            alt="avatar"
            height={"100%"}
            width={"100%"}
          />
          <div class="flex flex-wrap justify-center">
            <div class="w-full shrink-0 grow-0 basis-auto px-3 pt-3 lg:w-8/12">
              <h5 class="mb-2 text-lg font-bold">Abheet Kaushal Loadhi</h5>
              <p class="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                Student
              </p>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                Kyron proved to be a great platform to take an exam! The
                platform was not only intuitive to use but also offered a very
                smooth experience. This has been the best platform I've used so
                far, for any online examination - and I have taken dozens of
                such online based examinations on a variety of platforms.
                <img src="" alt="" />
              </p>
            </div>
          </div>
        </div>
        <div class="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
          <img
            class="mx-auto  h-[150px] p-3 rounded-full shadow-lg dark:shadow-black/20  w-[150px]"
            src={saurabhJpeg}
            alt="avatar"
            height={"100%"}
            width={"100%"}
          />
          <div class="flex flex-wrap justify-center">
            <div class="w-full shrink-0 grow-0 basis-auto px-3 pt-3 lg:w-8/12">
              <h5 class="mb-2 text-lg font-bold">Saurabh Sahu</h5>
              <p class="mb-4 font-medium text-neutral-700 dark:text-neutral-400">
                Student
              </p>
              <p class="mb-6 text-neutral-500 dark:text-neutral-300">
                My first experience with the Kyron was when I participated in a
                coding competition. And it was proved as one of the best
                platforms to conduct tests, as it comes with a compiler. The
                user experience was amazing and the UI was very simple yet
                interactive and easy to use. So far I have found Kyron as the
                best platform for online examinations. The features like live
                surveillance through live cam, open mic and screen sharing make
                it more reliable for online exams to avoid malpractices. Since
                now, I have given and also taken so many examinations on Kyron.
                I would highly recommend this app for online examinations.
                <img src="" alt="" />
              </p>
            </div>
          </div>
        </div>
      </Slider>
    );
  }
}
