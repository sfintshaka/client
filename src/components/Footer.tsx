
import { Link } from 'react-router-dom';


const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300 px-4 py-6 grid grid-cols-2 gap-4 justify-items-start">
  <div className="bg-gray-800">
    <Link className='bg-gray-800' to ="/">
      <img src="../logo1.svg" alt="AL-SYED logo" className="bg-slate-300 h-10" />
    </Link>
    <h1 className="bg-gray-800">AL-SYED</h1>
    <h2 className="bg-gray-800">Student Accomodation</h2>
  </div>

  <div className='bg-gray-800 grid grid-rows-2 gap-10'>
    <div className='bg-gray-800'>
      <p className="bg-gray-800 font-bold">Address:</p>
      <p className="bg-gray-800">705 Stanza Bopape street</p>
      <p className="bg-gray-800">Arcadia, Pretoria 0083</p>
    </div>

    <div className="bg-gray-800">
      <p className=" bg-gray-800 font-bold mt-2">Contact:</p>
      <p className="bg-gray-800">Phone: 012-343-1967</p>
      <p className="bg-gray-800">Email: info@alsyed.co.za</p>
    </div>

    <div className='bg-gray-800 col-span-2 text-sm text-gray-400'>
      <p className="bg-gray-800">© {currentYear} All rights reserved @ Al-SYED</p>
      <p className="bg-gray-800">Designed by Induku designers</p>
      <div className="bg-gray-800 flex items-center">
   
    <div className=" bg-gray-800 flex items-center ml-6">
      <div className="mr-4">
        <a href="https://www.instagram.com/your_student_accommodation" target="_blank" rel="noopener noreferrer">
          <img src="../instagram.svg" alt="Instagram" className="bg-gray-800  h-6" />
        </a>
      </div>
      <div>
        <a href="https://www.facebook.com/your_student_accommodation" target="_blank" rel="noopener noreferrer">
          <img src="../facebook.svg" alt="Facebook" className="bg-gray-800  h-6" />
        </a>
      </div>
    </div>
  </div>

    </div>
  </div>
</footer>

  );
  
}

export default Footer