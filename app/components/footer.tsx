import Image from "next/image";

const Footer = () => {
    return (
        <Image
            src="/images/footer.svg"
            alt="footer"
            width={100}
            height={100}
            className="mt-15 w-full lg:px-50"
        />
    )
}

export default Footer;