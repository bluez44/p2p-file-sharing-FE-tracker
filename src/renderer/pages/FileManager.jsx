// FileManager.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Content from '../components/Content';
import { Link } from 'react-router-dom';
const FileManager = () => {
    const [files, setFiles] = useState([
        { id: 1, name: 'file1', size: 0, sharedParts: 0, peerCount: 0 },
        { id: 2, name: 'file2', size: 0, sharedParts: 0, peerCount: 0 },
        { id: 3, name: 'file3', size: 0, sharedParts: 0, peerCount: 0 },
    ]);

    // useEffect(() => {
    //     // Lấy danh sách các tệp từ API backend
    //     axios.get('/api/tracker/files')
    //         .then(response => setFiles(response.data))
    //         .catch(error => console.error("Lỗi khi tải danh sách tệp:", error));
    // }, []);

    return (
        <Content>
            {/* <h3>Quản lý Tệp</h3>
            <table>
                <thead>
                    <tr>
                        <th>Tên Tệp</th>
                        <th>Kích thước</th>
                        <th>Phần đã chia sẻ</th>
                        <th>Số Peer</th>
                    </tr>
                </thead>
                <tbody>
                    {files.map(file => (
                        <tr key={file.name}>
                            <td>{file.name}</td>
                            <td>{file.size} MB</td>
                            <td>{file.sharedParts}</td>
                            <td>{file.peerCount}</td>
                        </tr>
                    ))}
                </tbody>
            </table> */}
            <h2 className='text-start'>Quản lý tệp</h2>
            <div className='d-flex gap-2'>
                <Link className='link mb-4' to={'/'}>Trang chủ</Link>
                <Link className='link mb-4' to={'/statistics'}>Thống kê hệ thống</Link>
            </div>
            <ul className='list-group list flex-grow-1'>
                {files.map((file) => (
                <li className='list-group-item d-flex justify-content-between align-items-center' key={file.id}>
                    <div className='d-flex align-items-start flex-column gap-2'>
                    <span className='d-inline-block'>Name: {file.name}</span>
                    <span className='d-inline-block'>Size: {file.size}</span>
                    <span className='d-inline-block'>Shared parts: {file.sharedParts}</span>
                    <span className='d-inline-block'>Peer count: {file.peerCount}</span>
                    </div>
                </li>
                ))}
            </ul>
        </Content>
    );
};

export default FileManager;
