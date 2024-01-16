import React from 'react'
import logoPng from '../assetes/Kyron-logo.png'
const Footer = () => {
  return (
    <section className=" bg-white mt-10 py-10">
    <div className="container mx-auto">
        <div clasNames="lg:flex">
            <div className="lg:w-4/12 m-10 px-4">
                <a href="https://www.Kyron.in" title="Kyron">
                    <img src={logoPng} width="188" height="70" alt="Kyron-logo" className="img-fluid mb-4"/>
                </a>
                <div></div>
                

            </div>
            <div className="lg:w-8/12 lg:block">
                <div className="lg:flex">
                    <div className="lg:w-4/12 px-4">
                        <div className="footer-links">
                            <span className="text-[#0a2134] text-[18px] font-semibold leading-6">Links</span>
                            <ul className=" mt-6 mb-4">
                                <li className="mb-3">
                                    <a href="\" className="text-[#43505b] text-[16px]  hover:underline" >Home</a>
                                </li>
                                <li class="mb-3">
                                    <a href="\" className="text-[#43505b] text-[16px]  hover:underline" >  Recruit</a>
                                </li>
                                <li class="mb-3">
                                    <a href="\" className="text-[#43505b] text-[16px]  hover:underline" >Acadmy</a>
                                </li>
                                <li class="mb-3">
                                    <a href="\" className="text-[#43505b] text-[16px]  hover:underline" >Science</a>
                                </li>
                                <li class="mb-3">
                                    <a href="\" className="text-[#43505b] text-[16px]  hover:underline" >Customers</a>
                                </li>
                                <li class="mb-3">
                                    <a href="\" className="text-[#43505b] text-[16px]  hover:underline" >Company</a>
                                </li>
                                <li class="mb-3">
                                    <a href="\" className="text-[#43505b] text-[16px]  hover:underline" >Event</a>
                                </li>
                                <li class="mb-3">
                                    <a href="\" className="text-[#43505b] text-[16px]  hover:underline" >FAQ</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div className="lg:w-4/12 px-4">
                        <div className="footer-links">
                            <span className="text-[#0a2134] text-[18px] font-semibold leading-6">Policy</span>
                            <ul className=" mt-4">
                                <li className="mb-3">
                                    <a href="/" className="text-[#43505b] text-[16px]  hover:underline" >Privacy Policy</a>
                                </li>
                                <li className="mb-3">
                                    <a href="/" className="text-[#43505b] text-[16px]  hover:underline" >Return Policy</a>
                                </li>
                                <li className="mb-3">
                                    <a href="/" className="text-[#43505b] text-[16px]  hover:underline" >Terms of Policy</a>
                                </li>
                                
                            </ul>
                        </div>
                    </div>
                    <div class="lg:w-4/12 px-4">
                        <div class="footer-links">
                            <span class="text-[#0a2134] text-[18px] font-semibold leading-6">Countect Us</span>
                            <div class=" ">
                                <h3 class=" mt-4 mb-1">Sales Inquiries:</h3>
                                <p class="text-[#7D7D7D] text-sm">Email: <a href="mailto:sales@kyron.in" class="section-company-form-link underline"> sales@kyron.in</a></p>
                                <p class="text-[#7D7D7D] text-sm">Phone: <a href="tel:+91-11-26907495" class="section-company-form-link underline">+91-11-26907495</a></p>
                                <h3 class="mt-4 mb-1">Support:</h3>
                                <p class="text-[#7D7D7D] text-sm">Email: <a href="mailto:helpdesk@kyron.in" class="section-company-form-link underline"> helpdesk@kyron.in</a></p>
                                <p class="text-[#7D7D7D] text-sm">Phone: <a href="tel:+91-11-26907495" class="section-company-form-link underline">+91-11-26907495</a></p>
                                </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Footer