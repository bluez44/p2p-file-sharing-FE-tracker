// FileManager.js
import React, { useEffect, useState } from 'react';
import axios from '../api';
import Content from '../components/Content';
import { Link } from 'react-router-dom';
import MyModal from '../components/MyModal';
const FileManager = () => {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        // Lấy danh sách các tệp từ API backend
        axios.get('/stat/torrents')
            .then((response) => {
                console.log(response.data);
                setFiles(response.data);
            })
            .catch((error) => {
                console.error('Lỗi khi tải thể têp:', error);
            })
    }, []);

    return (
        <Content>
            <h2 className='text-start'>Quản lý tệp</h2>
            <div className='d-flex gap-2'>
                <Link className='link mb-4' to={'/'}>Danh sách các Peer</Link>
                <Link className='link mb-4' to={'/statistics'}>Thống kê hệ thống</Link>
            </div>
            <ul className='list-group list flex-grow-1'>
                {files.map((file, index) => (
                <li className='list-group-item d-flex justify-content-between align-items-center' key={index}>
                    <div className='d-flex align-items-start flex-column gap-2 w-100'>
                        <span className='d-inline-block text-start overflow-auto w-100'>Magnet text: {file.filename}</span>
                        <span className='d-inline-block text-start overflow-auto w-100'>Ngày đăng tải: {file.uploadDate}</span>
                    </div>

                    <MyModal magnet_text={file.filename}></MyModal>
                </li>
                ))}
            </ul>
        </Content>
    );
};

export default FileManager;
