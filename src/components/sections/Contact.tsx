import React from 'react';

export function Contact() {
  return (
    <section id="contact" className="relative z-10 overflow-hidden">
      <div className="">
        <div className="flex flex-wrap">
          <div className="w-full px-4 text-white bg-sky-700 lg:w-1/2">
            <div className="max-w-[570px] h-full mb-12 lg:mb-0 mx-auto lg:mr-0 lg:ml-auto flex flex-col justify-center">
              <h2 className="text-dark mb-6 uppercase font-semibold text-[32px] sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                GET IN TOUCH WITH US
              </h2>
              <p className="text-base leading-relaxed text-body-color mb-9">
                Let us know what your projects are, and we'll provide a free
                estimate. Then, you can let us know if you'de like us to come
                out.
              </p>
            </div>
          </div>
          <div className="w-full px-4 bg-slate-300 lg:w-1/2">
            <div className="max-w-[570px] h-full p-8 sm:p-12 mx-auto lg:ml-0 lg:mr-auto flex flex-col justify-center">
              <form>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary "
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary "
                  />
                </div>
                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Your Phone"
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary "
                  />
                </div>
                <div className="mb-6">
                  <textarea
                    rows={6}
                    placeholder="Your Message"
                    className="w-full rounded py-3 px-[14px] text-body-color text-base border border-[f0f0f0] resize-none outline-none focus-visible:shadow-none focus:border-primary "
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full px-4 py-2 mt-4 text-sm text-white transition duration-150 ease-in-out border rounded border-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 bg-sky-700 hover:bg-sky-800 lg:text-xl lg:font-bold sm:px-10 sm:py-4"
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
