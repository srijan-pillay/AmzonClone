import React from 'react'
import './index.css'
import { useContext } from 'react';
import { Store } from '../Store';
import { Helmet } from 'react-helmet-async';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MessageBox from '../components/MessageBox';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { BrowserRouter, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const compare = () => {
  return (
    <div>
        <BrowserRouter>
        compare
        </BrowserRouter>
    </div>
  )
}

export default compare