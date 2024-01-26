import React, { useState } from "react";

const Faq = () => {
  const [openGroup, setOpenGroup] = useState(null);

  const handleToggle = (index) => {
    setOpenGroup(openGroup === index ? null : index);
  };

  const faqData = [
    {
      question: "What will the exam proctoring experience be like?",
      answer:
        " We’ve spent decades working to balance exam security with test-taker experience. To ensure a level playing field, there are some technical steps our platform and proctors must take. To see a full explanation of what to expect on exam day. Our security procedures and processes are consistently evaluated and updated based on new technology and cheating patterns.",
    },
    {
      question:
        "What do your proctors watch during an exam or in the professional review process?",
      answer:
        "Our proctors look for potentially unusual behavior, such as a test-taker looking off-screen, accessing unpermitted materials, speaking aloud, or allowing other people in the room. Additionally, we use technology solutions to assist the proctors in identifying activities that may warrant further investigation.",
    },
    {
      question:
        "Can your proctors access test-takers’ computers without their knowledge?",
      answer:
        "      No. Test-takers must agree to give us permission to see their computer activity. In every session, the list of permissions granted is displayed and test-takers must click a button to agree. Proctor activity can be seen by test-takers in real-time, meaning proctors cannot perform any action without the test-takers’ knowledge.",
    },
    {
      question: "Do you switch proctors during Live+ tests?",
      answer:
        "Sometimes a test-taker may start and end their exam with a different proctor. This is because of lunch breaks and shift changes. The test-taker is not interrupted by the change and is never left unwatched.",
    },
    {
      question:
        "How do you make sure the testing process is fair and test-takers aren’t Googling answers or reading them off their hand? ",
      answer:
        "      Depending on the parameters set by the test provider or institution, we can do several things, all of which are disclosed to the test-taker before the test starts. We can use an application to lock down access to the internet or other computer files during the test. This application prevents unauthorized access to the test-taker’s computer during the test and doesn’t affect the user’s device after the test ends. We may also use video and audio recordings during the test. With our Live+ solution, these recordings are monitored in real time to identify any violations of the institution’s testing parameters",
    },
    {
      question:
        "How do your proctors stop integrity violations while proctoring?",
      answer:
        "During a Live+ exam, a proctor controls the mouse of a test-taker’s computer and can communicate with that test-taker through the webcam. If suspicious behavior is detected, an intervention specialist will be invited to the session. Their sole responsibility is to identify and prevent integrity violations, as defined by your organization.",
    },
    {
      question: "How do you verify test-taker identities?",
      answer:
        "  We have a couple of options available for you to choose from, including public records challenge questions (where available) and keystroke biometrics. We also use ID capture and facial comparison to verify the test-taker. If any of our technology solutions detect a potential mismatch in test-taker identity, our human proctors are alerted (if you are using our Live+ or Review+ service) and can ignore the alert, override the alert, or take other action. If you are using our Record+ service, the test administrator is alerted to determine whether further action is needed. ",
    },
    {
      question: "Do exam owners have to review exam sessions?",
      answer:
        "      Our professional proctors review every exam session so you don’t have to. We do the heavy lifting and then provide you with a report of any sessions that need your attention. ",
    },
    {
      question: "Are exam video recordings always available?",
      answer:
        "      Yes. All videos are retained for up to a year unless a shorter or longer period is specially requested. We even have a feature called “Live Look-In,” which allows you to watch your test-takers in real time as they complete exams. ",
    },
  ];
  const faqData1 = [
    {
      question: "Can you proctor paper-based exams?",
      answer:
        "      We no longer proctor paper-based exams, but we can help you find a test delivery system to transition your program online. ",
    },
    {
      question: "How can you meet our high-stakes requirements?",
      answer:
        "      We work with exams that have complex requirements all the time. Our Live+ service offers additional levels of customization and specialized proctor training for things like exam start procedures, security measures, and test-taker interaction rules.",
    },
    {
      question: "How do you handle high volumes? ",
      answer:
        "      We operate multiple facilities around the world, and our ability to scale has been tested and perfected over decades of practice. We use historical information and technology solutions to aid us in determining needs for headcount, training, and other logistics.  ",
    },
    {
      question:
        "Are your solutions available in other languages? Do you have bilingual proctors that can do the live launch and answer questions? ",
      answer:
        "We provide services in several other languages with advanced notice. We use software for accurate interpretation and communication through our chat feature, which provides a consistent experience for proctors and test-takers. The Kyron Exam Platform is designed to support administrators and test-takers in English and French. The Kyron Proctoring Platform is currently available in English with localization in Spanish currently in development. Many of our proctors also speak Spanish.",
    },
    {
      question:
        "How do you guarantee that the exam experience is equal and fair across all language interpretations?",
      answer:
        "      Test-takers can choose either the English or French version of the Kyron Exam Platform. The default exam language is English. However, our psychometrics team offers professional translation from English to French, which ensures both versions of the examination meet the protocols for validation and remain defensible. When a proctor detects a language barrier, they use Geo Fluent software to remedy communication through chat in the test-taker’s language. Live remote proctoring in languages other than English or Spanish can be provided through the Kyron Pro Solutions team for an additional fee. Pro Solutions is used for unique language situations, when a communication issue requires an accommodation, and for security purposes.  ",
    },
    {
      question:
        "I have very specific questions about your products or assessment services. Who can I contact to answer my questions?",
      answer:
        "      If you have a specific interest in how our products or services can work for your organization, contact us and someone from our team will connect with you as soon as possible.  ",
    },
  ];

  const faqData2 = [
    {
      question: "What are some key focus areas in compliance?",
      answer:
        "      Privacy and data security are always top of mind for us. The laws are changing quickly in this area all across the globe, and we’re constantly enhancing our policies and practices to ensure we are protecting our users’ information and adhering to applicable privacy laws. Please see our compliance page for additional details on our privacy commitments. ",
    },
    {
      question: "How do you communicate these policies with test-takers?",
      answer:
        "Test-takers can review our privacy policy at any time and see when it was last updated. We also communicate our privacy practices to test-takers when they set up an account with us. When test-takers begin an online exam session, we provide them with specific disclosures about the information that will be collected during their test session and how that information will be used and shared.",
    },
    {
      question: "Why do you need to access any test-taker data?",
      answer:
        "     Our main responsibility to clients and test-takers is to ensure fairness and integrity in the testing process. In a classroom, a proctor can physically observe test-takers to make sure Susan hasn’t shown up to take Sarah’s test and ensure that no one is breaking testing protocols. Because we are proctoring online, we use alternative methods to verify test-takers’ identities and make sure that even though test-takers and proctors are in different locations, the testing environment is fair to everyone.",
    },
    {
      question:
        "Do you sell or use test-taker data for purposes other than proctoring?",
      answer:
        "      No, we only use the data captured during test sessions to conduct online proctoring. As our privacy policy states: Kyron Learning does not use any test-taker’s personal information for any purpose other than for facilitating the proctoring of online exams.  ",
    },
    {
      question: "What happens with data once an exam ends?",
      answer:
        "      The proctoring session data are stored in US-based encrypted servers (AES 256). The screen recordings and webcam audio/video are accessible to the institution for a period determined by the institution but are automatically deleted, per NIST 800-88 guidelines, after one year.",
    },
    {
      question:
        "Do you do anything else with the recordings or test-taker information?",
      answer:
        "      No. The information and recordings belong to the testing organization, and we act as a service provider. We don’t own the data – the testing organization does. We don’t sell or otherwise monetize any data from test-takers, and we never market to test-takers or allow any of our partners to do so. ",
    },
    {
      question:
        "How can test-takers be sure you're no longer accessing their computer?",
      answer:
        "      Once the LogMeIn applet is closed, the proctor and Kyron Learning will no longer be able to access the computer or any information on the computer.  ",
    },
    {
      question: "Where can I find a copy of your most recent privacy policy?",
      answer:
        "      You can review the details of our privacy policy at any time.",
    },
  ];
  const faqData3 = [
    {
      question:
        "How do you integrate with my learning management (LMS) or test delivery system?",
      answer:
        "      Our platforms integrate with all major LMSs, including Blackboard, Canvas, Moodle, D2L, and more, with the option to utilize our API for custom integrations. We can also help you find a test delivery system if you are transitioning your program online from paper-based exams.  ",
    },
    {
      question: "How does your software flag behaviors?",
      answer:
        "      Our system will flag and timestamp events in an easy-to-read timeline that allows proctors and test administrators to click on a time and be taken to that moment in the exam recording.  ",
    },
    {
      question:
        "How does technology help your proctors? How do you combat artificial intelligence (AI) bias?",
      answer:
        "      Technology and AI solutions simply reduce administrative workload and help our human proctors identify activities that might violate the test provider’s integrity requirements. To protect against the inaccuracies created by technology, which is known to result in bias, every exam session is reviewed by at least two highly trained professionals, who analyze the session before submitting suspected and confirmed incidents to the testing organization   ",
    },
  ];

  return (
    <section className="bg-[#FCFFF6]">
      <div className="max-w-screen-xl mx-auto px-2 bg-white min-h-sceen">
        <div className="flex flex-col items-center">
          <h2 className="font-bold text-5xl mt-10 tracking-tight">FAQ</h2>
          <p className="text-neutral-400 text-lg mt-3">
            Frequently asked questions
          </p>
        </div>
        <div>
          <h1 className="flex justify-center mt-8 underline font-bold  text-xl">
            Our Proctoring Process
          </h1>

          <div className="grid divide-y divide-neutral-200 max-w-5xl mx-auto mt-2">
            {faqData.map((faq, index) => (
              <div className="py-5" key={index}>
                <details
                  className={`group ${openGroup === index ? "group-open" : ""}`}
                >
                  <summary
                    className="flex justify-between items-center font-medium cursor-pointer list-none"
                    onClick={() => handleToggle(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p
                    className={`text-neutral-600 mt-3 ${
                      openGroup === index ? "group-open:animate-fadeIn" : ""
                    }`}
                  >
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="flex justify-center mt-8 underline font-bold  text-xl">
            Special Exam Requirements
          </h1>

          <div className="grid divide-y divide-neutral-200 max-w-5xl mx-auto mt-2">
            {faqData1.map((faq, index) => (
              <div className="py-5" key={index}>
                <details
                  className={`group ${openGroup === index ? "group-open" : ""}`}
                >
                  <summary
                    className="flex justify-between items-center font-medium cursor-pointer list-none"
                    onClick={() => handleToggle(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p
                    className={`text-neutral-600 mt-3 ${
                      openGroup === index ? "group-open:animate-fadeIn" : ""
                    }`}
                  >
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="flex justify-center mt-8 underline font-bold text-xl">
            Compliance and Privacy
          </h1>

          <div className="grid divide-y divide-neutral-200 max-w-5xl mx-auto mt-2">
            {faqData2.map((faq, index) => (
              <div className="py-5" key={index}>
                <details
                  className={`group ${openGroup === index ? "group-open" : ""}`}
                >
                  <summary
                    className="flex justify-between items-center font-medium cursor-pointer list-none"
                    onClick={() => handleToggle(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p
                    className={`text-neutral-600 mt-3 ${
                      openGroup === index ? "group-open:animate-fadeIn" : ""
                    }`}
                  >
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="flex justify-center mt-8 underline  font-bold text-xl">
            Platform Technical Questions
          </h1>

          <div className="grid divide-y divide-neutral-200 max-w-5xl mx-auto mt-2">
            {faqData3.map((faq, index) => (
              <div className="py-5" key={index}>
                <details
                  className={`group ${openGroup === index ? "group-open" : ""}`}
                >
                  <summary
                    className="flex justify-between items-center font-medium cursor-pointer list-none"
                    onClick={() => handleToggle(index)}
                  >
                    <span>{faq.question}</span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shape-rendering="geometricPrecision"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p
                    className={`text-neutral-600 mt-3 ${
                      openGroup === index ? "group-open:animate-fadeIn" : ""
                    }`}
                  >
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
