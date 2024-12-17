const team = [
  {
    name: 'Joe Bushnell',
    role: 'Managing Director & CEO',
    description:
      'Joe is an innovation-focused structured finance, net zero and technology advisor who has been at the forefront of multiple novel, sustainability focused financial solutions. Joe has spent the last decade mobilising financial solutions for sustainable technology across loans, carbon development finance, commodity and supply chain solutions.',
    link: 'https://www.linkedin.com/in/joebushnell/',
    imageUrl: './teamPhotos/JoePhoto.jpeg',
  },
  {
    name: 'Alex Fitzpatrick',
    role: 'Director',
    description:
      'With a decade of experience at the intersection of policy, sustainability, and investment across mining, oil and gas and energy, Alex blends strong corporate, investor and government networks with an ability to synthesise and connect market trends spanning sectors, jurisdictions and geographies to realise value and convert opportunity. ',
    link: 'https://www.linkedin.com/in/alexfitzpatrick5/',
    imageUrl: './teamPhotos/AlexPhoto.jpeg',
  },
];

export default function Team() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-4 mb-4 pt-8">
      <ul
        role="list"
        className="mx-auto flex flex-col gap-x-8 items-center lg:mx-auto lg:justify-center lg:max-w-none lg:flex-row "
      >
        {team.map((person) => (
          <li key={person.name} className="group basis-1/3 max-w-96 mb-4">
            <div className="animate-fade-up animate-once animate-duration-[2000ms] animate-ease-in-out relative flex">
              <img
                className="absolute inset-0 mx-auto h-64 rounded-md bg-fixed object-cover object-center"
                src={person.imageUrl}
                alt=""
              />
              <p className="rounded-md text-b2_custom justify-center invisible relative flex h-64 w-full p-2 flex-col inset-0 bg-white bg-opacity-80 group-hover:visible">
                {person.description}
              </p>
            </div>
            <h3 className="text-h5_custom font-palanquinDark mt-4 text-base font-semibold leading-7 tracking-tight ">
              {person.name}
            </h3>
            <div className="flex justify-between">
              <p className="text-h6_custom font-palanquinDark text-sm leading-6 text-mainDark">
                {person.role}
              </p>
              <a
                href={person.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-500"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
