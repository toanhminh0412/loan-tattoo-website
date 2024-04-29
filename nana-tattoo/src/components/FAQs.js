import SafeHtml from "./SafeHtml"

const tattooFaqs = [
    {
      id: 1,
      question: "HOW OLD DO I NEED TO BE?",
      answer:
        "You need to be at least 18 to get a tattoo & Make sure to bring two pieces of ID.",
    },
    {
      id: 2,
      question: "DO I NEED TO MAKE A DEPOSIT?",
      answer:
        "We require a $50 non-refundable deposit before we can confirm your appointment. That deposit applies to a specific piece of art—a custom design, or flash. It can’t be swapped to a different piece. Deposits should be made electronically with etransfer or Paypal.",
    },
    {
      id: 3,
      question: "WHAT DOES IT COST?",
      answer:
        "Each piece of flash is priced individually start from $120. For custom work, the charge is $170 per hour. ",
    },
    {
      id: 4,
      question: "WHAT IS SEMI-PERMANENT MAKEUP?",
      answer:
        "It is a complexion treatment particularly to improve eyes, brows, and lips, adding definition to the face.",
    },
    {
      id: 5,
      question: "HOW TO DO A SEMI-PERMANENT MAKEUP?",
      html: true,
      answer:
        `
        <ul class="list-disc ml-3">
            <li>I wipe the surface area clean get it ready for tattoo</li>
            <li>Measure the shape that suit with the face and make sure you happy with it before procedure</li>
            <li>Choose pigments that matches your skin tone</li>
            <li>Use pen machine and needle procedure on the shape I already map.</li>
        </ul>
        `,
    },
]

const permanentMakeupFaqs = [
    {
      id: 1,
      question: "WHAT IS THE DIFFERENCE BETWEEN SEMI-PERMANENT MAKEUP AND TATTOOING?",
      html: true,
      answer:
        `Body tattoos traditionally tend to last forever.<br>
        Meanwhile, the pigments for semi-permanent makeup usually last up to three years or so - it slowly fades throughout the years.`,
    },
    {
      id: 2,
      question: "IS SEMI-PERMANENT MAKEUP SAFE?",
      answer:
        "Yes. It is an entirely safe treatment. Sterilize tool and environment, especially I only uses the latest technology and follows strict health and safety guidelines for the processes.",
    },
    {
      id: 3,
      question: "IS SEMI-PERMANENT MAKEUP PAINFUL?",
      answer:
        "I only inject the color pigment on the very superficial surface of the skin, resulting in a slight discomfort for the first few minutes, but it does not hurt, just a little bit stingy.",
    }
]
  
export default function FAQs() {
    return (
    <section className="bg-white" id="faqs">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
            {/* Tattoo */}
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Fine-line and custom tattoos - Frequently asked questions</h2>
            <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
                {tattooFaqs.map((faq) => (
                <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                    <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                    <dd className="mt-4 lg:col-span-7 lg:mt-0">
                        {faq.html ? <SafeHtml className="text-base leading-7 text-gray-600" htmlContent={faq.answer}></SafeHtml>
                        : <p className="text-base leading-7 text-gray-600">{faq.answer}</p>}
                    </dd>
                </div>
                ))}
            </dl>

            {/* Permanent makeup */}
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 mt-32 !border-t-0">Permanent makeup - Frequently asked questions</h2>
            <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
                {permanentMakeupFaqs.map((faq) => (
                <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                    <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                    <dd className="mt-4 lg:col-span-7 lg:mt-0">
                        {faq.html ? <SafeHtml className="text-base leading-7 text-gray-600" htmlContent={faq.answer}></SafeHtml>
                        : <p className="text-base leading-7 text-gray-600">{faq.answer}</p>}
                    </dd>
                </div>
                ))}
            </dl>
        </div>
    </section>
    )
}
  