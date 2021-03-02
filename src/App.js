import { Component } from 'react';
import './App.css';
import FavoriteList from './FavoriteList';
import Header from './Header';
import MyMap from './MyMap';
import axios from 'axios';

let access_token = null;
const postData = async () => {
    let grant_type= "client_credentials";
    let client_id= "33OkryzDZsK5YLe_1KRLtd2PNmsVJkjbuSn6lzinWJgORF0cgICAwRejVMxVg0MdeeceZHvIRWAZ5f1S2WwP5lvxvdalm7ZUq83DZekmCiP866SomeuPiA==";
    let client_secret= "lrFxI-iSEg_R_WXNllzrLm9CvbxoxuHdcTHCpM68Y9GgGVS3-8llacrNqi337J0QQQ82d2nDdtJYqPxH3x5Z7egAJpyO426MrOXbS4pb1gaj08G3noLxU36sLs1LhiJT"; 
  const urlPost = "https://outpost.mapmyindia.com/api/security/oauth/token";
  
  try{
    const response = await axios.post(urlPost, null, { params: { grant_type, client_id, client_secret } } );
    access_token = response.data.access_token;
    console.log(access_token);
  } catch (error){
    console.log(error);
  }
}

class App extends Component {
  state = {
    data: null,
  }
  
  componentDidMount(){
    this.getData();
    postData();
  }
  
  getData = async () => {
    const urlGet = "https://atlas.mapmyindia.com/api/places/search/json?query=bunkers";
    try{  
      const getResponse = await axios.get(urlGet, { headers: { 'Authorization': access_token } });
      const getResponseData = await getResponse.data;
      console.log(getResponseData);
      
      this.setState({
        data: getResponseData,
      })
    } catch (error){
      console.log(error);
    }
  }
  
  render(){
    return (
      <div className="app">
        <Header />
        <div className="app_Body">
          <MyMap />
          <FavoriteList />
        </div>
      </div>
    );
  }
  
}

export default App;
