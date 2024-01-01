// Homepage.jsx
import React, { useState, useEffect } from 'react';
import Tilt from 'react-vanilla-tilt'
import Navbar from './Navbar'; // Make sure to import or create your Navbar component
import Typed from 'typed.js';
import headerImg from './images/techny-voice-recognition-on-phone-screen (1).png'
import devices from './images/devices.svg'
import mic from './images/microphone-2.svg'
import pepl from './images/people.svg'
import play from './images/play-cricle.svg'
import voice from './images/voice-cricle.svg'
import elon from './images/Elon_Musk_Royal_Society_(crop2).jpg'
import vol from './images/volume-high.svg'
import audioBar from "./images/audio-waves.png"
const Homepage = () => {

  const strings = ['Welcome to Speaky..', 'Make your AI Clone..', 'Choose Any Character..'];
  const typedRef = React.useRef(null);

  useEffect(() => {
    // Initialize Typed.js
    const options = {
      strings: strings,
      typeSpeed: 70, // typing speed in milliseconds
      backSpeed: 30, // backspacing speed in milliseconds
      loop: true, // loop the animation
    };

    typedRef.current = new Typed('.auto-typer', options);

    // Cleanup on unmount
    return () => {
      typedRef.current.destroy();
    };
  }, [strings]);


  return (
    <div className="homepage-container">
      <Navbar />
      <div className="header-home bg-cover bg-center relative">
        <div className="text-box text-base leading-6 ">
          <h1 className="text-4xl font-bold"><span className="auto-typer"></span></h1>
          <p>There’s a new way to make video and podcasts. A good way. <br />Speaky is the simple, powerful, and fun way to edit.</p>
          <div className='home-btn mt-2'>
            <a href="./">Join Us</a>
            <a href="./">Live Demo</a>
          </div>
        </div>
          <div className='header-img flex justify-end'>
            <img src={headerImg} alt="" />
          </div>
      
      </div>

      <section className='play-btn-section'>
      <h1 className='text-4xl font-bold text-center'>Features</h1>
      <p className='text-center font-bold'>Create ultra realistic Text to Speech (TTS) using PlayHT’s AI Voice Generator. Our Voice AI instantly converts <br></br>text in to natural sounding humanlike voice performances across any language and accent.</p>
    <div className="play-btn-grid-section grid grid-cols-3 gap-6 pt-20 pb-3">
     
  {/* First Button */}
  <div className="group relative">
  <div className="flex flex-col items-center justify-center peer  pb-5">
    <audio preload="none" src="https://playtht-website-assets.s3.amazonaws.com/voice-samples/pages/home/Play.ht+-+conversational.wav"></audio>
    <button className="flex flex-row items-center justify-center rounded-full bg-white  border border-blue-200 shrink-0 w-[80px] md:w-[120px] h-[80px] md:h-[120px] xl:hover:shadow-[0_0_15px_10px_rgba(255,255,255,0.3)] transition-shadow duration-300">
      <svg className="w-[60%] h-[60%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <g id="main-shapes">
          <polygon id="pause-bar--left" points="18,13 24.35,16.585 24.35,32.415 18,36" fill="black"></polygon>
          <polygon id="pause-bar--right" points="24.2,16.5 38,24.5 38,24.5 24.2,32.5" fill="black"></polygon>
        </g>
      </svg>
    </button>
    <div className="flex flex-col gap-y-4"></div>
  </div>
  <div className="xl:opacity-0 xl:peer-hover:opacity-100 transition-opacity duration-300 text-white-400 text-center text-base"><p className='text-2x1 bold'>Voice Your Conversational AI</p></div>
  </div>

  {/* Second Button */}
  <div className="group relative">
  <div className="flex flex-col items-center justify-center peer  pb-5">
    <audio preload="none" src="https://playtht-website-assets.s3.amazonaws.com/voice-samples/pages/home/Play.ht+-+conversational.wav"></audio>
    <button className="flex flex-row items-center justify-center rounded-full bg-white border border-blue-200 shrink-0 w-[80px] md:w-[120px] h-[80px] md:h-[120px] xl:hover:shadow-[0_0_15px_10px_rgba(255,255,255,0.3)] transition-shadow duration-300">
      <svg className="w-[60%] h-[60%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <g id="main-shapes">
          <polygon id="pause-bar--left" points="18,13 24.35,16.585 24.35,32.415 18,36" fill="black"></polygon>
          <polygon id="pause-bar--right" points="24.2,16.5 38,24.5 38,24.5 24.2,32.5" fill="black"></polygon>
        </g>
      </svg>
    </button>
    <div className="flex flex-col gap-y-4"></div>
  </div>
  <div className="xl:opacity-0 xl:peer-hover:opacity-100 transition-opacity duration-300 text-white-400 text-center text-base">Voice Your Conversational AI</div>
  </div>

  {/* Third Button */}
  <div className="group relative">
  <div className="flex flex-col items-center justify-center peer  pb-5">
    <audio preload="none" src="https://playtht-website-assets.s3.amazonaws.com/voice-samples/pages/home/Play.ht+-+conversational.wav"></audio>
    <button className="flex flex-row items-center justify-center rounded-full bg-white border border-blue-200 shrink-0 w-[80px] md:w-[120px] h-[80px] md:h-[120px] xl:hover:shadow-[0_0_15px_10px_rgba(255,255,255,0.3)] transition-shadow duration-300">
      <svg className="w-[60%] h-[60%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <g id="main-shapes">
          <polygon id="pause-bar--left" points="18,13 24.35,16.585 24.35,32.415 18,36" fill="black"></polygon>
          <polygon id="pause-bar--right" points="24.2,16.5 38,24.5 38,24.5 24.2,32.5" fill="black"></polygon>
        </g>
      </svg>
    </button>
    <div className="flex flex-col gap-y-4"></div>
  </div>
  <div className="xl:opacity-0 xl:peer-hover:opacity-100 transition-opacity duration-300 text-white-400 text-center text-base">Voice Your Conversational AI</div>
  </div>

  {/* Fourth Button */}
  <div className="group relative">
  <div className="flex flex-col items-center justify-center peer  pb-5">
    <audio preload="none" src="https://playtht-website-assets.s3.amazonaws.com/voice-samples/pages/home/Play.ht+-+conversational.wav"></audio>
    <button className="flex flex-row items-center justify-center rounded-full bg-white border border-blue-200 shrink-0 w-[80px] md:w-[120px] h-[80px] md:h-[120px] xl:hover:shadow-[0_0_15px_10px_rgba(255,255,255,0.3)] transition-shadow duration-300">
      <svg className="w-[60%] h-[60%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <g id="main-shapes">
          <polygon id="pause-bar--left" points="18,13 24.35,16.585 24.35,32.415 18,36" fill="black"></polygon>
          <polygon id="pause-bar--right" points="24.2,16.5 38,24.5 38,24.5 24.2,32.5" fill="black"></polygon>
        </g>
      </svg>
    </button>
    <div className="flex flex-col gap-y-4"></div>
  </div>
  <div className="xl:opacity-0 xl:peer-hover:opacity-100 transition-opacity duration-300 text-white-400 text-center text-base">Voice Your Conversational AI</div>
  </div>
  <div className="group relative">
  <div className="flex flex-col items-center justify-center peer pb-5">
    <audio preload="none" src="https://playtht-website-assets.s3.amazonaws.com/voice-samples/pages/home/Play.ht+-+conversational.wav"></audio>
    <button className="flex flex-row items-center justify-center rounded-full bg-white border border-blue-200 shrink-0 w-[80px] md:w-[120px] h-[80px] md:h-[120px] xl:hover:shadow-[0_0_15px_10px_rgba(255,255,255,0.3)] transition-shadow duration-300">
      <svg className="w-[60%] h-[60%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <g id="main-shapes">
          <polygon id="pause-bar--left" points="18,13 24.35,16.585 24.35,32.415 18,36" fill="black"></polygon>
          <polygon id="pause-bar--right" points="24.2,16.5 38,24.5 38,24.5 24.2,32.5" fill="black"></polygon>
        </g>
      </svg>
    </button>
    <div className="flex flex-col gap-y-4"></div>
  </div>
  <div className="xl:opacity-0 xl:peer-hover:opacity-100 transition-opacity duration-300 text-white-400 text-center text-base">Voice Your Conversational AI</div>
  </div>
  <div className="group relative">
  <div className="flex flex-col items-center justify-center peer pb-5">
    <audio preload="none" src="https://playtht-website-assets.s3.amazonaws.com/voice-samples/pages/home/Play.ht+-+conversational.wav"></audio>
    <button className="flex flex-row items-center justify-center rounded-full bg-white border border-blue-200 shrink-0 w-[80px] md:w-[120px] h-[80px] md:h-[120px] xl:hover:shadow-[0_0_15px_10px_rgba(255,255,255,0.3)] transition-shadow duration-300">
      <svg className="w-[60%] h-[60%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
        <g id="main-shapes">
          <polygon id="pause-bar--left" points="18,13 24.35,16.585 24.35,32.415 18,36" fill="black"></polygon>
          <polygon id="pause-bar--right" points="24.2,16.5 38,24.5 38,24.5 24.2,32.5" fill="black"></polygon>
        </g>
      </svg>
    </button>
    <div className="flex flex-col gap-y-4"></div>
  </div>
  <div className="xl:opacity-0 xl:peer-hover:opacity-100 transition-opacity duration-300 text-white-400 text-center text-base">Voice Your Conversational AI</div>
  </div>
</div>
      </section>

      <section className='description-section'>
      <h1 className='text-4xl font-bold text-center pt-4'>Services</h1>
      <div className="grid grid-cols-3 gap-6 pt-20 pl-6 pr-6">
      {/* Grid Item 1 */}
      
      <div className="grid-item">
        <img className='w-12' src={devices} alt="Image 1" />
        <h3 className='text-2xl font-bold'>907 AI Voices</h3>
        <p>Choose from a growing library of 907 natural-sounding Text to Speech voices across 142 languages and accents.</p>
      </div>
      

      {/* Grid Item 2 */}
      <div className="grid-item">
        <img className='w-12' src={mic} alt="Image 2" />
        <h3 className='text-2xl font-bold'>Speech Styles</h3>
        <p>Choose from a growing library of 907 natural-sounding Text to Speech voices across 142 languages and accents.</p>
      </div>

      {/* Grid Item 3 */}
      <div className="grid-item">
        <img className='w-12' src={pepl} alt="Image 3" />
        <h3 className='text-2xl font-bold'>Voice Inflections</h3>
        <p>Choose from a growing library of 907 natural-sounding Text to Speech voices across 142 languages and accents.</p>
      </div>

      {/* Grid Item 4 */}
      <div className="grid-item">
        <img className='w-12' src={vol} alt="Image 4" />
        <h3 className='text-2xl font-bold'>Custom Pronunciations</h3>
        <p>Choose from a growing library of 907 natural-sounding Text to Speech voices across 142 languages and accents.</p>
      </div>

      {/* Grid Item 5 */}
      <div className="grid-item">
        <img className='w-12' src={play} alt="Image 5" />
        <h3 className='text-2xl font-bold'>Preview Mode</h3>
        <p>Choose from a growing library of 907 natural-sounding Text to Speech voices across 142 languages and accents.</p>
      </div>

      {/* Grid Item 6 */}
      <div className="grid-item">
        <img className='w-12' src={voice} alt="Image 6" />
        <h3 className='text-2xl font-bold'>Multi-Voice Feature</h3>
        <p>Choose from a growing library of 907 natural-sounding Text to Speech voices across 142 languages and accents.</p>
      </div>
    </div>

      </section>

      <section className='voice-cloning-chracters'>
        <div className="grid grid-cols-2 gap-6 pt-20 pl-6 pr-6 mb-6">
            <div>
              <h1 className='text-3xl font-bold text-center font-serif'>AI Voice Cloning with <br></br>Unparalleled Quality</h1>
              <p className='font-bold'>
              Clone high-quality voices that are 99% accurate to their real human voices.
              </p>

              <p className='font-bold'>
              No need for expensive equipment or complicated software. Perfect for content creators, podcasters, and businesses looking to add a personal touch to their audio projects.
              </p>
            </div>
            <div className='glass-container-parent'>
            <div className="glass-container grid grid-cols-3">
              
              {/* <div className="relative bg-white-100 undefined flex">
              <img className='play-icon' src={vol} alt="img" />
              <div className='mt-1 flex'>
                <div className=''>
                <span className="char-name font-medium text-[.8rem] ml-2">Elon</span>
              <img className="audio-bar w-6 h-6 ml-2" src={audioBar} alt="Audio Bars" ></img>
                </div>
              
              <img className="elon ml-10" alt="elon" loading="lazy" width="40" height="40" decoding="async" data-nimg="1"></img>
              </div>
              </div> */}
              <div class="character-div relative bg-white-200 undefined flex justify-between items-center text-blue-100 cursor-pointer
      p-[.3rem] rounded-[50px] dropShadow w-[160px] md:w-[140px]  md:m-[1.25rem]"><div class="flex items-center"><audio preload="none" src="./" id="miaeikhc_voice_preview"></audio><span class="inline-block w-[32px] cursor-pointer"><img alt="Play Icon" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="" src="https://playtht-website-assets.s3.amazonaws.com/img/icons/play-btn.svg"/></span><div class="-mt-1"><span class="font-medium text-[.8rem] ml-[.4rem]">Mia</span><div class="ml-[.3rem]"><img alt="Audio Bars" loading="lazy" width="40" height="10" decoding="async" data-nimg="1" src="./"/></div></div></div><div><div class=""><img alt="uk" loading="lazy" width="30" height="30" decoding="async" data-nimg="1"  src="./"/></div></div>
</div>

<div class="character-div relative bg-white-200 undefined flex justify-between items-center text-blue-100 cursor-pointer
      p-[.3rem] rounded-[50px] dropShadow w-[160px] md:w-[140px]  md:m-[1.25rem]"><div class="flex items-center"><audio preload="none" src="./" id="miaeikhc_voice_preview"></audio><span class="inline-block w-[32px] cursor-pointer"><img alt="Play Icon" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="" src="https://playtht-website-assets.s3.amazonaws.com/img/icons/play-btn.svg"/></span><div class="-mt-1"><span class="font-medium text-[.8rem] ml-[.4rem]">Mia</span><div class="ml-[.3rem]"><img alt="Audio Bars" loading="lazy" width="40" height="10" decoding="async" data-nimg="1" src="./"/></div></div></div><div><div class=""><img alt="uk" loading="lazy" width="30" height="30" decoding="async" data-nimg="1"  src="./"/></div></div>
</div>
<div class="character-div relative bg-white-200 undefined flex justify-between items-center text-blue-100 cursor-pointer
      p-[.3rem] rounded-[50px] dropShadow w-[160px] md:w-[140px]  md:m-[1.25rem]"><div class="flex items-center"><audio preload="none" src="./" id="miaeikhc_voice_preview"></audio><span class="inline-block w-[32px] cursor-pointer"><img alt="Play Icon" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="" src="https://playtht-website-assets.s3.amazonaws.com/img/icons/play-btn.svg"/></span><div class="-mt-1"><span class="font-medium text-[.8rem] ml-[.4rem]">Mia</span><div class="ml-[.3rem]"><img alt="Audio Bars" loading="lazy" width="40" height="10" decoding="async" data-nimg="1" src="./"/></div></div></div><div><div class=""><img alt="uk" loading="lazy" width="30" height="30" decoding="async" data-nimg="1"  src="./"/></div></div>
</div>
<div class="character-div relative bg-white-200 undefined flex justify-between items-center text-blue-100 cursor-pointer
      p-[.3rem] rounded-[50px] dropShadow w-[160px] md:w-[140px]  md:m-[1.25rem]"><div class="flex items-center"><audio preload="none" src="./" id="miaeikhc_voice_preview"></audio><span class="inline-block w-[32px] cursor-pointer"><img alt="Play Icon" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="" src="https://playtht-website-assets.s3.amazonaws.com/img/icons/play-btn.svg"/></span><div class="-mt-1"><span class="font-medium text-[.8rem] ml-[.4rem]">Mia</span><div class="ml-[.3rem]"><img alt="Audio Bars" loading="lazy" width="40" height="10" decoding="async" data-nimg="1" src="./"/></div></div></div><div><div class=""><img alt="uk" loading="lazy" width="30" height="30" decoding="async" data-nimg="1"  src="./"/></div></div>
</div>
<div class="character-div relative bg-white-200 undefined flex justify-between items-center text-blue-100 cursor-pointer
      p-[.3rem] rounded-[50px] dropShadow w-[160px] md:w-[140px]  md:m-[1.25rem]"><div class="flex items-center"><audio preload="none" src="./" id="miaeikhc_voice_preview"></audio><span class="inline-block w-[32px] cursor-pointer"><img alt="Play Icon" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="" src="https://playtht-website-assets.s3.amazonaws.com/img/icons/play-btn.svg"/></span><div class="-mt-1"><span class="font-medium text-[.8rem] ml-[.4rem]">Mia</span><div class="ml-[.3rem]"><img alt="Audio Bars" loading="lazy" width="40" height="10" decoding="async" data-nimg="1" src="./"/></div></div></div><div><div class=""><img alt="uk" loading="lazy" width="30" height="30" decoding="async" data-nimg="1"  src="./"/></div></div>
</div>
<div class="character-div relative bg-white-200 undefined flex justify-between items-center text-blue-100 cursor-pointer
      p-[.3rem] rounded-[50px] dropShadow w-[160px] md:w-[140px]  md:m-[1.25rem]"><div class="flex items-center"><audio preload="none" src="./" id="miaeikhc_voice_preview"></audio><span class="inline-block w-[32px] cursor-pointer"><img alt="Play Icon" loading="lazy" width="100" height="100" decoding="async" data-nimg="1" class="" src="https://playtht-website-assets.s3.amazonaws.com/img/icons/play-btn.svg"/></span><div class="-mt-1"><span class="font-medium text-[.8rem] ml-[.4rem]">Mia</span><div class="ml-[.3rem]"><img alt="Audio Bars" loading="lazy" width="40" height="10" decoding="async" data-nimg="1" src="./"/></div></div></div><div><div class=""><img alt="uk" loading="lazy" width="30" height="30" decoding="async" data-nimg="1"  src="./"/></div></div>
</div>
          </div>
      </div>
            </div>
            
      </section>

      <section className='reviews p-5'>
      <h1 className='text-4xl font-bold text-center pt-4'>Famous Characters</h1>
      <div className='card-container'>
        <Tilt className="custom-tilt" options={{ max: 25, scale: 1.1 }}>
          <div className="card"> 
            <img src={elon} className='w-16' alt="" />
            <h2>Elon Musk</h2>
            
            <div className="flex flex-col items-center justify-center peer pb-2">
            <audio preload="none" src="https://playtht-website-assets.s3.amazonaws.com/voice-samples/pages/home/Play.ht+-+conversational.wav"></audio>
            
            <button className="flex flex-row items-center justify-center rounded-full bg-white border border-blue-200 shrink-0 w-[40px] md:w-[60px] h-[40px] md:h-[60px] xl:hover:shadow-[0_0_15px_10px_rgba(255,255,255,0.3)] transition-shadow duration-300">
              <svg className="w-[60%] h-[60%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <g id="main-shapes">
                  <polygon id="pause-bar--left" points="18,13 24.35,16.585 24.35,32.415 18,36" fill="black"></polygon>
                  <polygon id="pause-bar--right" points="24.2,16.5 38,24.5 38,24.5 24.2,32.5" fill="black"></polygon>
                </g>
              </svg>
            </button>
          </div>
            <a href="#" className='btn-home'>Generate</a>
          </div>
        </Tilt>
        <Tilt className="custom-tilt" options={{ max: 25, scale: 1.1 }}>
          <div className="card"> 
            <img src={elon} className='w-16' alt="" />
            <h2>Elon Musk</h2>
            
            <div className="flex flex-col items-center justify-center peer pb-2">
            <audio preload="none" src="https://playtht-website-assets.s3.amazonaws.com/voice-samples/pages/home/Play.ht+-+conversational.wav"></audio>
            
            <button className="flex flex-row items-center justify-center rounded-full bg-white border border-blue-200 shrink-0 w-[40px] md:w-[60px] h-[40px] md:h-[60px] xl:hover:shadow-[0_0_15px_10px_rgba(255,255,255,0.3)] transition-shadow duration-300">
              <svg className="w-[60%] h-[60%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <g id="main-shapes">
                  <polygon id="pause-bar--left" points="18,13 24.35,16.585 24.35,32.415 18,36" fill="black"></polygon>
                  <polygon id="pause-bar--right" points="24.2,16.5 38,24.5 38,24.5 24.2,32.5" fill="black"></polygon>
                </g>
              </svg>
            </button>
          </div>
            <a href="#" className='btn-home'>Generate</a>
          </div>
        </Tilt>
        <Tilt className="custom-tilt" options={{ max: 25, scale: 1.1 }}>
          <div className="card"> 
            <img src={elon} className='w-16' alt="" />
            <h2>Elon Musk</h2>
            
            <div className="flex flex-col items-center justify-center peer pb-2">
            <audio preload="none" src="https://playtht-website-assets.s3.amazonaws.com/voice-samples/pages/home/Play.ht+-+conversational.wav"></audio>
            
            <button className="flex flex-row items-center justify-center rounded-full bg-white border border-blue-200 shrink-0 w-[40px] md:w-[60px] h-[40px] md:h-[60px] xl:hover:shadow-[0_0_15px_10px_rgba(255,255,255,0.3)] transition-shadow duration-300">
              <svg className="w-[60%] h-[60%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <g id="main-shapes">
                  <polygon id="pause-bar--left" points="18,13 24.35,16.585 24.35,32.415 18,36" fill="black"></polygon>
                  <polygon id="pause-bar--right" points="24.2,16.5 38,24.5 38,24.5 24.2,32.5" fill="black"></polygon>
                </g>
              </svg>
            </button>
          </div>
            <a href="#" className='btn-home'>Generate</a>
          </div>
        </Tilt>
        <Tilt className="custom-tilt" options={{ max: 25, scale: 1.1 }}>
          <div className="card"> 
            <img src={elon} className='w-16' alt="" />
            <h2>Elon Musk</h2>
            
            <div className="flex flex-col items-center justify-center peer pb-2">
            <audio preload="none" src="https://playtht-website-assets.s3.amazonaws.com/voice-samples/pages/home/Play.ht+-+conversational.wav"></audio>
            
            <button className="flex flex-row items-center justify-center rounded-full bg-white border border-blue-200 shrink-0 w-[40px] md:w-[60px] h-[40px] md:h-[60px] xl:hover:shadow-[0_0_15px_10px_rgba(255,255,255,0.3)] transition-shadow duration-300">
              <svg className="w-[60%] h-[60%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <g id="main-shapes">
                  <polygon id="pause-bar--left" points="18,13 24.35,16.585 24.35,32.415 18,36" fill="black"></polygon>
                  <polygon id="pause-bar--right" points="24.2,16.5 38,24.5 38,24.5 24.2,32.5" fill="black"></polygon>
                </g>
              </svg>
            </button>
          </div>
            <a href="#" className='btn-home'>Generate</a>
          </div>
        </Tilt>
        <Tilt className="custom-tilt" options={{ max: 25, scale: 1.1 }}>
          <div className="card"> 
            <img src={elon} className='w-16' alt="" />
            <h2>Elon Musk</h2>
            
            <div className="flex flex-col items-center justify-center peer pb-2">
            <audio preload="none" src="https://playtht-website-assets.s3.amazonaws.com/voice-samples/pages/home/Play.ht+-+conversational.wav"></audio>
            
            <button className="flex flex-row items-center justify-center rounded-full bg-white border border-blue-200 shrink-0 w-[40px] md:w-[60px] h-[40px] md:h-[60px] xl:hover:shadow-[0_0_15px_10px_rgba(255,255,255,0.3)] transition-shadow duration-300">
              <svg className="w-[60%] h-[60%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <g id="main-shapes">
                  <polygon id="pause-bar--left" points="18,13 24.35,16.585 24.35,32.415 18,36" fill="black"></polygon>
                  <polygon id="pause-bar--right" points="24.2,16.5 38,24.5 38,24.5 24.2,32.5" fill="black"></polygon>
                </g>
              </svg>
            </button>
          </div>
            <a href="#" className='btn-home'>Generate</a>
          </div>
        </Tilt>
        <Tilt className="custom-tilt" options={{ max: 25, scale: 1.1 }}>
          <div className="card"> 
            <img src={elon} className='w-16' alt="" />
            <h2>Elon Musk</h2>
            
            <div className="flex flex-col items-center justify-center peer pb-2">
            <audio preload="none" src="https://playtht-website-assets.s3.amazonaws.com/voice-samples/pages/home/Play.ht+-+conversational.wav"></audio>
            
            <button className="flex flex-row items-center justify-center rounded-full bg-white border border-blue-200 shrink-0 w-[40px] md:w-[60px] h-[40px] md:h-[60px] xl:hover:shadow-[0_0_15px_10px_rgba(255,255,255,0.3)] transition-shadow duration-300">
              <svg className="w-[60%] h-[60%]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
                <g id="main-shapes">
                  <polygon id="pause-bar--left" points="18,13 24.35,16.585 24.35,32.415 18,36" fill="black"></polygon>
                  <polygon id="pause-bar--right" points="24.2,16.5 38,24.5 38,24.5 24.2,32.5" fill="black"></polygon>
                </g>
              </svg>
            </button>
          </div>
            <a href="#" className='btn-home'>Generate</a>
          </div>
        </Tilt>
      </div>
    </section>
     
    </div>
    
  );
};

export default Homepage;
