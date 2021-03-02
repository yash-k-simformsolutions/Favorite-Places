import React, { Component } from 'react';
import './Header.css';
import { SearchOutlined }from '@ant-design/icons';

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <h1>Map Marker</h1>
                <div className="header_Search">
                    <input placeholder="Add your favorite location..." />
                    <SearchOutlined />
                </div>
            </div>
        )
    }
}
