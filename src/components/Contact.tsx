import { Link } from "react-router-dom"

const Contact = () => {
 


  return (
    <div className="w-full md:w-96 md:max-w-full mx-auto py-5  shadow-xl">
    <div className=" bg-blue-sheff p-6 border border-gray-300 sm:rounded-md ">
      <form name="contact" method="POST" action="/success">
      <input type="hidden" name="form-name" value="contact"/>

        <label className="block mb-6">
          <span className=" px-2 text-zinc-900">Your name</span>
          <input
            type="text"
            name="name"
            className="text-black px-2
              block
              w-full
              mt-1
              border-gray-300

              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
            placeholder="Sara Mthembu"
            required
          />
        </label>
        <label className="block mb-6">
          <span className="px-2 text-zinc-900">Email address</span>
          <input
            name="email"
            type="email"
            className=" text-black px-2
              block
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
            placeholder="sara.mthembu@example.com"
            required
          />
        </label>
        <label className="block mb-6">
          <span className="px-2 text-zinc-900">Message</span>
          <textarea
            name="message"
            className="
            text-black px-2
              block
              w-full
              mt-1
              border-gray-300
              rounded-md
              shadow-sm
              focus:border-indigo-300
              focus:ring
              focus:ring-indigo-200
              focus:ring-opacity-50
            "
            rows={3}
            placeholder="Tell us what you need, we will get back to you in no time......"
            required
          ></textarea>
        </label>
        <div className=" px-2 py-2 mb-6">
          <button
            type="submit"
            className="
              h-10
              px-5
              text-indigo-100
              bg-indigo-700
              rounded-lg
              transition-colors
              duration-150
              focus:shadow-outline
              hover:bg-indigo-800
            "
          >
            Send
          </button>
        </div>
      </form>
    </div>
    <div className="flex justify-center"> 
      <Link to="/apply">
       <button className="bg-slate-600 px-5
       rounded-lg align-center" type="button">Apply Now</button>

    </Link></div>
   
  </div>
  
  )
}

export default Contact