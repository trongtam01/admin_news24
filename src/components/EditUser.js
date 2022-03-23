import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name: this.props.userEditObject.name,
            tel: this.props.userEditObject.tel,
            permisstion: this.props.userEditObject.permisstion,
        }
    }
    
    isChanged = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({
            [name]: value
        });
    }

    SaveButton = () => {
        var info = {}
        info.id = this.state.id
        info.name = this.state.name
        info.tel = this.state.tel
        info.permisstion = this.state.permisstion

        this.props.EditUserStatus()
        this.props.getUserEditInfo(info)
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <form>
                    <div className="card text-white bg-secondary mt-2">
                        <div className="card-header text-center" >Sưa User</div>
                        <div className="card-body">
                        <div className="form-group">
                            <input onChange={(e) => {this.isChanged(e)}} defaultValue={this.props.userEditObject.name} name="name" type="text" className="form-control"  placeholder="Tên User" />
                            <small id="helpId" className="form-text text-muted">Help text</small>
                        </div>
                        <div className="form-group">
                            <input onChange={(e) => {this.isChanged(e)}} defaultValue={this.props.userEditObject.tel} name="tel"  type="text" className="form-control"  placeholder="Điện thoại" />
                            <small id="helpId" className="form-text text-muted">Help text</small>
                        </div>
                        <div className="form-group">
                            <select onChange={(e) => {this.isChanged(e)}} defaultValue={this.props.userEditObject.permisstion} required name="permisstion" className="form-control">
                                <option value>Chọn quyền</option>
                                <option value={1}>Admin</option>
                                <option value={2}>Modator</option>
                                <option value={3}>Normal</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <input onClick={() => {this.SaveButton()}} type="button" className="btn btn-block btn-danger" value="Lưu"/>
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
        );
    }
}

export default EditUser;