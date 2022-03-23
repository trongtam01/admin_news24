import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "",
            tel: "",
            permission: "",
        }
    }
    

    isChanged = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        });     
    }

    CheckStatus = () => {
        if(this.props.PushForm === true) {
            return (    
                <div className="col">
                    <form>
                    <div className="card text-white mt-2">
                        <div className="card-header" style={{color: 'red'}}>Thêm mới User</div>
                        <div className="card-body">
                        <div className="form-group">
                            <input onChange={(e) => this.isChanged(e)} name="name" type="text" className="form-control"  placeholder="Tên User" />
                            <small id="helpId" className="form-text text-muted">Help text</small>
                        </div>
                        <div className="form-group">
                            <input onChange={(e) => this.isChanged(e)} name="tel"  type="text" className="form-control"  placeholder="Điện thoại" />
                            <small id="helpId" className="form-text text-muted">Help text</small>
                        </div>
                        <div className="form-group">
                            <select onChange={(e) => this.isChanged(e)} name="permission" className="form-control">
                            <option value={0}>Chọn quyền</option>
                            <option value={1}>Admin</option>
                            <option value={2}>Modator</option>
                            <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input type="reset" onClick={(name, tel, permission) => {this.props.PushUserData(this.state.name, this.state.tel, this.state.permission)}} className="btn btn-block btn-primary" value="Thêm mới"/>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
            )
        }
    }

    render() {

        return (
            <div>
            
            {this.CheckStatus()}

            </div>
        );
    }
}

export default AddUser;