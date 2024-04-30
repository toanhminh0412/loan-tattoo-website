import SafeHtml from "./SafeHtml"

const tattooFaqs = [
    {
      id: 1,
      question: "WHAT IS YOUR TATTOOING STYLE OR SPECIALTY?",
      answer:
        "My specialty lies in black and grey X-ray flower tattoos, but I am also versatile in various styles such as traditional, neo traditional, fine line delicate tattoos, and small to medium realism piece.",
    },
    {
      id: 2,
      question: "CAN I SEE EXAMPLES OF YOUR PREVIOUS WORK OR A PORTFOLIO?",
      answer:
        "Absolutely! You can view my portfolio on my social media accounts [@loan.pmu]",
    },
    {
      id: 3,
      question: "DO YOU HAVE A MINIMUM AGE REQUIREMENT FOR CLIENTS?",
      answer:
        "Yes, I require all clients to be at least 18 years old to get tattooed. Valid ID is necessary for age verification.",
    },
    {
      id: 4,
      question: "HOW DO YOU ENSURE THE SAFETY AND CLEANLINESS OF YOUR EQUIPMENT AND WORKSPACE?",
      answer:
        "I strictly adhere to industry health and safety standards by using single-use, sterilized needles, disposable gloves, and maintaining a clean and sanitized workspace at all times.",
    },
    {
      id: 5,
      question: "WHAT IS THE PRICING?",
      answer: "Each piece of flash is priced individually start from $120. For custom work, the charge is $170 per hour.",
    },
    {
      id: 6,
      question: "DO YOU REQUIRE A DEPOSIT FOR BOOKING AN APPOINTMENT?",
      answer: "Yes, I require a non-refundable deposit $50 to secure your tattoo appointment, which will be deducted from the final cost of the tattoo.",
    },
    {
      id: 7,
      question: "HOW DO YOU HANDLE TOUCH-UPS OR CORRECTIONS IF NEEDED?",
      answer: "I offer complimentary touch-ups within a certain timeframe if needed to ensure your tattoo looks its best.",
    },
    {
      id: 8,
      question: "WHAT IS YOUR CANCELLATION OR RESCHEDULING POLICY?",
      answer: "I require at least 48 hours notice for cancellations or rescheduling to accommodate other clients. Deposits may be forfeited for last-minute cancellations.",
    },
    {
      id: 9,
      question: "DO YOU HAVE ANY AFTERCARE INSTRUCTIONS FOR TATTOO HEALING?",
      answer: "Yes, I provide detailed aftercare instructions to help facilitate proper healing and maintain the quality of your new tattoo.",
    },
]

const permanentMakeupFaqs = [
    {
      id: 1,
      question: "HOW LONG HAVE YOU BEEN A PERMANENT MAKEUP ARTIST?",
      answer: "I have been a certified permanent makeup artist for 5 years, specializing in enhancing natural beauty through eyebrow ombre/hairstroke, lip blush, and eyeliner procedures.",
    },
    {
      id: 2,
      question: "HOW TO DO A SEMI-PERMANENT MAKEUP?",
      html: true,
      answer:
      `
      <ul class="list-disc ml-3">
        <li>I wipe the surface area clean get it ready for tattoo</li>
        <li>Measure the shape that suit with the face and make sure you happy with it before procedure</li>
        <li>Choose pigments that matches your skin tone</li>
        <li>Use pen machine and needle procedure on the shape I already map.</li>
      </ul>`,
    },
    {
      id: 3,
      question: "CAN I SEE BEFORE AND AFTER PHOTOS OF YOUR PREVIOUS CLIENTS?",
      answer:
        "Absolutely! You can view a gallery of before and after photos here rolling down or on my social media accounts [@loan.pmu].",
    },
    {
      id: 4,
      question: "WHAT IS THE DIFFERENCE BETWEEN SEMI-PERMANENT MAKEUP AND TATTOOING?",
      html: true,
      answer:
        `Body tattoos traditionally tend to last forever.<br/>
        Meanwhile, the pigments for semi-permanent makeup usually last up to three years or so - it slowly fades throughout the years.`,
    },
    {
      id: 5,
      question: "IS SEMI-PERMANENT MAKEUP SAFE?",
      answer: "Yes. It is an entirely safe treatment. Sterilize tool and environment, especially I only uses the latest technology and follows strict health and safety guidelines for the processes.",
    },
    {
      id: 6,
      question: "HOW LONG DOES EACH PERMANENT MAKEUP PROCEDURE TYPICALLY TAKE?",
      answer: "The duration of each procedure varies depending on the complexity and type of service. On average, a session can take between 1 to 2 hours.",
    },
    {
      id: 7,
      question: "WHAT IS THE HEALING PROCESS LIKE AFTER A PERMANENT MAKEUP PROCEDURE?",
      answer: "The healing process varies for each individual and type of procedure. I provide detailed aftercare instructions to ensure proper healing and long-lasting results.",
    },
    {
      id: 8,
      question: "HOW LONG DOES IT LAST?",
      answer: "Each individual will last different, based on type of the skin and procedure, generally it’s last from 24 months, although depending on the individual can last longer.",
    },
    {
      id: 9,
      question: "IS IT PAINFUL?",
      answer: "I only inject the color pigment on the very superficial surface of the skin, resulting in a slight discomfort for the first few minutes, but it does not hurt, just a little bit stingy. I also can use numbing cream or anesthesia during the procedure if you require to ensure a comfortable experience for my clients during the procedure.",
    },
    {
      id: 10,
      question: "HOW DO YOU ENSURE THE SAFETY AND CLEANLINESS OF YOUR EQUIPMENT AND WORKSPACE?",
      answer: "I follow strict sanitation protocols and use disposable, single-use needles and tools to maintain a clean and sterile environment for each client.",
    },
    {
      id: 11,
      question: "WHAT IS YOUR PRICING STRUCTURE FOR PERMANENT MAKEUP SERVICES?",
      answer: "My pricing is based on the type of service and complexity of the procedure. I provide personalized quotes during the consultation process.",
    },
    {
      id: 12,
      question: "DO YOU OFFER CONSULTATIONS BEFORE BOOKING A PERMANENT MAKEUP APPOINTMENT?",
      answer: "Yes, I offer complimentary consultations to discuss client expectations, assess suitability for the procedure, and address any questions or concerns. It’s free.",
    },
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
  