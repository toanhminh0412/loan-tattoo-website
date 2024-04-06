import Image from "next/image"
import Link from "next/link"

const tattoos = [
    {
      id: 1,
      href: 'https://www.instagram.com/p/C44fCInLoFc/',
      imageSrc: '/img/tattoo1.png',
      imageAlt: "Tattoo 1",
    },
    {
      id: 2,
      href: 'https://www.instagram.com/p/C5GwXY7RSz_/',
      imageSrc: '/img/tattoo2.png',
      imageAlt: "Tattoo 2",
    },
    {
      id: 3,
      href: 'https://www.instagram.com/p/C44d-HPLLl8/',
      imageSrc: '/img/tattoo3.png',
      imageAlt: "Tattoo 3",
    },
    {
      id: 4,
      href: 'https://www.instagram.com/p/C4zC4JfpvpT/',
      imageSrc: '/img/tattoo4.png',
      imageAlt: "Tattoo 4",
    },
    {
      id: 5,
      href: 'https://www.instagram.com/p/C4zC4JfpvpT/',
      imageSrc: '/img/tattoo5.png',
      imageAlt: "Tattoo 5",
    },
    {
      id: 6,
      href: 'https://www.instagram.com/p/C34IaisLhU1/?img_index=1',
      imageSrc: '/img/tattoo6.png',
      imageAlt: "Tattoo 6",
    },
    {
      id: 7,
      href: 'https://www.instagram.com/p/C4Zn3AHrQPl/?img_index=1',
      imageSrc: '/img/tattoo7.png',
      imageAlt: "Tattoo 7",
    },
    {
      id: 8,
      href: 'https://www.instagram.com/p/C308P_Py7p5/?img_index=1',
      imageSrc: '/img/tattoo8.png',
      imageAlt: "Tattoo 8",
    },
    {
      id: 9,
      href: 'https://www.instagram.com/p/C3emIEhOO5q/?img_index=1',
      imageSrc: '/img/tattoo9.png',
      imageAlt: "Tattoo 9",
    },
    {
      id: 10,
      href: 'https://www.instagram.com/p/C3Yp-Ixv1vn/?img_index=1',
      imageSrc: '/img/tattoo10.png',
      imageAlt: "Tattoo 10",
    },
    // {
    //   id: 11,
    //   href: 'https://www.instagram.com/p/C3YonsKPO0T/',
    //   imageSrc: '/img/tattoo11.png',
    //   imageAlt: "Tattoo 11",
    // },
    // {
    //   id: 12,
    //   href: 'https://www.instagram.com/p/Cz4plMOPnCy/?img_index=1',
    //   imageSrc: '/img/tattoo12.png',
    //   imageAlt: "Tattoo 12",
    // },
    // {
    //   id: 13,
    //   href: 'https://www.instagram.com/p/Cz21tNNOKZ1/?img_index=1',
    //   imageSrc: '/img/tattoo13.png',
    //   imageAlt: "Tattoo 13",
    // },
    // {
    //   id: 14,
    //   href: 'https://www.instagram.com/p/CzFbTtzp3Fg/?img_index=1',
    //   imageSrc: '/img/tattoo14.png',
    //   imageAlt: "Tattoo 14",
    // }
]
  
export default function Portfolio() {
    return (
    <section className="bg-gray-100">
        <div className="px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-gray-900">Check out my past works!</h2>
            <p className="mt-2 text-lg sm:text-xl text-gray-600">
                Want one like this? Book now!
            </p>

            <div className="mt-6 flex flex-row justify-start flex-wrap gap-x-6 gap-y-10 xl:gap-x-8">
                {tattoos.map((tattoo) => (
                <div key={tattoo.id} className="group relative">
                    <Link href={tattoo.href} target="_blank">
                        <div className="h-40 w-[7.5rem] sm:h-80 sm:w-60 overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75">
                            <Image
                                src={tattoo.imageSrc}
                                alt={tattoo.imageAlt}
                                width={240}
                                height={320}
                                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                            />
                        </div>
                    </Link>
                </div>
                ))}
            </div>
        </div>
    </section>
    )
}
  