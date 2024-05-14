import { useState } from 'react';
import { Link } from 'react-scroll';

export const HeaderComponent = () => {
  const [menu, setMenu] = useState(false);

  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <header className='w-full bg-white-600 flex justify-between py-8 px-7 items-center md:py-10 md:px-20'>
      <img src='../Trel.jpg' alt='logo-trel' className='w-full max-w-32' />

      <div className='max-w-7 md:hidden cursor-pointer' onClick={handleClick}>
        <img src='./menu.png' alt='menu-logo' className='w-full' />
      </div>

      <div
        className={`${
          menu ? 'block' : 'hidden'
        } md:hidden transition-all duration-500`}
      >
        <div className='absolute bg-custom-blue top-0 right-0 h-[200vh] p-10 w-[50%] z-20 text-custom-white text-2xl shadow-custom-black shadow-custom-menu-shadow'>
          <img
            src='./x.png'
            alt='close'
            onClick={handleClick}
            className='bg-custom-white rounded-full p-2 max-w-10 cursor-pointer mb-12'
          />
          <nav>
            <ul className='flex flex-col gap-5 cursor-pointer'>
              <li>
                <Link
                  to='section1'
                  smooth={true}
                  duration={500}
                  onClick={handleClick}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='section2'
                  smooth={true}
                  duration={500}
                  onClick={handleClick}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to='section3'
                  smooth={true}
                  duration={500}
                  onClick={handleClick}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to='section4'
                  smooth={true}
                  duration={500}
                  onClick={handleClick}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className='hidden md:block'>
        <nav>
          <ul className='flex gap-7 cursor-pointer'>
            <li>
              <Link to='section1' smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to='section2' smooth={true} duration={500}>
                About Us
              </Link>
            </li>
            <li>
              <Link to='section3' smooth={true} duration={500}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link to='section4' smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
