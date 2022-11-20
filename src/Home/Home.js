
import React from 'react';
import { Link } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import Logo from '../Assets/Logo';
import TravelGraphic from '../Assets/TravelGraphic';
import Map from '../Assets/Map.png';
import Subscribe from '../Assets/SubscribeGraphic.png';
import Travel2 from '../Assets/Montreal.png';
import Travel1 from '../Assets/Salar.png';
import Travel4 from '../Assets/Sunken.png';
import Travel3 from '../Assets/WarmUpWarm.png';
import Apple from '../Assets/AppleIcon.png';
import Android from '../Assets/PlayStore.png';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Home = () => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="Home flex flex-col min-h-screen h-full w-full px-5 sm:px-20 justify-between bg-gradient-to-b from-[#E2FFF8] to-[#f1f1f1] ">
        <div className="Header flex flex-row justify-between items-center pt-5 sm:pt-9">
          <a href="/" className=" cursor-pointer">
            <Logo />
          </a>
          <button className="bg-[#20B08F] hover:bg-[#1b967a] text-white text-base font-bold py-[8px] sm:py-[14px] px-[20px] sm:px-[46px] rounded-[4px] sm:rounded-[10px] font-Mulish" onClick={handleClickOpen}>Subscribe</button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle><p className=' text-2xl font-bold font-Mulish'>{"Subscribe"}</p></DialogTitle>
            <DialogContent>
              <p className='text-xl font-normal font-Mulish' id="alert-dialog-slide-description">
                Let's get connected for more enhanced experience
              </p>
              <input className='flex text-base font-Mulish pt-[20px] pb-[8px] w-full outline-none border-b-2' placeholder='Enter your email address' />
            </DialogContent>
            <DialogActions>
              <button className="bg-[#20B08F] hover:bg-[#1b967a] text-white text-base font-bold py-[8px] sm:py-[14px] px-[20px] sm:px-[46px] rounded-[4px] sm:rounded-[10px] font-Mulish">Subscribe</button>
            </DialogActions>
          </Dialog>
        </div>
        <div className="MainTag flex flex-col lg:flex-row items-center pb-[30px] lg:pb-[67px]">
          <div className="HomeText flex flex-col w-[100%] lg:w-[50%] mt-2 lg:mt-[0]">
            <h1 className="text-[36px] md:text-[56px] font-extrabold max-w-[581px] lg:max-w-none mb-5 font-Mulish">Let’s explore, create and manage trip<br /><span className=" text-red-500">for free</span></h1>
            <p className=" text-xl md:text-2xl lg:text-base font-normal max-w-[533px] mb-8 font-Mulish text-[#00000080]">For many people organising trip is a headache, we made it easy for you plus we won’t charge you for that</p>
            <div className="flex flex-row items-center gap-4">
              <a alt="Play Store" href="https://play.google.com/">
                <div className='flex flex-row h-[48px] w-[160px] bg-[#000000] rounded-[10px] cursor-pointer justify-center'>
                  <img alt="Google play" src={Android} className='my-2' />
                  <div className='flex flex-col items-start justify-center ml-[10px] py-3'>
                    <p className=' text-[8px] font-bold font-Mulish text-[#ffffff]'>GET IT ON</p>
                    <p className=' text-base font-bold font-Mulish text-[#ffffff]'>Google Play</p>
                  </div>
                </div>
              </a>
              <a alt="Play Store" href="https://www.apple.com/in/app-store/">
                <div className='flex flex-row h-[48px] w-[160px] bg-[#000000] rounded-[10px] cursor-pointer justify-center'>
                  <img alt="App Store" src={Apple} className='my-1' width="20%" />
                  <div className='flex flex-col items-start justify-center ml-[10px] py-3'>
                    <p className=' text-[8px] font-bold font-Mulish text-[#ffffff]'>DOWNLOAD ON THE</p>
                    <p className=' text-base font-bold font-Mulish text-[#ffffff]'>App Store</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-end lg:justify-center w-[100%] lg:w-[50%] mt-6 lg:mt-[0]">
            <TravelGraphic />
          </div>
        </div>
      </div>
      {/* <div className="Fold2 flex flex-col min-h-screen md:min-h-fit lg:min-h-screen h-full w-full px-5 lg:px-20 items-center pb-10 md:pb-20 lg:pb-0">
        <h2 className='text-[24px] lg:text-[46px] font-extrabold font-Mulish mt-6 lg:mt-20'>What We Got For You</h2>
        <p className='text-[18px] md:text-2xl lg:text-base text-center lg:text-left font-normal font-Mulish mt-5 lg:mt-0 lg:mb-20 text-[#00000080]'>Enjoy different experiences in every place you visit</p>
        <div className='Cards flex flex-col md:flex-row gap-5 md:gap-3 lg:gap-5 pt-9 lg:pt-0'>
          <div className='Card flex flex-col h-[300px] w-[240px] lg:h-[450px] lg:w-[360px] items-center justify-end rounded-[20px] md:rounded-[20px] bg-[#ffffff]'>
            <p className=' text-xl lg:text-2xl font-bold font-Mulish pb-[50px] lg:pb-[110px]'>Save Time & Money</p>
          </div>
          <div className='Card flex flex-col h-[300px] w-[240px] lg:h-[450px] lg:w-[360px] items-center justify-end rounded-[20px] md:rounded-[20px] bg-[#ffffff]'>
            <p className=' text-xl lg:text-2xl font-bold font-Mulish pb-[50px] lg:pb-[110px]'>Find the best route</p>
          </div>
          <div className='Card flex flex-col h-[300px] w-[240px] lg:h-[450px] lg:w-[360px] items-center justify-end rounded-[20px] md:rounded-[20px] bg-[#ffffff]'>
            <p className=' text-xl lg:text-2xl font-bold font-Mulish pb-[50px] lg:pb-[110px]'>Add Minor Details </p>
          </div>
        </div>
      </div> */}
      <div className="Fold3 flex flex-col h-full lg:h-[700px] w-full px-5 lg:px-20 items-center bg-[#105847] pb-10 md:pb-20 lg:pb-0">
        <h2 className=' text-[24px] lg:text-[46px] font-extrabold font-Mulish mt-6 lg:mt-20 text-[#ffffff]'>What We Got For You</h2>
        <p className='text-[18px] md:text-2xl lg:text-base text-center lg:text-left font-normal font-Mulish mt-5 lg:mt-0 mb-20 text-[#ffffff80]'>Enjoy different experiences in every place you visit</p>
        <div className='Cards flex flex-col md:flex-row gap-20 lg:gap-28 md:flex-wrap lg:flex-initial md:justify-center'>
          <div className='Card flex flex-col h-[290px] w-[220px] items-center justify-end rounded-[20px] mt-4 lg:mt-24'>
            <img alt="Scene" src={Travel1} className=" mb-5" />
            <p className='text-base font-bold font-Mulish text-[#ffffff]'>Salar de Uyuni</p>
            <p className='text-base font-semibold font-Mulish text-[#ffffff80]'>Bolivia</p>
          </div>
          <div className='Card flex flex-col h-[290px] w-[220px] items-center justify-end rounded-[20px]'>
            <img alt="Scene" src={Travel2} className=" mb-5" />
            <p className='text-base font-bold font-Mulish text-[#ffffff]'>Montreal Garden</p>
            <p className='text-base font-semibold font-Mulish text-[#ffffff80]'>Canada</p>
          </div>
          <div className='Card flex flex-col h-[290px] w-[220px] items-center justify-end rounded-[20px] mt-0 lg:mt-24'>
            <img alt="Scene" src={Travel3} className=" mb-5" />
            <p className='text-base font-bold font-Mulish text-[#ffffff]'>Wrap Up Warm</p>
            <p className='text-base font-semibold font-Mulish text-[#ffffff80]'>Bolivia</p>
          </div>
          <div className='Card flex flex-col h-[290px] w-[220px] items-center justify-end rounded-[20px]'>
            <img alt="Scene" src={Travel4} className=" mb-5" />
            <p className='text-base font-bold font-Mulish text-[#ffffff]'>Sunken Cave</p>
            <p className='text-base font-semibold font-Mulish text-[#ffffff80]'>Yucatan, Mexico</p>
          </div>
        </div>
      </div>
      <div className="Fold4 flex flex-col h-full w-full px-5 lg:px-20 items-center pb-10 md:pb-20 lg:pb-0">
        <h2 className=' text-[24px] lg:text-[46px] font-extrabold font-Mulish mt-6 lg:mt-20'>Across the World</h2>
        <p className='text-[18px] md:text-2xl lg:text-base text-center lg:text-left font-normal font-Mulish mt-5 lg:mt-0 mb-5 lg:mb-20 text-[#00000080]'>Enjoy different experiences in every place you visit</p>
        <img alt="Map" src={Map} />
      </div>
      <div className="Fold5 flex flex-col h-full w-full px-5 lg:px-20 items-center mb-[50px] lg:mb-[100px]">
        <div className='flex flex-col lg:flex-row h-full w-[320px] md:w-[600px] lg:h-[344px] lg:w-[1040px] px-[50px] lg:px-[110px] py-[20px] lg:py-[40px] bg-[#F9E5C8] rounded-[34px] lg:rounded-[68px]'>
          <img alt="Subscribe" src={Subscribe} className='w-[100%] md-[50%] lg:w-[50%] ml-5 lg:ml-0 my-5 lg:my-0' />
          <div className='flex flex-col items-center justify-center'>
            <p className=' text-xl font-bold font-Mulish text-center mb-8'>Subscribe to get travel updates and other interesting offers about Escapekar.</p>
            <div className='flex flex-col lg:flex-row'>
              <input className='flex text-base text-center lg:text-left font-Mulish px-[24px] py-[20px] rounded-tl-[10px] lg:rounded-tl-[20px] rounded-bl-[0px] lg:rounded-bl-[20px] rounded-tr-[10px] lg:rounded-tr-[0px] rounded-br-[0px] lg:rounded-br-[0px] w-[280px] lg:w-[328px] outline-none' placeholder='Enter your email address' />
              <button className='flex text-base font-bold justify-center font-Mulish px-[24px] py-[20px] rounded-tr-[0px] lg:rounded-tr-[20px] rounded-br-[10px] lg:rounded-br-[20px] rounded-tl-[0px] lg:rounded-tl-[0px] rounded-bl-[10px] lg:rounded-bl-[0px] text-[#ffffff] bg-[#20B08F] hover:bg-[#1b967a]'>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer flex flex-col lg:flex-row h-full lg:h-[80px] w-full px-5 lg:px-20 items-center justify-between border border-t-[#dddddd]">
        <p className=' text-[18px] md:text-2xl lg:text-base text-center lg:text-left font-normal font-Mulish text-[#999999] mb-3 lg:mb-0 mt-3 lg:mt-0'>© 2022 Escape Planner Pvt Ltd. All rights reserved</p>
        <div className='flex flex-col lg:flex-row gap-[0px] lg:gap-[60px]'>
          <Link to="/terms-of-use" className=' text-[18px] md:text-2xl lg:text-base font-normal font-Mulish text-[#999999] mb-3 lg:mb-0'>Terms Of Use</Link>
          <Link to="/privacy-policy" className=' text-[18px] md:text-2xl lg:text-base font-normal font-Mulish text-[#999999] mb-3 lg:mb-0'>Privacy Policy</Link>
        </div>
      </div>
    </>
  );
}

export default Home;