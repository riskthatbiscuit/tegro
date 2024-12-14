import Hero from './Hero';
import { dm_sans } from '../fonts';

import Tiles from '../components/built/Tiles';
import Video from './Video';
import Services from './Services';

export default async function Home() {
  return (
    <main
      className={`${dm_sans.className} isolate`}
    >
      <Hero />
      <div className="block md:hidden">
        <Tiles />
      </div>
      {/* <Services /> */}
      <Services />
      {/* <Logo /> */}
      <Video />
    </main>
  );
}
