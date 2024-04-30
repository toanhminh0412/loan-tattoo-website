import Link from "next/link"
import ExpandableImage from "./ExpandableImage"

const makeups = [
    {
      id: 1,
    //   href: 'https://www.instagram.com/p/C6CK54ovqBV/',
      imageSrc: '/img/permanent-makeup/makeup1.jpg',
      imageAlt: "Makeup 1",
    },
    {
      id: 2,
    //   href: 'https://www.instagram.com/p/C44d-HPLLl8/?img_index=1',
      imageSrc: '/img/permanent-makeup/makeup2.jpg',
      imageAlt: "Makeup 2",
    },
    {
      id: 3,
    //   href: 'https://www.instagram.com/p/C4zC4JfpvpT/',
      imageSrc: '/img/permanent-makeup/makeup3.jpg',
      imageAlt: "Makeup 3",
    },
    {
      id: 4,
    //   href: 'https://www.instagram.com/p/Cz21tNNOKZ1/?img_index=1',
      imageSrc: '/img/permanent-makeup/makeup4.jpg',
      imageAlt: "Makeup 4",
    },
    {
      id: 5,
    //   href: 'https://www.instagram.com/p/Cz4plMOPnCy/?img_index=1',
      imageSrc: '/img/permanent-makeup/makeup5.jpg',
      imageAlt: "Makeup 5",
    },
    {
      id: 6,
    //   href: 'https://www.instagram.com/p/C0H-1Gdymqw/?img_index=1',
      imageSrc: '/img/permanent-makeup/makeup6.jpg',
      imageAlt: "Makeup 6",
    },
    {
      id: 7,
    //   href: 'https://www.instagram.com/p/C3emIEhOO5q/?img_index=1',
      imageSrc: '/img/permanent-makeup/makeup7.jpg',
      imageAlt: "Makeup 7",
    },
    {
      id: 8,
    //   href: 'https://www.instagram.com/p/C5GwXY7RSz_/',
      imageSrc: '/img/permanent-makeup/makeup8.jpg',
      imageAlt: "Makeup 8",
    }
]
  
export default function PermanentMakeup() {
    return (
    <section className="bg-white" id="makeup">
        <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">Permanent Makeup</h2>
            <p className="mt-2 text-lg sm:text-xl text-gray-600">
                Want one like this? Book now!
            </p>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-6 gap-y-10 xl:gap-x-8">
                {makeups.map((makeup) => (
                <div key={makeup.id} className="group relative">
                    {makeup.href ? 
                    <Link href={makeup.href}>
                        <ExpandableImage src={makeup.imageSrc} alt={makeup.imageAlt} />
                    </Link> :
                    <ExpandableImage src={makeup.imageSrc} alt={makeup.imageAlt} />}
                </div>
                ))}
            </div>
        </div>
    </section>
    )
}
  