import Image from 'next/image';

export default function SideImages() {
  return (
    <div className="hidden w-full md:block lg:pt-24">
      <div className="flex items-center justify-start gap-4">
        <div className="w-28 flex-none space-y-8 pt-44 lg:w-44">
          <div className="relative flex justify-center">
            <Image
              src="/homeTiles/Batteries.jpg"
              alt="Batteries"
              width={400}
              height={400}
              priority={false}
              placeholder="empty"
              className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
          </div>
          <div className="relative">
            <Image
              src="/homeTiles/corn-field.jpg"
              alt="Corn Field"
              width={400}
              height={400}
              priority={false}
              placeholder="empty"
              className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
          </div>
        </div>
        <div className="w-28 flex-none space-y-8 lg:w-44">
          <div className="relative">
            <Image
              src="/homeTiles/airplane.jpg"
              alt="Airplane"
              width={400}
              height={400}
              priority={false}
              placeholder="empty"
              className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
          </div>
          <div className="relative">
            <Image
              src="/homeTiles/solar.jpg"
              alt="Solar Panels"
              width={400}
              height={400}
              priority={false}
              placeholder="empty"
              className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
          </div>
          </div>
          <div className="lg:w-44 w-28 flex-none space-y-8">
            <div className="relative">
              <Image
                src="/homeTiles/manufacturing.webp"
                alt="Manufacturing"
                width={400}
                height={400}
                priority={false} // Do not preload
                placeholder="empty" // No blur
                className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
              />
            </div>
            <div className="relative">
              <Image
                src="/homeTiles/tanker.jpg"
                alt="Tanker"
                width={400}
                height={400}
                priority={false}
                placeholder="empty"
                className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
              />
            </div>
            <div className="relative">
              <Image
                src="/homeTiles/factory.jpg"
                alt="Factory"
                width={400}
                height={400}
                priority={false}
                placeholder="empty"
                className="rounded-xl bg-gray-900/5 object-cover shadow-lg"
              />
            </div>
          <div className="lg:w-44 w-28 flex-none space-y-8"></div>
        </div>
      </div>
    </div>
  );
}