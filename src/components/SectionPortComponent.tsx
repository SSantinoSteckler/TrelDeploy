import { Link } from 'react-scroll';

export const SectionPortComponent = () => {
  const phoneNumber = '5491161023731';
  const message = "Hi, I'm interested in Trel's services!";

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}${
      message ? `?text=${encodeURIComponent(message)}` : ''
    }`;
    window.open(url, '_blank');
  };

  return (
    <section
      id='section1'
      className='p-10 flex flex-col justify-evenly items-center md:items-start md:flex-row'
    >
      <div className='mt-20 flex flex-col gap-4'>
        <div className='flex flex-col gap-5'>
          <h1 className='text-3xl  md:text-5xl max-w-[1000px] text-custom-blue font-bold text-center md:text-left'>
            Build your online presence now!
          </h1>
          <h2 className='max-w-[700px] text-1xl md:text-2xl text-center md:text-left'>
            At Trel, we are committed to empowering digital ecosystem startups,
            efficiently and dynamically
          </h2>
        </div>
        <div className='flex justify-center md:justify-start '>
          <div className='max-w-[300px] w-full'>
            <Link to='section4' smooth={true} duration={500}>
              <button className='p-3 rounded-full w-full bg-custom-blue text-custom-white hover:bg-custom-white hover:text-custom-black hover:border-2 transition-all font-bold md:p-5 shadow-custom-black '>
                Get Started{' '}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className='max-w-[300px]  md:max-w-lg w-full  '>
        <img src='./Hombre.png' alt='' className='w-full relative top-10' />
      </div>
      <div
        className='fixed cursor-pointer  max-w-16 md:max-w-20  bg-custom-green rounded-full bottom-[50px] right-[30px]'
        onClick={handleClick}
      >
        <img
          src='./whatsapp.png'
          alt='whatsapp'
          className='w-full hover:scale-50 transition-all'
        />
      </div>
    </section>
  );
};
