const socials = [
    {
        name: 'Facebook',
        href: 'https://www.facebook.com/Loannanashop',
        icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8 text-blue-700" {...props}>
            <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
            />
        </svg>
        ),
    },
    {
        name: 'Instagram',
        href: 'https://www.instagram.com/loan.pmu/',
        icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" className="h-8 w-8 text-pink-600" {...props}>
            <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
            />
        </svg>
        ),
    },
    // {
    //     name: 'Whatsapp',
    //     href: 'https://wa.me/+12509864856',
    //     icon: (props) => (
    //     <svg fill="currentColor" viewBox="0 0 32 32" className="h-10 w-10 text-green-600 mt-[-4px]" {...props}>
    //         <path fillRule="evenodd" clipRule="evenodd" d=" M19.11 17.205c-.372 0-1.088 1.39-1.518 1.39a.63.63 0 0 1-.315-.1c-.802-.402-1.504-.817-2.163-1.447-.545-.516-1.146-1.29-1.46-1.963a.426.426 0 0 1-.073-.215c0-.33.99-.945.99-1.49 0-.143-.73-2.09-.832-2.335-.143-.372-.214-.487-.6-.487-.187 0-.36-.043-.53-.043-.302 0-.53.115-.746.315-.688.645-1.032 1.318-1.06 2.264v.114c-.015.99.472 1.977 1.017 2.78 1.23 1.82 2.506 3.41 4.554 4.34.616.287 2.035.888 2.722.888.817 0 2.15-.515 2.478-1.318.13-.33.244-.73.244-1.088 0-.058 0-.144-.03-.215-.1-.172-2.434-1.39-2.678-1.39zm-2.908 7.593c-1.747 0-3.48-.53-4.942-1.49L7.793 24.41l1.132-3.337a8.955 8.955 0 0 1-1.72-5.272c0-4.955 4.04-8.995 8.997-8.995S25.2 10.845 25.2 15.8c0 4.958-4.04 8.998-8.998 8.998zm0-19.798c-5.96 0-10.8 4.842-10.8 10.8 0 1.964.53 3.898 1.546 5.574L5 27.176l5.974-1.92a10.807 10.807 0 0 0 16.03-9.455c0-5.958-4.842-10.8-10.802-10.8z"></path>
    //     </svg>
    //     ),
    // },
]

export default function Contact() {
    return (
        <section className="py-12 lg:py-20 px-4 lg:px-20 border-b border-gray-400">

            <div className="flex flex-col-reverse md:flex-row gap-20 justify-center">
                {/* Picture section */}
                <div className="w-full md:w-1/2 flex md:justify-end">
                    <div className="w-full md:max-w-[400px] aspect-[5/7] bg-cover bg-center" style={{ backgroundImage: "url('/img/contact.jpeg')" }}></div>
                </div>

                {/* Info section */}
                <div className="w-full md:w-1/2">
                    <h3 className="text-3xl font-bold uppercase tracking-wider">Location &amp; contact</h3>
                    
                    <div className="mt-12 md:text-sm">
                        <div>
                            <strong>Loan</strong>
                        </div>
                        <div className="mt-4 font-extralight">
                            <p>1009 Blanshard st,</p>
                            <p>Victoria BC Canada</p>
                            <p>V8W2H4</p>
                        </div>
                        <div className="mt-8 font-light">
                            <p>If you have any questions feel free to contact me here:</p>
                            <strong className="text-lg">loantattooer@gmail.com</strong>
                        </div>
                        <div className="mt-8">
                            <div className="flex space-x-6 md:order-2">
                                {socials.map((item) => (
                                <a key={item.name} href={item.href}>
                                    <span className="sr-only">{item.name}</span>
                                    <item.icon aria-hidden="true" />
                                </a>
                                ))}
                            </div>
                        </div>
                        {/* <div className="mt-8 font-light">
                            <p>If you have any other questions, feel free to message me at anytime! </p>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}