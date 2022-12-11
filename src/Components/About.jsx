import React from "react";

const About = () => {
    return (
        <div
            className="w-full md:h-screen bg-[#0a192f] text-gray-300"
        >
            <div className="flex py-8 flex-col justify-center items-center w-full h-full">
                <div className=" py-8 rounded-md bg-cyan-800 flex flex-col justify-center items-center w-4/6">
                    <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8 mb-4">
                        <div className="sm:text-right pb-8 pl-4">
                            <p className="text-4xl font-bold inline border-b-4 border-cyan-500">
                                About
                            </p>
                        </div>
                        <div></div>
                    </div>
                    <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                        <div className="sm:text-right text-4xl font-bold">
                            <p>
                                Hi. I'm Md. Akkas Ali, nice to meet you. Please take a
                                look around my site
                            </p>
                        </div>
                        <div>
                            <p>
                                {" "}
                                Hello, I am a Junior front-end developer with around 1 years experience
                                in Build A Responsive and Multi function website. I am expertise on React js.
                                Recently I finished my diploma in Computer Engineering on Rajshahi Polytechnic
                                Institute. <br />
                                I think, I am A sincere and dedicated parson. And I believe the truth is always the truth.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default About;