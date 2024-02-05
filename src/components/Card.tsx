{/* <bg-cyan-800></bg-cyan-800> */}
const Card = () => {
  return (
    <div className=" flex flex-wrap justify-center gap-4 pb-10">
    <div className="bg-blue-sheff text-slate-800 rounded-lg shadow-md p-6">
      <h2 className="bg-blue-sheff text-slate-800 text-neutral-400 font-bold mb-4">Rooms available</h2>
      <table className="bg-blue-sheff text-slate-800 w-full text-neutral-300">
        <tbody>
          <tr>
            <td className="bg-blue-sheff text-slate-800 px-4 py-2 font-bold">Sharing</td>
            <td className="bg-blue-sheff text-slate-800  px-4 py-2 font-bold">from</td>
            <td className="bg-blue-sheff text-slate-800 px-4 py-2">R 5000</td>
          </tr>
          <tr>
            <td className=" bg-blue-sheff text-slate-800 px-4 py-2 font-bold">Sharing Ensuite</td>
            <td className="bg-blue-sheff text-slate-800  px-4 py-2 font-bold">from</td>
            <td className="bg-blue-sheff text-slate-800 px-4 py-2">R 5500</td>
          </tr>
        
          <tr>
            <td className="bg-blue-sheff text-slate-800  px-4 py-2 font-bold">Single Room</td>
            <td className="bg-blue-sheff text-slate-800  px-4 py-2 font-bold">from</td>
            <td className="bg-blue-sheff text-slate-800  px-4 py-2"> R 5500</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="bg-blue-sheff text-slate-800 rounded-lg shadow-md p-6">
      <h2 className="text-neutral-400 font-bold mb-4 sticky top-0 bg-blue-sheff text-slate-800">Benefits</h2>
      <ul className="bg-blue-sheff text-slate-800 list-disc list-inside text-neutral-300">
        <li className="bg-blue-sheff text-slate-800">Lounge with DSTV</li>
        <li className="bg-blue-sheff text-slate-800">Free uncapped WIFI</li>
        <li className="bg-blue-sheff text-slate-800">Transport</li>
        <li className="bg-blue-sheff text-slate-800">Showers</li>
        <li className="bg-blue-sheff text-slate-800">Kitchen</li>
        <li className="bg-blue-sheff text-slate-800">Dining area</li>
        <li className="bg-blue-sheff text-slate-800">Laundry</li>
      </ul>
    </div>
  </div>
);
  
}

export default Card