import { CardProyect } from './CardProyect';

export const SectionPortafolioComponent = () => {
  return (
    <section
      id='section3'
      className='min-h-screen p-6 pb-[100px] bg-custom-white justify-center'
    >
      <h2 className='text-center text-3xl md:text-6xl text-custom-black m-20 font-bold'>
        Our Projects
      </h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center gap-4'>
        <CardProyect
          children={'https://ssantinosteckler.github.io/Portafolio/'}
        ></CardProyect>
        <CardProyect
          children={
            'https://6643ac264ee14021f499abe1--roaring-sfogliatella-5d74ac.netlify.app/'
          }
        ></CardProyect>
        <CardProyect
          children={
            'https://6643acd60961471dfab510d4--dynamic-pie-156d5a.netlify.app/'
          }
        ></CardProyect>
        <CardProyect children={''}></CardProyect>
        <CardProyect children={''}></CardProyect>
        <CardProyect children={''}></CardProyect>
      </div>
    </section>
  );
};
