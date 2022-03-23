import React, { Component } from 'react';
import EditUser from './EditUser'

class SearchForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tempValue: "",
            userObj: {}
        }
    }
    

    isChangeSearch = (e) => {
        this.setState({
            tempValue: e.target.value
        });
        this.props.SearchForm(this.state.tempValue)
    }

    isShowEditForm = () => {
        if(this.props.EditUserStatus === true) {
            return (
                <EditUser getUserEditInfo={(info) => {this.getUserEditInfo(info)}} userEditObject={this.props.userEditObject} EditUserStatus={() => {this.props.changeEditUserStatus()}}/>
            )
        }
    }

    PushButton = () => {
        if(this.props.PushForm === true) {
            return <div className="btn btn-block btn-outline-secondary" onClick={() => this.props.Connect()}>Đóng</div>
        } else {
            return <div className="btn btn-block btn-outline-info" onClick={() => this.props.Connect()}>Thêm mới</div>  
        }
    }

    getUserEditInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getUserEditForApp(info)
    }

    render() {
        return (
            <div className="col-12">

                {this.isShowEditForm()}

                <div className="form-group">
                    <div className="btn-group">
                    <input onChange={(e) => this.isChangeSearch(e)} type="text" className="form-control" placeholder="Nhập tên cần tìm" style={{width: '500px'}} />
                    <div className="btn btn-info" onClick={(data) => this.props.SearchForm(this.state.tempValue)}>
                        Tìm kiếm
                    </div>
                    </div>
                    <div className="btn-group1 mt-2">
                        {
                            this.PushButton()
                        }
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
}

export default SearchForm;