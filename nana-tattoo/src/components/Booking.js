import Link from "next/link"

const services = [
    {
        id: 1,
        name: "Consultation",
        price: "$20/hr",
        description: "Consultation for your tattoo ideas. This is a great opportunity to discuss your ideas and get a feel for the artist."
    },
    {
        id: 2,
        name: "Fine-line Tattoo",
        price: "$150/hr",
        description: "Tattoo session with the artist. This includes the design, tattooing, and aftercare."
    },
    {
        id: 3,
        name: "Permanent Makeup",
        price: "$150/hr",
        description: "Permanent makeup session with the artist. This includes the design, tattooing, and aftercare."
    }
]

export default function Booking() {
    return (
        <section className="bg-white py-20 px-10 lg:px-24" id="booking">
            <div className="w-full max-w-5xl mx-auto">
                <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">Book your appointment</h2>
                <p className="mt-2 text-lg sm:text-xl text-gray-600">
                    Choose a service below to book your appointment.
                </p>

                <div className="mt-6 w-full flex flex-col gap-8">
                    {services.map((service) => (
                        <div key={service.id} className="p-6 bg-white rounded-lg shadow-lg border border-gray-100">
                            <h3 className="text-xl font-bold text-gray-900">{service.name}</h3>
                            <h2 className="text-3xl font-semibold mt-3 text-blue-700">{service.price}</h2>
                            <p className="mt-3 mb-6 text-lg text-gray-600">{service.description}</p>
                            <Link
                                href="https://squareup.com/appointments/buyer/widget/dfv677bef25jyo/LQ7XGC6J484Z0"
                                target="_blank"
                                className="px-4 py-3 bg-blue-700 hover:bg-blue-900 duration-100 text-white rounded-md">
                                Book now
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}