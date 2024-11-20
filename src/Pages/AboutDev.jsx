import profile from '../../src/assets/PXL_20241108_093959109~2 (1).jpg'


const AboutDev = () => {
    const handleFacebook = () => {
        window.open('https://www.facebook.com/mdabusalehnoor9', "_blank")
      }
      const handleTwitter = () => {
        window.open('https://x.com/MdAbuSalehNoor1', "_blank")
      }
  return (
    <div>
    
  <div className="min-h-screen bg-gray-900 text-white relative pb-10">
      <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 via-gray-900 to-black opacity-90"></div>

      <div className="relative z-10 flex flex-col items-center justify-center py-16 md:py-28 px-6 text-center">
        <img className='w-96 rounded-full h-96 object-cover mb-4' src={profile} alt="" />
        <h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
          Abu Saleh Noor
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-300">
          Front-End Developer | Govt Edward College, Pabna
        </p>
        <p className="mt-2 text-sm md:text-lg text-gray-400">
          Language Proficiency: Bangla, English, Hindi
        </p>

        {/* Skills Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-300">Skills</h2>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
            {["HTML", "CSS", "Tailwind CSS", "Daisy UI", "JavaScript", "React"].map((skill, index) => (
              <div
                key={index}
                className="py-2 px-4 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 shadow-md text-white text-center font-semibold hover:scale-105 transition-transform"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Section */}
      <div className="relative z-10 bg-gray-800 bg-opacity-90 rounded-xl max-w-6xl mx-auto p-8 shadow-2xl mt-12">
        <h2 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-yellow-500">
          Projects
        </h2>
        <ul className="mt-4 space-y-3 text-gray-300">
          <li className="p-4 rounded-lg bg-gray-900 shadow-md hover:shadow-lg hover:bg-gray-800 transition">
            <strong>Gadget Heaven</strong>: A dynamic platform for electronics.
          </li>
          <li className="p-4 rounded-lg bg-gray-900 shadow-md hover:shadow-lg hover:bg-gray-800 transition">
            <strong>Travel Guru</strong>: A responsive travel website.
          </li>
          <li className="p-4 rounded-lg bg-gray-900 shadow-md hover:shadow-lg hover:bg-gray-800 transition">
            <strong>Donation Platform</strong>: A modern donation tracking tool.
          </li>
          <li className="p-4 rounded-lg bg-gray-900 shadow-md hover:shadow-lg hover:bg-gray-800 transition">
            <strong>More Projects</strong>: Many other custom designs and tools.
          </li>
        </ul>
      </div>

      {/* Call to Action */}
      <div className="relative z-10 text-center mt-12 mb-12">
        <button onClick={()=>document.getElementById('my_modal_1').showModal()} className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:to-yellow-500 text-white font-bold shadow-lg hover:scale-105 transform transition duration-300">
          Contact Me
        </button>
      </div>
    </div>






    {/* Modal */}
   
<dialog id="my_modal_1" className="modal">
<div class="fixed inset-0 z-50  flex items-center justify-center bg-black bg-opacity-50">

  <div class="relative bg-gray-800 py-6 px-4 rounded-2xl shadow-2xl w-11/12 md:w-2/3 lg:w-1/2">

    <div class="flex items-center justify-between p-4 border-b border-gray-700">
      <h2 class="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
        Md Abu Saleh Noor
      </h2>
     
    </div>


    <div class="p-6 text-gray-300">
      <h3 class="text-xl font-semibold">Here is My Contact Info: </h3>
      <p class="mt-2">
        <span className="text-lg font-semibold">Email:</span> abusalehnoor4103@gmail.com
      </p>
      <p class="mt-2">
        <span className="text-lg font-semibold">Email:</span> abusalehnoor6@gmail.com
      </p>
      <p class="mt-2">
        <span className="text-lg font-semibold">Phone: </span> 01522113282
      </p>
      <ul class="mt-2 space-y-2">
        <li className='text-xl font-semibold mb-4'>Social:</li>
      <div className="space-x-4">
            <button onClick={handleTwitter}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </button>
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </button>
            <button onClick={handleFacebook}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current">
                <path
                  d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </button>
            </div>
      </ul>
    </div>


    <div className="modal-action">
      <form method="dialog">

        <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:to-yellow-500 rounded-full text-white font-bold shadow-md hover:scale-105 transition-transform duration-300 ">Close</button>
      </form>
    </div>
  </div>
</div>
</dialog>
    {/* Modal */}
    
  </div>
  );
};

export default AboutDev;