import { useState } from 'react';
import './Header.css';
import ConsultationModal from './MyModal';
import PhoneModal from './PhoneModal';
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
          <li className="nav-item" onClick={showModal}>Liên Hệ</li>
        </ul>
      </nav>
      <button className="consult-button" onClick={showModal}>HOTLINE: 0984.472.587</button>
      <PhoneModal visible={isModalVisible} onClose={closeModal}></PhoneModal> 
    </div>
  </header>
}
export default Header