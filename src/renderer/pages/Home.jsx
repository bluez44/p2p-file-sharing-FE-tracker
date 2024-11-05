import React, { useContext, useEffect, useMemo, useReducer, useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import axios from '../api';
import Content from '../components/Content';
import ProgressBar from '../components/ProgressBar';
import MyButton from '../components/MyButton';

function Home() {
  const [peers, setPeers] = useState([]);
  
  const [filterPeers, setFilterPeers] = useState([]);

  const [searchValue, setSearchValue] = useState('');

  const [counter, setCounter] = useState(0);

  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    setFilterPeers(
      peers.filter((peer) => {
        return String(peer.port).includes(searchValue);
      })
    )
    
  }, [peers, searchValue])

  useEffect(() => {
    axios.get('/stat/peers')
    .then((response) => {
      setPeers(response.data);
    })
  }, [])

  const handleOnClick = () => {
    axios.get('/stat/peers')
    .then((response) => {
      setPeers(response.data);
    })

    setFilterPeers(...peers)
    console.log(peers, counter)
  }

  console.log('RENDER')

  return (
    <Content>
        <h2 className='text-start'>Danh sách các Peer</h2>
        <div className='d-flex gap-2'>
          <Link className='link mb-4' to={'/statistics'}>Thống kê hệ thống</Link>
          <Link className='link mb-4' to={'/files'}>Quản lý file</Link>
        </div>
        <input 
          type="number"
          className="form-control mb-2"
          placeholder="Tìm kiếm theo port"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <ul className='list-group list flex-grow-1'>
            {
              !filterPeers.length 
                ? <p>Không có peer phù hợp</p>
                :
              filterPeers.map((peer, index) => (
              <li className='list-group-item d-flex justify-content-between align-items-center' key={index}>
                  <div className='d-flex align-items-start flex-column gap-2'>
                    <span className='d-inline-block'>Ip: {peer.ip}</span>
                    <span className='d-inline-block'>Peer port: {peer.port}</span>
                  </div>
              </li>
              ))
            }
        </ul>
        <button className='btn btn-primary mb-4 mt-4  ' onClick={handleOnClick}>Làm mới danh sách Peer</button>
    </Content>
  );
}

export default Home;
