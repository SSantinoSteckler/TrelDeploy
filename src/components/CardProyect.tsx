import { useState } from 'react';

export const CardProyect = ({ children }: { children: string }) => {
  const [value, setValue] = useState(false);

  const handleClick = () => {
    setValue(!value);
  };

  return (
    <>
      <div className='max-w-3xl w-full h-96 shadow-custom-black rounded-lg cursor-pointer'>
        <button
          className='absolute p-5 bg-custom-blue text-custom-white '
          onClick={handleClick}
        >
          OPEN
        </button>
        <iframe
          src={children}
          className='w-full h-full overflow-hidden overflow-y-auto'
        ></iframe>
      </div>
      <div
        className={
          value
            ? 'block max-w-[90%] max-h-[70%] md:max-w-[60%] md:max-h-[80%] h-full w-full bg-custom-white absolute border-4 z-50'
            : 'hidden'
        }
      >
        <img
          src='borrar.png'
          alt='borar'
          className='absolute max-w-10 m-5 cursor-pointer'
          onClick={handleClick}
        />
        <iframe src={children} className='w-full h-full'></iframe>
      </div>
    </>
  );
};
