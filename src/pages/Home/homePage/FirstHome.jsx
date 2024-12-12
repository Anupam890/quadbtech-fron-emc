import React from "react";
import PasteImage from "../../../assets/images/PasteImage.png";
import image1 from "../../../assets/images/image1.png";
import image2 from "../../../assets/images/image2.png";
import image3 from "../../../assets/images/image3.png";
import image4 from "../../../assets/images/image4.png";
import img1 from "../../../assets/images/img1.png";
import img2 from "../../../assets/images/img2.png";
import img3 from "../../../assets/images/img3.png";
import img4 from "../../../assets/images/img4.png";


import { Truck, Banknote, LockKeyhole, Phone } from "lucide-react";


const services = [
    {
        icon: Truck,
        heading: "Free Shipping",
        desc: "Order above $200",
    },
    {
        icon: Banknote,
        heading: "Money-Back",
        desc: "30 Days gurantee",
    },
    {
        icon: LockKeyhole,
        heading: "Secure Payments",
        desc: "Secured by Stripe",
    },
    {
        icon: Phone,
        heading: "24/7 Support",
        desc: "Phone and Email Support",
    },
];

const newArrivals = [img1, img2, img3, img4];

const FirstHome = () => {
    return (
        <div>
            <section className="relative ">
                <div className="container mx-auto px-4 py-16 flex flex-col items-center text-center">
                    <img src={PasteImage} alt="Hero" className=" mb-8" />
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <h1 className="text-4xl md:text-5xl font-semibold text-center md:text-left">
                            Simply Unique <span className="text-gray-500">/</span>
                            <br className="hidden md:block" /> Simply Better.
                        </h1>
                        <p className="text-gray-600 mt-4 md:mt-0 max-w-xl text-center md:text-left md:ml-8">
                            <span className="font-bold">3legant</span> is a gift & decorations
                            store based in HCMC, Vietnam. Est since 2019.
                        </p>
                    </div>
                </div>
            </section>
            {/* Categories Section */}
            <section className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="row-span-2 relative">
                        <img
                            src={image1}
                            alt="Image 1"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-5 left-5 p-2 ">
                            <h2 className="text-2xl mb-2 font-semibold">Living Room</h2>
                            <p className="inline-block border-b-2 border-black pb-1">
                                Shop Now →
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src={image2}
                            alt="Image 2"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-5 left-5  p-2 ">
                            <h2 className="text-2xl mb-2 font-semibold">Bedroom</h2>
                            <p className="inline-block border-b-2 border-black pb-1">
                                Shop Now →
                            </p>
                        </div>
                    </div>

                    <div className="relative">
                        <img
                            src={image3}
                            alt="Image 3"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute top-5 left-5 p-2">
                            <h2 className="text-2xl mb-2 font-semibold">Kitchen</h2>
                            <p className="inline-block border-b-2 border-black pb-1">
                                Shop Now →
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container mx-auto">
                <div className="flex items-center justify-between px-2 ">
                    <h1 className="text-3xl font-semibold">
                        New <br />
                        Arrivals
                    </h1>

                    <a href="#" className="text-black border-black border-b-2">
                        More Products →
                    </a>
                </div>
                {/* product slider  */}
                <div>
                    
                </div>
            </section>
            <section className="container mx-auto py-12">
                <div className="flex items-stretch justify-between gap-6 px-4 flex-wrap md:flex-nowrap">
                    {services.map((service, index) => (
                        <div
                            className="bg-[#F3F4F6] rounded-lg p-8 flex flex-col w-full md:w-[30%] min-h-[250px]"
                            key={index}
                        >
                            <div className="text-black mb-6">
                                <service.icon size={64} />
                            </div>
                            <h2 className="text-xl font-semibold mb-4">{service.heading}</h2>
                            <p className="text-base text-gray-600">{service.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className=" px-4 py-8">
                <div className="flex flex-col md:flex-row bg-[#F3F4F6] rounded-lg overflow-hidden ">
                    {/* Image Section */}
                    <div className="md:w-1/2">
                        <img
                            src={image4}
                            alt="Modern living room with tan leather sectional sofa"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Content Section */}
                    <div className="md:w-1/2 p-8 flex flex-col justify-center bg-[]">
                        <span className="text-blue-500 font-medium mb-4">
                            SALE UP TO 35% OFF
                        </span>

                        <h2 className="text-4xl font-bold mb-4 tracking-tight">
                            HUNDREDS of
                            <br />
                            New lower prices!
                        </h2>

                        <p className="text-gray-600 text-lg mb-6">
                            It's more affordable than ever to give every room in your home a
                            stylish makeover
                        </p>

                        <div>
                            <a
                                href="#"
                                className="inline-flex items-center text-gray-900 hover:text-gray-700 transition-colors duration-200"
                            >
                                Shop Now
                                <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FirstHome;
