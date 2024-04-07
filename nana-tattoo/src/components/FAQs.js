const faqs = [
    {
      id: 1,
      question: "What's the best thing about Switzerland?",
      answer:
        "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
    {
      id: 2,
      question: "How do you organize a space party?",
      answer:
        "You planet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 3,
      question: "Why couldn't the bicycle stand up by itself?",
      answer:
        "It was two tired. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 4,
      question: "How does a penguin build its house?",
      answer:
        "Igloos it together. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 5,
      question: "Why don't scientists trust atoms?",
      answer:
        "Because they make up everything. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 6,
      question: "What do you call cheese that isn't yours?",
      answer:
        "Nacho cheese. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 7,
      question: "How many tickles does it take to make an octopus laugh?",
      answer:
        "Ten tickles. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
      id: 8,
      question: "Why did the scarecrow win an award?",
      answer:
        "Because he was outstanding in his field. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    }
]
  
  export default function FAQs() {
        return (
        <section className="bg-white" id="faqs">
            <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
                <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
                <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
                    {faqs.map((faq) => (
                    <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                        <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                        <dd className="mt-4 lg:col-span-7 lg:mt-0">
                            <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                        </dd>
                    </div>
                    ))}
                </dl>
            </div>
        </section>
        )
  }
  