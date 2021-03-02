import React, { Component } from 'react';
import './FavoriteList.css';
import { EditTwoTone } from '@ant-design/icons';
import { DeleteTwoTone } from '@ant-design/icons';

const DemoList = [
    {
        name: "GJ3",
        address: "Vidhyanagar",
    },
    {
        name: "One & Only",
        address: "Vidhyanagar",
    },
    {
        name: "William John's Pizza",
        address: "Anand",
    },
    {
        name: "Satyanarayan",
        address: "Anand",
    },
    {
        name: "Satyanarayan",
        address: "Anand",
    },
    {
        name: "Satyanarayan",
        address: "Anand",
    },
    {
        name: "Satyanarayan",
        address: "Anand",
    },    
    {
        name: "Satyanarayan",
        address: "Anand",
    },
    {
        name: "Satyanarayan",
        address: "Anand",
    },
]

export default class FavoriteList extends Component {
    render() {
        return (
            <div className="favorite">
                <input placeholder="add name" />
                <button>Add Marker</button>
                <div className="favorite_LocationList">
                    {
                        DemoList.map((location) => {
                            return(
                                <div className="favorite_Location">
                                    <h3>{location.name}</h3>
                                    <p>{location.address} </p>
                                    <hr />
                                    <div className="favorite_LocationButtons">
                                        <EditTwoTone />
                                        <DeleteTwoTone twoToneColor="red" />
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}
