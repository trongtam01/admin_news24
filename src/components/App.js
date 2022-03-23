import React, { Component } from 'react';
import './../App.css'
import Header from './Header'
import SearchForm from './SearchForm'
import TableData from './TableData'
import AddUser from './AddUser'
import Data from './Data.json'

const { v4: uuidv4 } = require('uuid');

class App extends Component {
  constructor(props) {
    super(props);
    this.state= {
      Status: true,
      data: [],
      searchText: "",
      editUserStatus: false,
      userEditObject: {}
    }
  }

  
  componentWillMount() {
    // check localStorge??
    if(localStorage.getItem('userData') === null) {
      localStorage.setItem('userData', JSON.stringify(Data))
    } else {
      var temp = JSON.parse(localStorage.getItem('userData'))
      this.setState({
        data: temp
      });
    }

  }
  

  getTextSearch = (data) => {
    this.setState({
      searchText: data
    });
  }

  getNewUserData  = (name, tel, permission) => {
    var item = {}
    item.id = uuidv4()
    item.name = name
    item.tel = tel
    item.permission = permission
    
    var items = this.state.data
    items.push(item)

    this.setState({
      data: items
    });

    localStorage.setItem('userData',JSON.stringify(item))
  }

  getUserEditForApp = (info) => {
    this.state.data.forEach((value, key) => {
      if(value.id === info.id) {
        value.name = info.name
        value.tel = info.tel
        value.permisstion = info.permission 
      }
    })
    
    localStorage.setItem('userData',JSON.stringify(this.state.data))
  }
    
  ChangeStatus = () => {
    this.setState({
      Status: !this.state.Status
    });
  }

  ChangeEditUsers = () => {
    this.setState({
      editUserStatus: !this.state.editUserStatus
    });
  }

  editUser = (user) => {
    this.setState({
      userEditObject: user
    });
  }

  resultSearchData = () => {
    var result = []
    this.state.data.forEach((item) => {
      if(item.name.indexOf(this.state.searchText) !== -1){
        result.push(item)
      }
    })
    return result
  }

  deleteButtonClick = (idUser) => {
      var tempData = this.state.data.filter(item => item.id !== idUser)
      this.setState({
        data: tempData
      });
      localStorage.setItem('userData',JSON.stringify(tempData))
  }

  render() {
    // localStorage.setItem('userData',JSON.stringify(this.state.data))
    return (
      <div>
        <Header/>
        <div className="searchForm">
          <div className="container">
              <div className="row">
                  <SearchForm getUserEditForApp={(info) => {this.getUserEditForApp(info)}} userEditObject={this.state.userEditObject} changeEditUserStatus={() => {this.ChangeEditUsers()}}  EditUserStatus={this.state.editUserStatus} SearchForm={(data) => this.getTextSearch(data)} Connect={() => {this.ChangeStatus()}} PushForm={this.state.Status}/>
                  <TableData deleteButtonClick={(idUser) =>this.deleteButtonClick(idUser)} editFun={(user) => {this.editUser(user)}} changeEditUserStatus={() => {this.ChangeEditUsers()}} EditUserStatus={this.state.editUserStatus} dataUser = {this.resultSearchData()}/>
                  <AddUser PushForm={this.state.Status} PushUserData={(name,tel,permission) => this.getNewUserData(name,tel,permission)}/>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;


