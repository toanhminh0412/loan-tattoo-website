import Image from "next/image"

export default function AboutMe() {
    return (
        <section className="py-32 overflow-hidden sm:py-40 bg-[url('/img/white-bg.jpg')] bg-cover bg-center" id="aboutme">
            <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-xl xl:max-w-2xl lg:pb-8 bg-white p-12 rounded-lg">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">About me</h2>
                        <p className="mt-6 text-xl leading-8 text-gray-600">
                            5 years of experience in Inkjet and permanent tattoos. I will bring your body to life with my art. I love to create unique designs that will make you stand out from the crowd.
                        </p>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Discover artistry that speaks on your skin. Your experienced tattoo artist blends unique designs with personal stories, creating masterpieces you&apos;ll proudly wear. Transform your vision into ink. Book now.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                            <Image
                                src="/img/loan.png"
                                alt="Loan's picture"
                                width={500}
                                height={700}
                                className="aspect-[5/7] w-[20rem] max-w-none rounded-2xl bg-gray-50 object-cover mx-auto"
                            />
                        </div>


                        {/* <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
                            <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                                <img
                                    src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                    alt=""
                                    className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                            <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                                <img
                                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                                    alt=""
                                    className="aspect-[7/5] w-[37rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                            <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                                <img
                                    src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                                    alt=""
                                    className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                                />
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    )
}