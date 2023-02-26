import React from 'react'
import '../../styles/pricing.css';

const Pricing = () => {
    return <section id="pricing-plan" >
        <div className="container">
            <div className="pricing_top">
                <h2 className="section_title">Gym <span className="highlights">Pricing</span>Plan</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing <br />elit.
                    Nisi ut sed vitae officiis distinctio quos.</p>
            </div>


            
            <div className="pricing_wrapper">
                <div className="pricing_item" data-aos='fade-up' data-aos-duration='1500'>
                    <div className="pricing_card-top">
                        <h2 className="section_title">Regular Member</h2>
                        <h2 className="pricing section_title">$50<span>/Month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Unlimited access to the Gym</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Customer Support</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal Trainer</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Standard options</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>5 Classes per Week</li>
                        </ul>

                        <button className="register_btn">Join Now</button>
                    </div>
                </div>
            </div>

            <div className="pricing_wrapper">
                <div className="pricing_item pricing_item-02 " data-aos='fade-up' data-aos-duration='1500'>
                    <div className="pricing_card-top">
                        <h2 className="section_title">Premium Member</h2>
                        <h2 className="pricing section_title">$70<span>/Month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Unlimited access to the Gym</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Customer Support</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal Trainer</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Standard options</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>5 Classes per Week</li>
                        </ul>

                        <button className="register_btn">Join Now</button>
                    </div>
                </div>
            </div>


            <div className="pricing_wrapper">
                <div className="pricing_item " data-aos='fade-up' data-aos-duration='1500'>
                    <div className="pricing_card-top">
                        <h2 className="section_title">Standard Member</h2>
                        <h2 className="pricing section_title">$100<span>/Month</span></h2>
                    </div>

                    <div className="services">
                        <ul>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Unlimited access to the Gym</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Customer Support</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>Personal Trainer</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span> Standard options</li>
                            <li><span><i class="ri-checkbox-blank-circle-fill"></i></span>5 Classes per Week</li>
                        </ul>

                        <button className="register_btn">Join Now</button>
                    </div>
                </div>
                </div>
           
            
        </div>
    </section>
}

export default Pricing