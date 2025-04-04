'use client'
import { Meteors } from "@/component/ui/meteors"

const page = () => {
  return (
    <div className="min-h-screen bg-black py-12 pt-36 flex items-center justify-center ">
      <div className="relative w-full max-w-xl">
        <div className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />

        <div className="relative flex h-full  flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
          <h1 className="text-center text-6xl font-bold w-full text-slate-500">Contact Us</h1>
          <p className="relative z-50 mb-4 text-base font-normal text-slate-500">We're here help with any question about our courses, program, or event. Reach out and let us know how we can assist you in your musical journey</p>
          <form className="space-y-4 w-full">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your message here..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
          >
            Send Message
          </button>
        </form>

          {/* Meaty part - Meteor effect */}
          <Meteors number={70} />
        </div>
      </div>
    </div>
  )
}

export default page