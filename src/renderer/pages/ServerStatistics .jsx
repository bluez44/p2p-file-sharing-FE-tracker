import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Content from '../components/Content';
import { Link } from 'react-router-dom';
const ServerStatistics = () => {
    const [stats, setStats] = useState({});

    // useEffect(() => {
    //     // Lấy thông số máy chủ từ API backend
    //     axios.get('/api/tracker/stats')
    //         .then(response => setStats(response.data))
    //         .catch(error => console.error("Lỗi khi tải thống kê máy chủ:", error));
    // }, []);

    return (
        <Content>
            <h3>Thống kê Máy Chủ</h3>
            <div className='d-flex gap-2'>
                <Link className='link mb-4' to={'/'}>Trang chủ</Link>
                <Link className='link mb-4' to={'/files'}>Quản lý file</Link>
            </div>
            <p>Tốc độ tải xuống: {stats.downloadSpeed} MB/s</p>
            <p>Tốc độ tải lên: {stats.uploadSpeed} MB/s</p>
            <p>Tổng băng thông: {stats.totalBandwidth} GB</p>
            <p>Số kết nối hiện tại: {stats.connectionCount}</p>
        </Content>
    );
};

export default ServerStatistics;
