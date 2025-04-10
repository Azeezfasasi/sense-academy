import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import quote from '../../image/quote.svg';
import profileimage from '../../image/profileimage.svg';

function Testimonia() {
  return (
    <>
    <div className='w-full bg-grey-background h-auto relative overflow-hidden py-10 px-4 border mx-auto'>
      <div className="w-[90%] h-auto relative overflow-hidden mx-auto">
        <div className="text-black text-left font-heading-3-font-family text-heading-3-font-size leading-heading-3-line-height font-heading-3-font-weight mb-6">
          What Our Customers Say About Us
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="bg-white rounded-2xl border border-grey-border p-6 flex flex-col gap-4">
              <img className="w-12 h-12" src={quote} alt="Quote" />
              <p className="text-black">
                "Sense Academy's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."
              </p>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-[60px] h-[60px] object-cover"
                  src={profileimage}
                  alt=""
                />
                <div>
                  <p className="text-black font-bold">Jane Doe</p>
                  <p className="text-grey-700">Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="bg-white rounded-2xl border border-grey-border p-6 flex flex-col gap-4">
              <img className="w-12 h-12" src={quote} alt="Quote" />
              <p className="text-black">
                "Sense Academy's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."
              </p>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-[60px] h-[60px] object-cover"
                  src={profileimage}
                  alt=""
                />
                <div>
                  <p className="text-black font-bold">Jane Doe</p>
                  <p className="text-grey-700">Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="bg-white rounded-2xl border border-grey-border p-6 flex flex-col gap-4">
              <img className="w-12 h-12" src={quote} alt="Quote" />
              <p className="text-black">
                "Sense Academy's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."
              </p>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-[60px] h-[60px] object-cover"
                  src={profileimage}
                  alt=""
                />
                <div>
                  <p className="text-black font-bold">Jane Doe</p>
                  <p className="text-grey-700">Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="bg-white rounded-2xl border border-grey-border p-6 flex flex-col gap-4">
              <img className="w-12 h-12" src={quote} alt="Quote" />
              <p className="text-black">
                "Sense Academy's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."
              </p>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-[60px] h-[60px] object-cover"
                  src={profileimage}
                  alt="Jane Doe"
                />
                <div>
                  <p className="text-black font-bold">Jane Doe</p>
                  <p className="text-grey-700">Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 5 */}
          <SwiperSlide>
            <div className="bg-white rounded-2xl border border-grey-border p-6 flex flex-col gap-4">
              <img className="w-12 h-12" src={quote} alt="Quote" />
              <p className="text-black">
                "Sense Academy's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."
              </p>
              <div className="flex items-center gap-4">
                <img
                  className="rounded-full w-[60px] h-[60px] object-cover"
                  src={profileimage}
                  alt="Jane Doe"
                />
                <div>
                  <p className="text-black font-bold">Jane Doe</p>
                  <p className="text-grey-700">Designer</p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          {/* Add more SwiperSlide components as needed */}
        </Swiper>
      </div>
    </div>
  </>
  );
}

export default Testimonia;
