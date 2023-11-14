import { Inter } from 'next/font/google'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='main-background'>
      {/* Header Start */}
      <section className='relative'>
        <div className='wrapper relative z-10'>
          <nav className="bg-transparent">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
              <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="/logo.png" className="lg:w-3/4" alt="Flowbite Logo" />
              </a>
              <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
              <div className='flex items-center gap-20 nav-ul-parent'>
                <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                  <ul className="flex gap-20">
                    <li>
                      <a href="#" className="block py-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">Open Sea</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">About</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">Roadmap</a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-3 rounded md:bg-transparent md:p-0" aria-current="page">FAQ</a>
                    </li>
                  </ul>
                </div>
                <div className='flex gap-5 items-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="15" viewBox="0 0 22 15" fill="none">
                    <path d="M18.636 1.22836C17.1933 0.646982 15.6669 0.233889 14.0973 0C13.9018 0.304407 13.6734 0.713835 13.5159 1.03956C11.8236 0.820411 10.1469 0.820411 8.48572 1.03956C8.32828 0.713909 8.0947 0.304407 7.89739 0C6.32628 0.233997 4.79862 0.648142 3.35516 1.23139C0.482791 4.96961 -0.295889 8.61487 0.093408 12.2085C1.99856 13.4338 3.84484 14.1781 5.66001 14.6652C6.11112 14.1309 6.5099 13.5653 6.85222 12.9741C6.20049 12.7604 5.5722 12.4971 4.97483 12.1872C5.13203 12.0869 5.28554 11.9823 5.43511 11.8736C9.05497 13.3318 12.9882 13.3318 16.5649 11.8736C16.7151 11.9816 16.8685 12.0861 17.0251 12.1872C16.4267 12.4979 15.7973 12.7618 15.1442 12.9757C15.4885 13.5692 15.8866 14.1354 16.3364 14.6667C18.1533 14.1797 20.0013 13.4353 21.9065 12.2085C22.3633 8.04262 21.1262 4.43074 18.636 1.22828V1.22836ZM7.34541 9.9985C6.25873 9.9985 5.36756 9.1248 5.36756 8.0609C5.36756 6.99699 6.23974 6.12181 7.34541 6.12181C8.45117 6.12181 9.34226 6.99544 9.32326 8.0609C9.32498 9.1248 8.45117 9.9985 7.34541 9.9985ZM14.6545 9.9985C13.5678 9.9985 12.6767 9.1248 12.6767 8.0609C12.6767 6.99699 13.5488 6.12181 14.6545 6.12181C15.7602 6.12181 16.6513 6.99544 16.6323 8.0609C16.6323 9.1248 15.7602 9.9985 14.6545 9.9985Z" fill="white" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                    <path d="M5.6367 15.9938C7.2786 16.0433 8.91487 15.7959 10.4488 15.2662C11.9827 14.7366 13.3831 13.9355 14.5673 12.9102C15.7515 11.8849 16.6955 10.6563 17.3434 9.29698C17.9913 7.93763 18.3299 6.47513 18.3394 4.99591C19.0919 4.15749 19.6506 3.19209 19.9828 2.15646C20.0076 2.07463 20.0056 1.9881 19.977 1.90728C19.9485 1.82646 19.8946 1.75479 19.8218 1.70091C19.7491 1.64703 19.6606 1.61323 19.567 1.60359C19.4734 1.59395 19.3787 1.60887 19.2943 1.64656C18.9007 1.81718 18.4575 1.87229 18.0272 1.80413C17.5969 1.73597 17.2013 1.54798 16.8959 1.26663C16.5061 0.88228 16.0346 0.572291 15.5093 0.35503C14.984 0.137768 14.4157 0.0176537 13.8379 0.00180381C13.2601 -0.0140461 12.6847 0.074691 12.1457 0.262757C11.6067 0.450823 11.1151 0.734391 10.7 1.09666C10.1317 1.59222 9.71547 2.21174 9.49172 2.89499C9.26796 3.57825 9.24432 4.302 9.42308 4.99591C5.70332 5.19588 3.14945 3.60618 1.10636 1.4266C1.04498 1.36401 0.964688 1.31887 0.875291 1.29669C0.785893 1.27451 0.691257 1.27625 0.60294 1.3017C0.514622 1.32715 0.436445 1.3752 0.377956 1.43999C0.319467 1.50478 0.283196 1.58351 0.273574 1.66655C-0.115647 3.6106 0.165123 5.61534 1.07817 7.41152C1.99122 9.2077 3.49283 10.7093 5.38131 11.7146C4.11508 13.0222 2.33689 13.8389 0.417923 13.9942C0.315116 14.0095 0.220211 14.0535 0.146493 14.1198C0.0727744 14.1861 0.0239313 14.2715 0.00679901 14.3641C-0.0103333 14.4566 0.00510294 14.5517 0.0509472 14.636C0.0967915 14.7202 0.170749 14.7895 0.26247 14.834C1.93194 15.5853 3.77041 15.982 5.6367 15.9938Z" fill="white" />
                  </svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                    <path d="M4.91725 9.61635L0.400472 8.14469C0.400472 8.14469 -0.139333 7.92568 0.0344845 7.42906C0.0702658 7.32665 0.142445 7.23951 0.358367 7.08976C1.35916 6.39217 18.8823 0.0938899 18.8823 0.0938899C18.8823 0.0938899 19.3771 -0.0728325 19.6689 0.0380587C19.7411 0.0604046 19.806 0.101525 19.8571 0.157213C19.9082 0.212901 19.9436 0.281157 19.9596 0.355001C19.9911 0.485428 20.0043 0.619615 19.9988 0.753685C19.9974 0.869666 19.9833 0.977164 19.9727 1.14574C19.866 2.86771 16.6722 15.7194 16.6722 15.7194C16.6722 15.7194 16.4811 16.4714 15.7965 16.4972C15.6282 16.5026 15.4606 16.4741 15.3036 16.4134C15.1466 16.3526 15.0034 16.2609 14.8827 16.1437C13.5392 14.988 8.89561 11.8673 7.86952 11.181C7.84637 11.1652 7.82688 11.1447 7.81235 11.1207C7.79783 11.0968 7.7886 11.07 7.78531 11.0422C7.77096 10.9699 7.84962 10.8803 7.84962 10.8803C7.84962 10.8803 15.9353 3.69315 16.1504 2.93866C16.1671 2.88021 16.1042 2.85137 16.0196 2.87697C15.4826 3.07454 6.17299 8.95362 5.14551 9.60247C5.07155 9.62485 4.99338 9.6296 4.91725 9.61635Z" fill="white" />
                  </svg>
                  <img src="/insta.png" alt="" />
                </div>
                <button className='btn-connect text-sm p-3 px-4 rounded-2xl font-bold'>Connect Wallet</button>
              </div>
            </div>
          </nav>
        </div>
        <img src="/bg-top-shape.png" className='absolute top-0 left-0 -z-0 w-1/2' alt="image" />
      </section>
      {/* Header End */}

      {/* Banner Start */}
      <section>
        <div className='wrapper relative z-10'>
          <div className='flex py-10'>
            <div className='w-1/2'>
              <h1 className='md:text-7xl text-white azonix'>Swisscheese</h1>
              <div className='flex items-end mt-3'>
                <h1 className='md:text-7xl text-white text-gradient azonix'>NFT</h1> <span className='text-white azonix text-5xl'>s</span>
              </div>
              <p className='text-white py-4 text-light-theme text-sm font-normal lg:w-2/3 leading-loose'>
                NFT aggregators rankings and analysis. Find non-fungible token trading volumes, number of traders per NFT Aggregator and more key metri gators rankings and analysis. Find non-fungible NFT aggregators rankings and analysis.
              </p>
              <div className='mint-box flex items-center gap-6 mt-15'>
                <div className='mint-btn py-3 px-8'>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="2" viewBox="0 0 12 2" fill="none">
                      <path opacity="0.5" d="M1 1L6 1M11 1L8.5 1" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                  <div>0</div>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 1V11M1 6H3.5M11 6L6 6" stroke="#FFCA06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </span>
                </div>
                <button className='btn-connect text-sm py-3 px-10 rounded-2xl font-bold'>Mint</button>
              </div>
            </div>
            <div className='w-1/2 relative'>
              <img src="/NFT.png" className='banner-img' alt="image" />
            </div>
          </div>
        </div>
      </section>
      {/* Banner End */}

      {/* Collect Start */}
      <section>
        <div className='wrapper'>
          <div className='text-center relative py-2'>
            <h1 className='azonix text-5xl text-white '>Collection</h1>
            <img src="/Collection.png" className='absolute  collection-img w-1/3' alt="collection" />
            <button className='btn-connect text-sm py-3 px-6 mt-10 rounded-2xl font-bold'>Open Sea</button>
          </div>
          <Swiper effect={'coverflow'} grabCursor={true} spaceBetween={40} loop={true} slidesPerView={4} pagination={true} className="mySwiper my-20" >
            <SwiperSlide>
              <div className='nft-box'>
                <div className='nft-img relative'>
                  <img src="/nft-img.png" className='w-full' alt="image" />
                  <div className='nft-card-widget'>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                      <path d="M8.875 15L2.16497 8.04146C1.41905 7.26791 1 6.21875 1 5.12479C1 2.84673 2.78078 1 4.97748 1C6.03237 1 7.04405 1.43458 7.78998 2.20812L8.875 3.33333L9.96002 2.20812C10.7059 1.43457 11.7176 1 12.7725 1C14.9692 1 16.75 2.84673 16.75 5.12479C16.75 6.21875 16.3309 7.26791 15.585 8.04146L11.5 12.2778" stroke="#FFCA06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                    <button>
                      <span>03</span>
                      <span>
                        • •
                      </span>
                      <span>22</span>
                      <span>
                        • •
                      </span>
                      <span>12</span>
                    </button>
                  </div>
                </div>
                <div className='nft-details p-5'>
                  <div className='flex justify-between items-cente'>
                    <h5 className='text-white font-semibold'>Swiss DJ #867637</h5>
                    <h5 className='text-yellow font-bold'>2.4 ETH</h5>
                  </div>
                  <div className='flex justify-between items-center py-3 mt-3'>
                    <img src="/group.png" alt="image" />
                    <button className='bid-btn'>Start Bid</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='nft-box'>
                <div className='nft-img relative'>
                  <img src="/nft-img.png" className='w-full' alt="image" />
                  <div className='nft-card-widget'>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                      <path d="M8.875 15L2.16497 8.04146C1.41905 7.26791 1 6.21875 1 5.12479C1 2.84673 2.78078 1 4.97748 1C6.03237 1 7.04405 1.43458 7.78998 2.20812L8.875 3.33333L9.96002 2.20812C10.7059 1.43457 11.7176 1 12.7725 1C14.9692 1 16.75 2.84673 16.75 5.12479C16.75 6.21875 16.3309 7.26791 15.585 8.04146L11.5 12.2778" stroke="#FFCA06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                    <button>
                      <span>03</span>
                      <span>
                        • •
                      </span>
                      <span>22</span>
                      <span>
                        • •
                      </span>
                      <span>12</span>
                    </button>
                  </div>
                </div>
                <div className='nft-details p-5'>
                  <div className='flex justify-between items-cente'>
                    <h5 className='text-white font-semibold'>Swiss DJ #867637</h5>
                    <h5 className='text-yellow font-bold'>2.4 ETH</h5>
                  </div>
                  <div className='flex justify-between items-center py-3 mt-3'>
                    <img src="/group.png" alt="image" />
                    <button className='bid-btn'>Start Bid</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='nft-box'>
                <div className='nft-img relative'>
                  <img src="/nft-img.png" className='w-full' alt="image" />
                  <div className='nft-card-widget'>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                      <path d="M8.875 15L2.16497 8.04146C1.41905 7.26791 1 6.21875 1 5.12479C1 2.84673 2.78078 1 4.97748 1C6.03237 1 7.04405 1.43458 7.78998 2.20812L8.875 3.33333L9.96002 2.20812C10.7059 1.43457 11.7176 1 12.7725 1C14.9692 1 16.75 2.84673 16.75 5.12479C16.75 6.21875 16.3309 7.26791 15.585 8.04146L11.5 12.2778" stroke="#FFCA06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                    <button>
                      <span>03</span>
                      <span>
                        • •
                      </span>
                      <span>22</span>
                      <span>
                        • •
                      </span>
                      <span>12</span>
                    </button>
                  </div>
                </div>
                <div className='nft-details p-5'>
                  <div className='flex justify-between items-cente'>
                    <h5 className='text-white font-semibold'>Swiss DJ #867637</h5>
                    <h5 className='text-yellow font-bold'>2.4 ETH</h5>
                  </div>
                  <div className='flex justify-between items-center py-3 mt-3'>
                    <img src="/group.png" alt="image" />
                    <button className='bid-btn'>Start Bid</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='nft-box'>
                <div className='nft-img relative'>
                  <img src="/nft-img.png" className='w-full' alt="image" />
                  <div className='nft-card-widget'>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                      <path d="M8.875 15L2.16497 8.04146C1.41905 7.26791 1 6.21875 1 5.12479C1 2.84673 2.78078 1 4.97748 1C6.03237 1 7.04405 1.43458 7.78998 2.20812L8.875 3.33333L9.96002 2.20812C10.7059 1.43457 11.7176 1 12.7725 1C14.9692 1 16.75 2.84673 16.75 5.12479C16.75 6.21875 16.3309 7.26791 15.585 8.04146L11.5 12.2778" stroke="#FFCA06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                    <button>
                      <span>03</span>
                      <span>
                        • •
                      </span>
                      <span>22</span>
                      <span>
                        • •
                      </span>
                      <span>12</span>
                    </button>
                  </div>
                </div>
                <div className='nft-details p-5'>
                  <div className='flex justify-between items-cente'>
                    <h5 className='text-white font-semibold'>Swiss DJ #867637</h5>
                    <h5 className='text-yellow font-bold'>2.4 ETH</h5>
                  </div>
                  <div className='flex justify-between items-center py-3 mt-3'>
                    <img src="/group.png" alt="image" />
                    <button className='bid-btn'>Start Bid</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='nft-box'>
                <div className='nft-img relative'>
                  <img src="/nft-img.png" className='w-full' alt="image" />
                  <div className='nft-card-widget'>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                      <path d="M8.875 15L2.16497 8.04146C1.41905 7.26791 1 6.21875 1 5.12479C1 2.84673 2.78078 1 4.97748 1C6.03237 1 7.04405 1.43458 7.78998 2.20812L8.875 3.33333L9.96002 2.20812C10.7059 1.43457 11.7176 1 12.7725 1C14.9692 1 16.75 2.84673 16.75 5.12479C16.75 6.21875 16.3309 7.26791 15.585 8.04146L11.5 12.2778" stroke="#FFCA06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                    <button>
                      <span>03</span>
                      <span>
                        • •
                      </span>
                      <span>22</span>
                      <span>
                        • •
                      </span>
                      <span>12</span>
                    </button>
                  </div>
                </div>
                <div className='nft-details p-5'>
                  <div className='flex justify-between items-cente'>
                    <h5 className='text-white font-semibold'>Swiss DJ #867637</h5>
                    <h5 className='text-yellow font-bold'>2.4 ETH</h5>
                  </div>
                  <div className='flex justify-between items-center py-3 mt-3'>
                    <img src="/group.png" alt="image" />
                    <button className='bid-btn'>Start Bid</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className='nft-box'>
                <div className='nft-img relative'>
                  <img src="/nft-img.png" className='w-full' alt="image" />
                  <div className='nft-card-widget'>
                    <button><svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                      <path d="M8.875 15L2.16497 8.04146C1.41905 7.26791 1 6.21875 1 5.12479C1 2.84673 2.78078 1 4.97748 1C6.03237 1 7.04405 1.43458 7.78998 2.20812L8.875 3.33333L9.96002 2.20812C10.7059 1.43457 11.7176 1 12.7725 1C14.9692 1 16.75 2.84673 16.75 5.12479C16.75 6.21875 16.3309 7.26791 15.585 8.04146L11.5 12.2778" stroke="#FFCA06" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                    <button>
                      <span>03</span>
                      <span>
                        • •
                      </span>
                      <span>22</span>
                      <span>
                        • •
                      </span>
                      <span>12</span>
                    </button>
                  </div>
                </div>
                <div className='nft-details p-5'>
                  <div className='flex justify-between items-cente'>
                    <h5 className='text-white font-semibold'>Swiss DJ #867637</h5>
                    <h5 className='text-yellow font-bold'>2.4 ETH</h5>
                  </div>
                  <div className='flex justify-between items-center py-3 mt-3'>
                    <img src="/group.png" alt="image" />
                    <button className='bid-btn'>Start Bid</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

        </div>
      </section>
      {/* Collect End */}

    </main>
  )
}
