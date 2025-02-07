import Image from 'next/image';

export default function SideImages() {
  return (
    <div className="hidden w-full lg:pt-24 md:block">
      <div className="flex items-center justify-start gap-4">
        <div className="lg:w-44 w-28 flex-none space-y-8 pt-44">
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
        <div className="lg:w-44 w-28 flex-none space-y-8">
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
      </div>
    </div>
  );
}