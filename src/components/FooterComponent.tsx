export const FooterComponent = () => {
  return (
    <footer className='p-5 py-[50px] md:p-10 md:py-20 flex flex-col md:flex-row justify-around items-center gap-14'>
      <div className='text-custom-blue  flex flex-col gap-3 font-semibold justify-center items-center'>
        <img
          src='./Trel.jpg'
          alt='trel'
          className=' max-w-[100px] md:max-w-[200px]'
        />
      </div>

      <div className='flex flex-col gap-3 cursor-pointer text-[20px] font-semibold'>
        <span>Privacy</span>
        <span>Cookies</span>
        <span>Terms</span>
        <span>Agency</span>
        <span>📞Phone: +5491161023731</span>
        <span>📧Gmail: trelagency@gmail.com</span>
      </div>

      <div>
        <hr />
        <p className='font-bold text-1xl text-center'>
          &copy; {new Date().getFullYear()} Trel All rights reserved.
        </p>
      </div>
    </footer>
  );
};
