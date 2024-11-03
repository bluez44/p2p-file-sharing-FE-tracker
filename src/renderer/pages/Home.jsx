import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from '../api';
import Content from '../components/Content';
import ProgressBar from '../components/ProgressBar';
import MyButton from '../components/MyButton';

function Home() {
  const [peers, setPeers] = useState([
    { id: '1', ip: '127.0.0.1', status: 'Đang chạy', sharedParts: 0 },
    { id: '2', ip: '127.0.0.1', status: 'Đang chạy', sharedParts: 0 },
    { id: '3', ip: '127.0.0.1', status: 'Đang chạy', sharedParts: 0 },
  ]);


  // const [testFiles, setTestFiles] = useState([]);

  // useEffect(() => {
  //   axios.get('/posts').then((response) => {
  //     setTestFiles(response.data);
  //   });
  // }, [])


//   useEffect(() => {
//     axios.get('/files').then((response) => {
//       setFiles(response.data);
//     });
//   }, []);

  return (
    <Content>
        <h2 className='text-start'>Danh sách các Peer</h2>
        <div className='d-flex gap-2'>
          <Link className='link mb-4' to={'/statistics'}>Thống kê hệ thống</Link>
          <Link className='link mb-4' to={'/files'}>Quản lý file</Link>
        </div>
        <ul className='list-group list flex-grow-1'>
            {peers.map((peer) => (
            <li className='list-group-item d-flex justify-content-between align-items-center' key={peer.id}>
                <div className='d-flex align-items-start flex-column gap-2'>
                  <span className='d-inline-block'>Ip: {peer.ip}</span>
                  <span className='d-inline-block'>Shared Parts: {peer.sharedParts}</span>
                  <span className='d-inline-block'>Status: {peer.status}</span>
                </div>
            </li>
            ))}
        </ul>
    </Content>
  );
}

export default Home;
