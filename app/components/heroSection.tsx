import Image from "next/image";

const HeroSection = () => {
    return (
        <div id="hero" className="hero">
            <div id="hero-content" className="hero-content">
                <Image
                    src="/images/portfolio-portrait.jpg"
                    alt="portrait"
                    width={425}
                    height={425}
                    className="flex mx-auto"
                />
                <div className="m-auto flex-row w-min space-y-5">
                    <p className="w-full text-5xl">Adrian<br />Brodziński</p>
                    <p className="text-sm text-yellow-900">FRONT-END DEVELOPER</p>
                    <p className="text-justify text-gray-500 text-sm">
                        Hi, I’m a developer based in Poznań, Poland.
                        I specialize in building modern web applications with React, Next.js, and TailwindCSS.
                        Over the past few years, I’ve worked on relaunching SaaS platforms, creating scalable IoT solutions,
                        and designing clean interfaces. I enjoy combining strong technical skills with a focus on UI/UX.
                    </p>
                    <a href="mailto:adrbrodz@gmail.com">
                        <div className="cta-1">
                            LET'S CHAT!
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;