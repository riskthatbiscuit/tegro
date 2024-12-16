import Hero from './Hero';
import Logo from '../../components/built/Logo';
import { dm_sans } from '@/app/fonts';
// import Body from './Body';
import Contact from '@/app/components/built/Contact';

export default async function ExtraPage() {
  return (
    <div className={`${dm_sans.className} isolate`}>
      <Hero />
      {/* <Body /> */}
      <Contact title="Stay up to date"/>
    </div>
  );
}
