const Contact = () => {
    return (
        <div>
            <div id="contact" className="contact">
                <div className="interested">
                    <div className="flex-row my-auto">
                        <p className="text-2xl font-bold">Interested?</p>
                        <br />
                        <p className="text-sm text-gray-500">Let me know about your opportunities.</p>
                    </div>
                    <a href="mailto:adrbrodz@gmail.com" className="flex mx-auto">
                        <div className="flex w-min h-min m-auto p-3.5 rounded-xl bg-[#F36E21]">
                            <p className="text-white mx-auto font-extrabold text-sm text-nowrap">LET'S CHAT!</p>
                        </div></a>
                </div>
            </div>
            <div className="flex mt-15 px-10 w-full">
                <div className="flex-row w-full justify-center align-center text-center">
                    <div className="flex text-center  font-bold ">
                        <p className="text-center mx-auto">Stay Connected</p>
                    </div>
                    <br />
                    <div className="flex text-center text-gray-500 text-sm">
                        <p className="text-center mx-auto">Poznań, Poland</p>
                    </div>
                    <div className="flex text-center text-xl">
                        <p className="text-center mx-auto">adrbrodz@gmail.com</p>
                    </div>
                    <div className="flex text-center text-sm mt-1">
                        <p className="text-center mx-auto">+48 731 386 750</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Contact;