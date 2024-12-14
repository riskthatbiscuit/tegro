import SGD from '@/app/components/built/SDGIcons';
import AboutSection from './About';
import Career from './Career';
import Header from './Header';
import Team from './Team';
import Timeline from './Timeline';
import Values from './Values';

export default function About() {
  return (
    <div>
      <Header />
      <div className="max-w-5xl md:flex mx-auto py-8 bg-mainLight bg-opacity-70">
        <AboutSection />
        {/* <Timeline /> */}
      </div>
      <Team />
      <Values />
      {/* <SGD /> */}
      {/* <Career /> */}
    </div>
  );
}