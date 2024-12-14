export default function SideImages() {
  return (
    <div className="hidden w-full lg:pt-24 md:block">
      <div className="flex items-center justify-start gap-4">
        <div className="lg:w-44 w-28 flex-none space-y-8 pt-44">
          <div className="relative flex justify-center">
            <img
              src="./homeTiles/Batteries.jpg"
              alt=""
              className="aspect-[3/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none items-center justify-center rounded-xl" />
          </div>
          <div className="relative">
            <img
              src="./homeTiles/corn-field.jpg"
              alt=""
              className="aspect-[3/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="lg:w-44 w-28 flex-none space-y-8">
          <div className="relative">
            <img
              src="./homeTiles/airplane.jpg"
              alt=""
              className="aspect-[3/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="relative">
            <img
              src="./homeTiles/solar.jpg"
              alt=""
              className="aspect-[3/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
        <div className="lg:w-44 w-28 flex-none space-y-8 ">
          <div className="relative">
            <img
              src="./homeTiles/manufacturing.webp"
              alt=""
              className="aspect-[3/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="relative">
            <img
              src="./homeTiles/tanker.jpg"
              alt=""
              className="aspect-[3/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
          <div className="relative">
            <img
              src="./homeTiles/factory.jpg"
              alt=""
              className="aspect-[3/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
            <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
          </div>
        </div>
      </div>
    </div>
  );
}
