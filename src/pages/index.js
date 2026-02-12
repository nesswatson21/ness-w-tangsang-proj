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
                <title>Ness Tangsang | Home Page</title>
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
                                                              
Hi, Im Ness Watson Tangsang a Full Stack Developer and Creative Technologist. I have spent the last 3 years building real world, end to end web applications using React, TypeScript, Redux, Web3, Python, and Firebase. I love turning ideas into modern, scalable digital products.

My background also includes Hardware & Networking, with hands on experience across Linux based systems, along with training in Cisco training, CompTIA Network+, and CEH, giving me a strong foundation in security and IT systems.

Outside coding, Im passionate about multimedia. I completed my training at Arena Multimedia, where I learned video editing, color grading, Colorist Developer building cinematic looks with code and color science using (C Programming Language, CUDA ) , VFX, animation, graphic design, Blender, Maya, Cinema 4D, Resolume, Propresenter, Houdini,  and advanced DaVinci Resolve + OpenDRT workflows. I also create DCTL (DaVinci Color Developer) tools and work with Unreal Engine to build real time 3D environments and cinematic visuals. Im currently diving into Audio VST development and creative UI design.

Im always learning, always building, and always exploring new technologies to level up my craft. 🚀

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
