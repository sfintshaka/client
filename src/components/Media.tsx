import Slider from "./Slider"

function Media() {
  return (
    <div>
    <div className="relative shadow-md overflow-hidden flex justify-start flex-col md:flex-row">
  <img src="./assets/sittingroom.webp" alt="sittingroom" className="w-full h-auto" />
  <div className="hidden sm:block absolute bottom-0 left-0 w-full bg-black bg-opacity-50 text-white p-4">
    <p className="text-xl text-slate-900 py-5 px-3 lg:text-xl md:text-sm md:rounded-md hover:bg-slate-300 sm:text-xs sm:rounded-md lg:rounded-md">Having a community environment for students at AL-SYED is of utmost importance. It plays a crucial role
     in enhancing the overall student experience, promoting personal growth, and fostering a sense of belonging and connection within the campus. 
    A strong and supportive community environment contributes to the academic success, well-being, and holistic development of students.</p>
  </div>
</div>
<div className=" m-1 py-1 px-1 inline md:hidden sm:hidden lg:hidden">
  <p >Having a community environment for students at AL-SYED is of utmost importance. It plays a crucial role
     in enhancing the overall student experience, promoting personal growth, and fostering a sense of belonging and connection within the campus. 
    A strong and supportive community environment contributes to the academic success, well-being, and holistic development of students.</p></div>


<div className="bg-blue-sheff shadow-md overflow-hidden flex justify-start flex-col md:flex-row py-5 px-2">
  <div className="w-full md:w-1/3">
    <img src="./assets/union.webp" alt="union" className=" rounded-s-lg w-full"/>
  </div>
  <div className="bg-blue-sheff p-6 max-w-sm  rounded-e-lg">
    <p className="bg-blue-sheff text-cyan-900 text-3xl py-16 px-10">Live by the Union Buildings, experience relaxing walks and joggings at the park.</p>
  </div>
  <div className="w-full md:w-1/3">
    <img src="./assets/union1.webp" alt="union" className=" rounded-r-lg w-full"/>
  </div>
</div>

<div className="flex flex-wrap justify-center">
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
    <div className="flex items-center mb-4">
      <div className="mr-3">
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
        </svg>
      </div>
      <h3 className="text-lg font-semibold">Convenient Location</h3>
    </div>
    <p className="text-gray-700">Our student accommodations are located in close proximity to educational institutions, making it convenient for students to commute and access campus facilities.</p>
  </div>
  
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
    <div className="flex items-center mb-4">
      <div className="mr-3">
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
      <h3 className="text-lg font-semibold">Safe and Secure</h3>
    </div>
    <p className="text-gray-700">We prioritize the safety and security of our students with measures such as 24/7 security personnel, surveillance systems, and secure access control.</p>
  </div>
  
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
    <div className="flex items-center mb-4">
      <div className="mr-3">
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
      <h3 className="text-lg font-semibold">Modern Amenities</h3>
    </div>
    <p className="text-gray-700">Our accommodations offer modern amenities, including well-equipped study rooms, uncapped WIFI, recreational facilities, and common areas for socializing.</p>
  </div>
  
  <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
    <div className="flex items-center mb-4">
      <div className="mr-3">
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      </div>
      <h3 className="text-lg font-semibold">Community Atmosphere</h3>
    </div>
    <p className="text-gray-700">Experience a vibrant community atmosphere where students can interact, collaborate, and engage in social and academic activities together.</p>
  </div>
</div>
<div>
<h1 className="text-lg font-semibold">Gallery</h1>
<Slider/>
</div>

</div>
  )
}

export default Media