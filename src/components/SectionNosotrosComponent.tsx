import { useTemps } from '../hooks/useTemps';

export const SectionNosotrosComponent = () => {
  const { ref, numeros } = useTemps();

  return (
    <section
      id='section2'
      className='flex p-4 md:p-8 items-center justify-between flex-col lg:flex-row min-h-svh'
      ref={ref}
    >
      <div className='p-5'>
        <div className='flex flex-col max-w-5xl gap-6'>
          <h2 className='text-custom-white text-2xl md:text-4xl font-semibold '>
            Why Trust Us? At Trel, we understand the importance of a solid and
            effective web presence
          </h2>
          <p className='text-custom-white max-w-4xl text-sm md:text-xl'>
            We have a highly experienced and skilled team of web developers, who
            are up-to-date with the latest trends and technologies in the
            digital world. We strive to maintain the highest standards of
            quality and excellence in everything we do.
          </p>
          <p className='text-custom-white max-w-4xl text-sm md:text-xl'>
            We take the time to understand the specific needs and objectives of
            your company. We work closely with you to develop custom web
            solutions that align perfectly with your business vision and
            requirements.
          </p>
          <span className='text-custom-green  flex flex-row gap-2 items-center text-lg md:text-2xl cursor-pointer '>
            <a href='https://www.instagram.com/trel.agency/' target='_blank'>
              {' '}
              Follow Trel and its community
            </a>

            <img src='./flecha.png' alt='arrow' className='max-w-6' />
          </span>
          <hr className='text-custom-green max-w-lg' />
        </div>
        <div className='bg-custom-white p-6 md:max-w-[550px] mt-5 flex flex-col gap-9 shadow-custom-black'>
          <div className='flex flex-col gap-3'>
            <span className='text-7xl h-6'>"</span>
            <p>
              There are painters who transform the sun into a yellow spot, but
              there are others who, with the help of their art and intelligence,
              transform a yellow spot into the sun.
            </p>
            <p>Inspiration exists, but it has to find you working.</p>
          </div>
          <div className='flex gap-3'>
            <img
              src='./picasso.jpg'
              alt='picasso-image'
              className='max-w-12 rounded-full object-cover border-2'
            />
            <div className='flex flex-col '>
              <strong>Pablo Picasso</strong>
              <span className='text-sm'>Painter and sculptor</span>
            </div>
          </div>
        </div>
      </div>
      <div className='text-custom-white flex flex-col gap-16 text-center max-w-3xl w-full p-5'>
        <hr />
        <div className='flex flex-col'>
          <span className='text-8xl  md:text-9xl relative right-6 text-custom-green flex justify-center items-center font-bold '>
            <span className='text-8xl text-custom-white'>+</span>
            {numeros.number1}
          </span>
          <p className='text-2xl md:text-3xl'>PROJECTS</p>
        </div>

        <div>
          <span className='text-8xl md:text-9xl relative right-6 text-custom-green flex justify-center items-center font-bold'>
            <span className='text-8xl  text-custom-white'>+</span>{' '}
            {numeros.number2}
          </span>
          <p className='text-2xl md:text-3xl'>TEMPLATES</p>
        </div>

        <div>
          <span className='text-8xl md:text-9xl relative right-8 text-custom-green flex justify-center items-center font-bold'>
            <span className='text-8xl  text-custom-white'>+</span>{' '}
            {numeros.number3}
          </span>
          <p className='text-2xl md:text-3xl'>CLIENTS</p>
        </div>
        <hr />
      </div>
    </section>
  );
};
