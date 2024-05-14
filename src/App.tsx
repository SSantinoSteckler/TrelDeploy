import { FooterComponent } from './components/FooterComponent';
import { HeaderComponent } from './components/HeaderComponent';
import { SectionContactComponent } from './components/SectionContactComponent';
import { SectionNosotrosComponent } from './components/SectionNosotrosComponent';
import { SectionPortComponent } from './components/SectionPortComponent';
import { SectionPortafolioComponent } from './components/SectionPortafolioComponent';

export function App() {
  return (
    <>
      <div className='md:bg-port-blue bg-no-repeat bg-fixed bg-cover'>
        <HeaderComponent></HeaderComponent>

        <SectionPortComponent></SectionPortComponent>
      </div>
      <main className='border-y-4 border-custom-white min-h-screen bg-custom-blue'>
        <SectionNosotrosComponent></SectionNosotrosComponent>
        <hr className='bg-custom-white h-2' />
        <SectionPortafolioComponent></SectionPortafolioComponent>
        <SectionContactComponent></SectionContactComponent>
      </main>
      <hr />
      <FooterComponent></FooterComponent>
    </>
  );
}
