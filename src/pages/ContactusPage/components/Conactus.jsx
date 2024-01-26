import React from "react";

const Conactus = () => {
  return (
    <section className="bg-[#FCFFF6]">
      <div className="mx-4 lg:mx-12">
        <div className="mb-4 lg:mb-10 text-center">
          <h1 className="text-2xl lg:text-5xl text-[#0a2134] mx-4 lg:mx-10 px-6 font-bold mb-2 lg:mb-4 pt-8 lg:pt-12">
            Contact Us
          </h1>
          <p className="mb-2 lg:mb-4 pt-1 font-medium text-[#43505b] text-sm lg:text-xl">
            You can reach out to us or schedule a demo
          </p>
        </div>
        <div className="mb-8 lg:mb-0">
          <h3 className="mt-4 mb-1 text-xl lg:text-2xl">Sales Inquiries:</h3>
          <p className="text-[#7D7D7D] text-sm lg:text-base">
            Email:{" "}
            <a
              href="mailto:sales@kyron.in"
              className="section-company-form-link underline"
            >
              sales@kyron.in
            </a>
          </p>
          <p className="text-[#7D7D7D] text-sm lg:text-base">
            Phone:{" "}
            <a
              href="tel:+91-8800966082"
              className="section-company-form-link underline"
            >
              +91-8800966082
            </a>
          </p>
          <h3 className="mt-4 mb-1 text-xl lg:text-2xl">Support:</h3>
          <p className="text-[#7D7D7D] text-sm lg:text-base">
            Email:{" "}
            <a
              href="mailto:helpdesk@kyron.in"
              className="section-company-form-link underline"
            >
              helpdesk@kyron.in
            </a>
          </p>
          <p className="text-[#7D7D7D] text-sm lg:text-base">
            Phone:{" "}
            <a
              href="tel:+91-8800966082"
              className="section-company-form-link underline"
            >
              +91-8800966082
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Conactus;
