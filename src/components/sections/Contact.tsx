import React from 'react';

export function Contact() {
  return (
    <section id="contact" className="overflow-hidden relative z-10">
      <div className="">
        <div className="flex flex-wrap">
          <div className="bg-sky-700 w-full lg:w-1/2 px-4 text-white">
            <div className="max-w-[570px] h-full mb-12 lg:mb-0 mx-auto lg:mr-0 lg:ml-auto flex flex-col justify-center">
              <h2
                className="
                  text-dark
                  mb-6
                  uppercase
                  font-semibold
                  text-[32px]
                  sm:text-[40px]
                  lg:text-[36px]
                  xl:text-[40px]
                  "
              >
                GET IN TOUCH WITH US
              </h2>
              <p className="text-base text-body-color leading-relaxed mb-9">
                Let us know what your projects are, and we'll provide a free
                estimate. Then, you can let us know if you'de like us to come
                out.
              </p>
            </div>
          </div>
          <div className="bg-slate-300 w-full lg:w-1/2 px-4">
            <div className="max-w-[570px] h-full p-8 sm:p-12 mx-auto lg:ml-0 lg:mr-auto flex flex-col justify-center">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="
                        w-full
                        mt-4
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-blue-700
                        bg-sky-700
                        transition
                        duration-150
                        ease-in-out
                        hover:bg-sky-800
                        lg:text-xl
                        lg:font-bold
                        rounded
                        text-white 
                        px-4 
                        sm:px-10 
                        border 
                        border-blue-700 
                        py-2 
                        sm:py-4 
                        text-sm
                        "
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
