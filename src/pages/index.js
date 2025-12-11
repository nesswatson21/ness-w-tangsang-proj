import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profilePic from "../../public/images/profile/ProfilePic.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import Hireme from "@/components/Hireme";

export default function Home() {
    return (
        <>
            <Head>
                <title>Ness Watson Tangsang | Home Page</title>
                <meta
                    name="description"
                    content="Built by Ness Watson Tangsang."
                />
            </Head>
            <main className="flex items-center text-dark w-full min-h-screen">
                <Layout className="pt-0 md:pt-16 sm:pt-8">
                    <div className="flex items-center justify-between w-full lg:flex-col">
                        <div className="w-1/2 md:w-full">
                            <Image
                                src={profilePic}
                                alt="my profile"
                                className="w-full h-auto lg:hidden md:inline-block md:w-full md:pb-[30px]"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                priority
                            />
                        </div>
                        <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
                            <AnimatedText
                                text="Breathing ideas to life elegant code thoughtful design."
                                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text 6xl md:!text-5xl sm:!text-3xl"
                            />
                            <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                                                               Hello, I'm Ness Watson Tangsang, a Full Stack Developer passionate about building high quality, modern, and scalable web applications. I’ve been deeply involved in web development for the past 3 years, working on several real-world end-to-end projects using technologies like HTML, CSS, JavaScript, Python, React.js, TypeScript, Redux, Web3.js, React Context API, and Firebase.
I hold a Bachelor of Science in Information Technology and have professional experience as a React Developer intern in Blockchain Technology, contributing to decentralized applications and smart-contract-driven interfaces.
Alongside software development, I have also completed my training at Arena Multimedia, where I gained strong expertise in:
•	Video Editing (Davinci Resolve Studio ,Adobe Premiere Pro, After Effects)
•	Animation & Motion Graphics
•	Graphic Design (Photoshop, Illustrator)
•	3D Modeling & Rendering (Blender, Maya )
•	Color Grading & Film Look Development
•	Davinci Resolve & Advanced Color Science
•	Developing Custom OpenDRT / film-emulation workflows
•	Language Transform & Look Development for video
I am also exploring Audio VST (plugin) programming, UI layout design, and creative interface development — combining code with sound engineering and artistic visuals.
I’m a quick learner, a problem-solver, and someone with a strong always-learning attitude. I love upgrading my skills, working across creative + technical fields, and bringing ideas to life through code, design, and multimedia. 🚀


                            </p>
                            <div className=" w-80 flex justify-between items-center self-start mt-2 lg:self-center">
                                <Link
                                     href="/Ness_Resume.pdf" //NESS WATSON RESUME.pdf
                                    target={"_blank"}
                                    className="flex items-center bg-light text-dark p-2.5 px-6 rounded-lg text-lg front-semibold hover:bg-dark hover:text-light border-2 border-solid border-transparent hover:border-dark md:p-2 md:px-4 md:text-base"
                                    download={true}
                                >
                                    Resume
                                    <LinkArrow className={"w-6 ml-1"} />
                                </Link>
                                <Link
                                    href="https://nieztarooy.blogspot.com/"
                                    target={"_blank"}
                                    className="ml-4 font-medium capitalize text-dark underline border-2 border-solid border-transparent hover:border-dark rounded-lg text-lg front-semibold p-2.5 px-6 md:text-base"
                                >
                                    Archive
                                </Link>
                            </div>
                        </div>
                    </div>
                </Layout>
                <Hireme />
            </main>
        </>
    );
}
