import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Navigation, Pagination } from 'swiper/modules';
import { useRef } from 'react';

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
      nextArrow: <CustomNextArrow />,
  };
  
  function CustomPrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "green",
          borderRadius: "50%",
        }}
        onClick={onClick}
      >
        
      </div>
    );
  }
  
  function CustomNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "block",
          background: "green",
          borderRadius: "50%",
        }}
        onClick={onClick}
      >
        
      </div>
    );
  }
  const images = [
    {src: './bg9.jpg', title: 'Toàn cảnh dự án'},
    {src: './bg1.jpg', title: 'Trung tâm Hội chợ Triển lãm Quốc gia - The Grand Expo'},
    {src: './bg2.jpg', title: 'Tổng thể dự án'},
    {src: './bg3.jpg', title: 'Vincom Mega Mall'},
    {src: './bg4.jpg', title: 'Công viên Royal Park'},
    {src: './bg5.jpg', title: 'Nhà để xe'},
    {src: './bg6.jpg', title: 'Wonderland'},
    {src: './bg7.jpg', title: 'Wonderland'},
    {src: './bg8.jpg', title: 'Quảng trường Tháp Đồng hồ Boutique Park'},
  
  ]
  
function SwiperWrap(){
    const swiperRef = useRef(null);
    return <>
    <Swiper
      ref={swiperRef} 
        modules={[Navigation, Pagination]}
        slidesPerView={1.5}        // Hiển thị 1.5 ảnh trên màn hình
        spaceBetween={10}          // Khoảng cách giữa các ảnh
        navigation                 // Thêm nút chuyển
        pagination={{ clickable: true }} // Thêm pagination
        loop={true}                // Cho phép loop khi hết ảnh
        breakpoints={{
          768: {
            slidesPerView: 1.5, // Hiển thị 1.5 ảnh trên màn hình từ 768px trở lên (máy tính)
          },
          0: {
            slidesPerView: 1, // Hiển thị 1 ảnh trên màn hình nhỏ hơn 768px (điện thoại)
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div style={{position: 'relative',height: ' 400px',overflow: 'hidden'}}>
            <img
              src={img.src}
              alt={`Slide ${index + 1}`}
              style={{
                width: '100%',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', // Thêm shadow
                width: '100%',
                  height: '100%',      // Đặt chiều cao 100% cho ảnh
                  objectFit: 'cover',  // Cắt ảnh để giữ tỷ lệ
              }}
            />
            <div className='bg-overlay'>
                <h1 className='bg-title'>
                  {img.title} {/* Tiêu đề */}
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Nút Prev */}
      <div className="swiper-button-prev custom-nav-button" onClick={() => swiperRef.current.swiper.slidePrev()}>❮</div>

      {/* Nút Next */}
      <div className="swiper-button-next custom-nav-button" onClick={() => swiperRef.current.swiper.slideNext()}>❯</div>
    </>
}
  export default SwiperWrap