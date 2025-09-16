import Image from "next/image";

const Socials = () => {
    const socials = [
        { href: "https://www.github.com/adrbrodz", icon: "/icons/github.svg", alt: "github" },
        { href: "https://www.linkedin.com/in/adrbrodz/", icon: "/icons/linkedin.svg", alt: "linkedin" },
        { href: "https://www.behance.net/adrbrodz#", icon: "/icons/behance.svg", alt: "behance" },
    ];

    return (
        <div className="socials">
            {socials.map((social: any, id: number) =>
                <a
                    key={id}
                    href={social.href}
                    target="_blank">
                    <div className="flex rounded-full bg-[#F7EEFF] p-3">
                        <Image
                            src={social.icon}
                            alt={social.alt}
                            width={25}
                            height={25}
                        />
                    </div>
                </a>
            )}
        </div>
    )
}

export default Socials;