import Link from "next/link"
import ExpandableImage from "./ExpandableImage"

const tattoos = [
    {
      id: 1,
      href: 'https://www.instagram.com/p/C6CK54ovqBV/',
      imageSrc: '/img/tattoo/tattoo1.jpg',
      imageAlt: "Tattoo 1",
    },
    {
      id: 2,
      href: 'https://www.instagram.com/p/C44d-HPLLl8/?img_index=1',
      imageSrc: '/img/tattoo/tattoo2.jpg',
      imageAlt: "Tattoo 2",
    },
    {
      id: 3,
      href: 'https://www.instagram.com/p/C4zC4JfpvpT/',
      imageSrc: '/img/tattoo/tattoo3.jpg',
      imageAlt: "Tattoo 3",
    },
    {
      id: 4,
      href: 'https://www.instagram.com/p/Cz21tNNOKZ1/?img_index=1',
      imageSrc: '/img/tattoo/tattoo4.jpg',
      imageAlt: "Tattoo 4",
    },
    {
      id: 5,
      href: 'https://www.instagram.com/p/Cz4plMOPnCy/?img_index=1',
      imageSrc: '/img/tattoo/tattoo5.jpg',
      imageAlt: "Tattoo 5",
    },
    {
      id: 6,
      href: 'https://www.instagram.com/p/C0H-1Gdymqw/?img_index=1',
      imageSrc: '/img/tattoo/tattoo6.jpg',
      imageAlt: "Tattoo 6",
    },
    {
      id: 7,
      href: 'https://www.instagram.com/p/C3emIEhOO5q/?img_index=1',
      imageSrc: '/img/tattoo/tattoo7.jpg',
      imageAlt: "Tattoo 7",
    },
    {
      id: 8,
      href: 'https://www.instagram.com/p/C5GwXY7RSz_/',
      imageSrc: '/img/tattoo/tattoo8.jpg',
      imageAlt: "Tattoo 8",
    },
    {
      id: 9,
      href: 'https://www.instagram.com/p/C5hfttztei2/',
      imageSrc: '/img/tattoo/tattoo9.jpg',
      imageAlt: "Tattoo 9",
    }
]
  
export default function Portfolio() {
    return (
    <section className="bg-white" id="tattoo">
        <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">Fine-line and custom tattoos</h2>
            <p className="mt-2 text-lg sm:text-xl text-gray-600">
                Want one like this? Book now!
            </p>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10 xl:gap-x-8">
                {tattoos.map((tattoo) => (
                <div key={tattoo.id} className="group relative">
                    <Link href={tattoo.href}>
                      <ExpandableImage src={tattoo.imageSrc} alt={tattoo.imageAlt} grayscale={true}/>
                    </Link>
                </div>
                ))}
            </div>
        </div>
    </section>
    )
}
  