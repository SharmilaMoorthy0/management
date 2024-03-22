import React from 'react'
import './pricing.css'

function Price() {
    const pricingData = [
        {
            name: "Free",
            price: "0",
            txt1: "single user",
            txt2: "5GB storage",
            txt3: "free subdomain"
        },
        {
            name: "Plus",
            price: "9", txt1: "5 user", txt2: "50GB storage", txt3: "free subdomain"
        },
        {
            name: "Pro",
            price: "49",
            txt1: "unlimitted  user",
            txt2: "150GB storage", txt3: " unlimited free subdomain"
        }
    ]
    return (

        <section class="pricing py-5">
            <div class="container">
                <div class="row">
                    {pricingData.map((item) => {
                        return <div class="col-lg-4">
                            <div class="card mb-5 mb-lg-0">
                                <div class="card-body">
                                    <h5 class="card-title text-muted text-uppercase text-center">{item.name}</h5>
                                    <h6 class="card-price text-center">${item.price}<span class="period">/month</span></h6>
                                    <hr />
                                    <ul class="fa-ul">
                                        <li><span class="fa-li"><i class="fa fa-check"></i></span>{item.name === "Free" ? item.txt1 : <b>{item.txt1}</b>}</li>
                                        <li><span class="fa-li"><i class="fa fa-check"></i></span>{item.txt2}</li>
                                        <li><span class="fa-li"><i class="fa fa-check"></i></span>Unlimited Public Projects</li>
                                        <li><span class="fa-li"><i class="fa fa-check"></i></span>Community Access</li>
                                        <li class={item.name === "Free" ? "text-muted" : ""}><span class="fa-li"><i class={item.name === "Free" ? "fa fa-times" : "fa fa-check"}></i></span>Unlimited
                                            Private Projects</li>
                                        <li class={item.name === "Free" ? "text-muted" : ""}><span class="fa-li"><i class={item.name === "Free" ? "fa fa-times" : "fa fa-check"}></i></span>Dedicated
                                            Phone Support</li>
                                        <li class={item.name === "Free" ? "text-muted" : ""}><span class="fa-li"><i class={item.name === "Free" ? "fa fa-times" : "fa fa-check"}></i></span> {item.name === "Pro" ? <b>Unlimitted</b> : ""}Free subdomain
                                        </li>
                                        <li class={item.name === "Pro" ? "" : "text-muted"}><span class="fa-li"><i class={item.name === "Pro" ? "fa fa-check" : "fa fa-times"}></i></span>Monthly Status
                                            Reports</li>
                                    </ul>
                                    <div class="d-grid">
                                        <a href="#" class="btn btn-primary text-uppercase">Button</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    })}

                </div>
            </div>
        </section>
    )
}

export default Price