const testimonials = [
    {
        id: 1,
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        name: 'Hector Gibbons',
    },
    {
        id: 2,
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        name: 'Hector Gibbons',
    },
    {
        id: 3,
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        name: 'Hector Gibbons',
    },
    {
        id: 4,
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        name: 'Hector Gibbons',
    },
    {
        id: 5,
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        name: 'Hector Gibbons',
    },
    {
        id: 6,
        body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
        name: 'Hector Gibbons',
    }
]
  
export default function Testimonials() {
    return (
        <section className="bg-white py-24 sm:py-32" id="testimonials">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        My clients are extremely happy with my work
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
                        {testimonials.map((testimonial) => (
                        <div key={testimonial.id} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                            <figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
                                <blockquote className="text-gray-900">
                                    <p>{`“${testimonial.body}”`}</p>
                                </blockquote>
                                <figcaption className="mt-6 flex items-center gap-x-4">
                                    <div>
                                        <div className="font-semibold text-gray-900">{testimonial.name}</div>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
  