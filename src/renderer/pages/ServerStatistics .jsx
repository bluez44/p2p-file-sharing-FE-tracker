import React, { useEffect, useState } from 'react';
import axios from '../api';
import Content from '../components/Content';
import { Link } from 'react-router-dom';
const ServerStatistics = () => {
    const [peerCount, setPeerCount] = useState(0);

    const [torrentCount, setTorrentCount] = useState(0);

    const handleOnClick = () => {
        axios.get('/stat/count')
        .then(response => {
            console.log(response.data);
            setPeerCount(response.data.peer_count);
            setTorrentCount(response.data.torrent_count);
        })
        .catch(error => console.error("Lỗi khi tải thống kê máy chủ:", error));
    }

    useEffect(() => {
        // Lấy thông số máy chủ từ API backend
        axios.get('stat/count')
            .then(response => {
                console.log(response.data);
                setPeerCount(response.data.peer_count);
                setTorrentCount(response.data.torrent_count);
            })
            .catch(error => console.error("Lỗi khi tải thống kê máy chủ:", error));
    }, []);

    return (
        <Content>
            <h3>Thống kê máy chủ</h3>
            <div className='d-flex gap-2'>
                <Link className='link mb-4' to={'/'}>Danh sách các Peer</Link>
                <Link className='link mb-4' to={'/files'}>Quản lý file</Link>
            </div>
            <div className='flex-grow-1 d-flex flex-column align-items-center justify-content-center'>
                <h1>Số kết nối hiện tại: {peerCount}</h1>
                <h1>Số file torrent hiện có: {torrentCount}</h1>
            </div>

            <button className='btn btn-primary' onClick={handleOnClick}>Làm mới số liệu</button>
        </Content>
    );
};

export default ServerStatistics;
