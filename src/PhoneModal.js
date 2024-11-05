// ConsultationModal.js
import React, { useState } from 'react';
import { Modal, Input, Form, Button, message } from 'antd';
import emailjs from 'emailjs-com';

const PhoneModal = ({ visible, onClose }) => {

  return (
    <Modal
    title={<div style={{ textAlign: 'center', color: '#162a75', fontWeight:'bold' }}>Tư vấn mua nhà chuyên sâu</div>}  // Căn giữa tiêu đề
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      {/* <h3>Tư vấn mua nhà chuyên sâu</h3> */}
      {/* <div>Khi mua nhà trực tiếp tại Vinhomes, anh chị nhận được sự cam kết về giá gốc, pháp lý, chất lượng sản phẩm, tiến độ thi công.</div> */}
<div style={{textAlign:'center', lineHeight:'1.5'}}>Anh chị có thể đến trực tiếp văn phòng bán hàng Vinhomes hoặc liên hệ <span style={{fontWeight: 'bold',     color: 'rgb(22, 42, 117)'}}>HOTLINE 0984.472.587</span> để nhận tư vấn và báo giá.</div>
    </Modal>
  );
};

export default PhoneModal;