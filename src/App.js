import logo from './logo.svg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './App.css';

import { Navigation, Pagination } from 'swiper/modules';

import { Table, Button } from 'antd'
import { RightOutlined } from '@ant-design/icons';
import { useRef, useState } from 'react';
import Header from './Header';
import SwiperWrap from './Slide';
import ConsultationModal from './MyModal';
const dataSource = [
  {
    key: '6',
    macan: 'VD7-20',
    dientich: '62,5m2',
    gia: '18.8 tỷ',
    giam2: '285 triệu/m2',
    dacdiem: 'Căn liền kề Viễn Đông, đối diện công viên',
    huongcua: 'Đông Nam'
  },
  {
    key: '5',
    macan: 'AD4-15',
    dientich: '63m2',
    gia: '16,5 tỷ',
    giam2: '264 triệu/m2',
    dacdiem: 'Căn xẻ khe Ánh Dương',
    huongcua: 'Đông Nam'
  },
  {
    key: '1',
    macan: 'NN3-67',
    dientich: '62,5m2',
    gia: '14,8 tỷ',
    giam2: '236 triệu/m2',
    dacdiem: 'Căn liền kề Nhật Nguyệt',
    huongcua: 'Đông Nam'
  },
  {
    key: '2',
    macan: 'NN4-87',
    dientich: '87,5m2',
    gia: '24,1 tỷ',
    giam2: '275 triệu/m2',
    dacdiem: 'Căn góc, mặt phố Nhật Nguyệt',
    huongcua: 'Đông Nam'
  },
  {
    key: '3',
    macan: 'AD10-22',
    dientich: '62,5m2',
    gia: '14,8 tỷ',
    giam2: '236 triệu/m2',
    dacdiem: 'Căn liền kề Ánh Dương',
    huongcua: 'Tây Bắc'
  },
  
  
  {
    key: '6',
    macan: 'AD4-18',
    dientich: '80m2',
    gia: '21 tỷ',
    giam2: '262 triệu/m2',
    dacdiem: 'Căn xẻ khe Ánh Dương',
    huongcua: 'Tây Nam'
  },
  {
    key: '7',
    macan: 'AD4-01',
    dientich: '139m2',
    gia: '40 tỷ',
    giam2: '290 triệu/m2',
    dacdiem: 'Căn góc, mặt phố Ánh Dương 11',
    huongcua: 'Đông Nam'
  },
  {
    key: '8',
    macan: 'AD17',
    dientich: '105m2',
    gia: '29,2 tỷ',
    giam2: '278 triệu/m2',
    dacdiem: 'Căn liền kề, mặt phố Ánh Dương',
    huongcua: 'Đông Nam'
  },
  {
    key: '9',
    macan: 'AD18',
    dientich: '120m2',
    gia: '34,3 tỷ',
    giam2: '295 triệu/m2',
    dacdiem: 'Căn xẻ khe, mặt phố Ánh Dương',
    huongcua: 'Đông Nam'
  },
  {
    key: '9',
    macan: 'TN4-172',
    dientich: '63m2',
    gia: '17 tỷ',
    giam2: '270 triệu/m2',
    dacdiem: 'Căn liền kề Thiên Nga',
    huongcua: 'Tây Nam'
  },
  {
    key: '10',
    macan: 'NN4-87',
    dientich: '87,5m2',
    gia: '24,1 tỷ',
    giam2: '275 triệu/m2',
    dacdiem: 'Căn góc mặt phố Nhật Nguyệt',
    huongcua: 'Đông Bắc'
  },
  {
    key: '11',
    macan: 'NN4-87',
    dientich: '87,5m2',
    gia: '24,1 tỷ',
    giam2: '275 triệu/m2',
    dacdiem: 'Căn góc mặt phố Nhật Nguyệt',
    huongcua: 'Đông Bắc'
  },
  {
    key: '12',
    macan: 'TP4.4-78',
    dientich: '163m2',
    gia: '56 tỷ',
    giam2: '343 triệu/m2',
    dacdiem: 'Căn góc mặt phố TP4.4',
    huongcua: 'Đông Nam'
  },
  
];




function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  const handleButtonClick = (record) => {
    showModal()
  };
  const columns = [
    {
      title: 'Mã căn',
      dataIndex: 'macan',
      key: 'macan',
      render: (text, record, index) => (
        <div className="table-row">
          {/* Render nhãn "TOP" cho 3 hàng đầu tiên */}
          {index < 3 && (
            <span className="top-label hidden-column">
              {`TOP ${index + 1}`}
            </span>
          )}
          {text}
        </div>
      ),
    },
    {
      title: 'DT đất',
      dataIndex: 'dientich',
      key: 'dientich',
    },
    {
      title: 'Giá bán',
      dataIndex: 'gia',
      key: 'gia',
    },
    {
      title: 'Giá/m2',
      dataIndex: 'giam2',
      key: 'giam2',
      className: 'hidden-column',
    },
    {
      title: 'Hướng cửa',
      dataIndex: 'huongcua',
      key: 'huongcua',
      className: 'hidden-column',
    },
    {
      title: 'Đặc điểm',
      dataIndex: 'dacdiem',
      key: 'dacdiem',
      
    },
    {
      title: '',
      key: '',
      render: (text, record) => (
        <div className='lien-he-btn' onClick={() => handleButtonClick(record)}>
          Liên hệ
        </div>
      ),
      className: 'hidden-column',
    },
  
  ];
  
  return (
    <div className="App">
      <Header></Header>  
      <h2 className='tong-quan-title'>Tổng quan dự án Vinhomes Global Gate
      </h2>
      <div className='swiper-wrap'>
      <SwiperWrap></SwiperWrap>
      </div>
      <div className='table-wrap'>
        <h2 className='table-title'>
        Giá và Quỹ căn Vinhomes Global Gate
        </h2>
      <Table 
      rowHoverable={false} 
      dataSource={dataSource} 
      pagination={false} columns={columns}/>
      </div>
      
      <div className='see-all' onClick={showModal}>Xem toàn bộ quỹ căn <RightOutlined className="small-icon"/></div>
      <ConsultationModal visible={isModalVisible} onClose={closeModal}></ConsultationModal> 
    </div>
  );
}

export default App;
