import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Smartphone } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-green-800 text-white body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
            <Image
              src="/logo.jpg"
              alt="EmolientaSO Logo"
              width={120}
              height={40}
              className="rounded-full"
            />
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="#about" className="mr-5 hover:text-green-200">
              About
            </Link>
            <Link href="#features" className="mr-5 hover:text-green-200">
              Features
            </Link>
            <Link href="#locations" className="mr-5 hover:text-green-200">
              Locations
            </Link>
            <Link href="#contact" className="mr-5 hover:text-green-200">
              Contact
            </Link>
          </nav>
          <Button className="inline-flex items-center bg-green-600 border-0 py-1 px-3 focus:outline-none hover:bg-green-700 rounded text-base mt-4 md:mt-0">
            Download App
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        <section className="text-gray-600 body-font">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Discover the Future of Emoliente
                <br className="hidden lg:inline-block" />
                with EmolientaSO
              </h1>
              <p className="mb-8 leading-relaxed">
                Experience Peru's beloved traditional beverage reimagined through technology. EmolientaSO brings you the
                first tech-driven chain of emoliente sellers in the region, ensuring quality, convenience, and a taste
                of innovation in every sip.
              </p>
              <div className="flex justify-center">
                <Button className="inline-flex text-white bg-green-600 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 rounded text-lg">
                  Find Nearest Seller
                </Button>
                <Button
                  variant="outline"
                  className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center rounded"
                alt="Emoliente Seller"
                src="/emolientero.jpg"
                width={720}
                height={600}
              />
            </div>
          </div>
        </section>

        <section id="features" className="text-gray-600 body-font bg-green-50">
          <div className="container px-5 py-24 mx-auto">
            <div className="text-center mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
                Why Choose EmolientaSO?
              </h2>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                Discover how we're revolutionizing the emoliente experience with cutting-edge technology and traditional
                flavors.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-600 text-white flex-shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Geo-Location</h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Find the nearest emoliente seller with real-time location tracking.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-600 text-white flex-shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Quick Service</h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Order ahead and skip the wait with our efficient service system.
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3">
                <div className="flex rounded-lg h-full bg-white p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-green-600 text-white flex-shrink-0">
                      <Smartphone className="w-5 h-5" />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">Mobile App</h2>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Customize your emoliente, track orders, and earn rewards through our user-friendly app.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="locations" className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Locations</h2>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Find EmolientaSO sellers across Peru. We're expanding to bring the taste of innovation to every corner
                of the country.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              {["Lima", "Arequipa", "Cusco", "Trujillo"].map((city) => (
                <div key={city} className="p-4 lg:w-1/4 md:w-1/2">
                  <div className="h-full flex flex-col items-center text-center">
                    <Image
                      alt={`${city} Location`}
                      className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                    src={`/${city.toLowerCase()}.jpg`}
                      width={400}
                      height={224}
                    />
                    <div className="w-full">
                      <h3 className="title-font font-medium text-lg text-gray-900">{city}</h3>
                      <p className="mb-4">Multiple locations available</p>
                      <span className="inline-flex">
                        <Button variant="outline" size="sm">
                          View Sellers
                        </Button>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="text-gray-600 body-font relative bg-green-50">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h2 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h2>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Have questions or suggestions? We'd love to hear from you!
              </p>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="name" className="leading-7 text-sm text-gray-600">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label htmlFor="message" className="leading-7 text-sm text-gray-600">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <Button className="flex mx-auto text-white bg-green-600 border-0 py-2 px-8 focus:outline-none hover:bg-green-700 rounded text-lg">
                    Send
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="text-gray-600 body-font bg-green-800">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-white"
          >
            <Image
              src="/logo.jpg"
              alt="EmolientaSO Logo"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="ml-3 text-xl">EmolientaSO</span>
          </Link>
          <p className="text-sm text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © {new Date().getFullYear()} EmolientaSO —
            <a
              href="https://twitter.com/emolientaso"
              className="text-gray-300 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @emolientaso
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a className="text-gray-200" href="https://www.facebook.com/">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                                <title>Facebook</title>
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a className="ml-3 text-gray-200" href='https://x.com/'>
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                                <title>Twitter</title>
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
              </svg>
            </a>
            <a className="ml-3 text-gray-200" href="https://www.instagram.com/">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                                <title>Instagram</title>
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}
