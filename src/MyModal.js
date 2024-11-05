// ConsultationModal.js
import React, { useState } from 'react';
import { Modal, Input, Form, Button, message } from 'antd';
import emailjs from 'emailjs-com';

const ConsultationModal = ({ visible, onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleSubmit = async () => {
    if (!phoneNumber) {
      message.error('Vui lòng nhập số điện thoại');
      return;
    }
    const phoneRegex = /^\d{10,11}$/;
    if (!phoneRegex.test(phoneNumber)) {
      message.error('Số điện thoại không đúng');
      return;
    }
    const templateParams = {
      phone_number: phoneNumber,
    };

    try {
      await emailjs.send(
        'service_ceqgc4r', // Thay bằng Service ID của bạn
        'template_54v7qoc', // Thay bằng Template ID của bạn
        templateParams,
        'FdhSmFsxtp3EPlARk' // Thay bằng User ID của bạn từ EmailJS
      );
      message.success('Số điện thoại của bạn đã được gửi!');
      onClose(); // Đóng modal sau khi gửi thành công
      setPhoneNumber(''); // Xóa số điện thoại
    } catch (error) {
      message.error('Đã xảy ra lỗi, vui lòng thử lại sau!');
    }
  };

  return (
    <Modal
    title={<div style={{ textAlign: 'center' }}>Nhận Tư Vấn</div>}  // Căn giữa tiêu đề
      open={visible}
      onCancel={onClose}
      footer={null}
    >
      <Form onFinish={handleSubmit}>
        <Form.Item label="Số điện thoại" 
        rules={[
            { required: true, message: 'Vui lòng nhập số điện thoại' },
            { pattern: /^\d{10,11}$/, message: 'Số điện thoại không đúng' } // Thông báo lỗi tùy chỉnh
          ]}
        >
          <Input
            type="tel"
            placeholder="Nhập số điện thoại của bạn"
            value={phoneNumber}
            onChange={handlePhoneChange}
          />
        </Form.Item>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Button
          type="primary"
          htmlType="submit"
          style={{ backgroundColor: '#c48c37', fontWeight: 'bold', color: 'white' }}
        >
          Nhận Tư Vấn Ngay
        </Button>
        </div>
      </Form>
    </Modal>
  );
};

export default ConsultationModal;