import React from 'react'

function Fotter() {
  return (
    <>
      <footer className='bg-slate-900 h-[500px] text-white'>
        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-4 pt-10">
          <div className='ml-[150px]'>
          <img src="images/SWIG.png" className="w-full "alt="logo" />

            <h2 className="mb-6 text-sm uppercase mt-4 ml-5">@2024Decoder PVT LTD</h2>

          </div>



          <div className='ml-[80px]'>
            <h2 className="mb-6 text-sm font-semibold uppercase">Company</h2>
            <h2 className="mb-6 text-sm ">About</h2>
            <h2 className="mb-6 text-sm ">
              Careers

            </h2>

            <h2 className="mb-6 text-sm ">Team</h2>
            <h2 className="mb-6 text-sm ">Swiggy One</h2>
            <h2 className="mb-6 text-sm ">Swiggy Instamart</h2>
            <h2 className="mb-6 text-sm ">Swiggy Genie</h2>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">Contact us</h2>
            <h2 className="mb-6 text-sm ">Help & Support
            </h2>
            <h2 className="mb-6 text-sm ">Partner with us
            </h2>
            <h2 className="mb-6 text-sm ">Ride with us</h2>
            <h2 className="mb-6 text-sm font-semibold uppercase pt-8">Legal</h2>

            <h2 className="mb-6 text-sm ">Terms & Conditions

              Privacy Policy</h2>
            <h2 className="mb-6 text-sm ">Cookie Policy</h2>
            <h2 className="mb-6 text-sm ">Privacy Policy</h2>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold uppercase">We Deliver to :</h2>
            <h2 className="mb-6 text-sm ">Bangalore
</h2>
            <h2 className="mb-6 text-sm ">Gurgaon
</h2>
            <h2 className="mb-6 text-sm ">Delhi
</h2>
            <h2 className="mb-6 text-sm ">Mumbai
</h2>
            <h2 className="mb-6 text-sm ">Pune</h2>
            <h2 className="mb-6 text-sm ">Hyderabad
</h2>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Fotter