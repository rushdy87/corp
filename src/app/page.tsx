import Hero from '@/components/hero';
import homeImg from 'public/home.jpg';

export default function Home() {
  return (
    <div>
      <Hero
        imgData={homeImg}
        imgAlt='car foctory'
        title='Professional Cloud Hosting'
      />
    </div>
  );
}
