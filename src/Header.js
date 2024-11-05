import { useState } from 'react';
import './Header.css';
import ConsultationModal from './MyModal';
function Header(){
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
    return <header className="header">
    <div className="logo">
    <img src="./vinhomes_logo.svg"></img>
    </div> {/* Thay thế "Logo" bằng logo thực tế */}
    <div className="menu">
      <nav className="nav hidden-column">
        <ul className="nav-list">
          <li className="nav-item">Trang Chủ</li>
          <li className="nav-item">Giới Thiệu</li>
          <li className="nav-item">Liên Hệ</li>
        </ul>
      </nav>
      <button className="consult-button" onClick={showModal}>Nhận Tư Vấn Ngay</button>
      <ConsultationModal visible={isModalVisible} onClose={closeModal}></ConsultationModal>
    </div>
  </header>
}
export default Header