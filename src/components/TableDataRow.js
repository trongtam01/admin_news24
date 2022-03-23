import React, { Component } from 'react';

class TableDataRow extends Component {

    permisstionShow = () => {
        if(this.props.permisstion === 1) {
            return 'Admin'
        }else if (this.props.permisstion === 2) {
            return 'Moderator'
        }else {
            return 'Normal'
        }
    }

    editClick = () => {
        this.props.editFunClick()
        this.props.changeEditUserStatus()
    }

    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser)
    }

    render() {
        return (
            <tr>
                <td scope="row">{this.props.id}</td>
                <td>{this.props.userName}</td>
                <td>{this.props.tel}</td>
                <td>{this.permisstionShow()}</td>
                <td>
                <div className="btn-group">
                    <div onClick={() => {this.editClick()}} className="btn btn-warning edit">
                    <i className="fa fa-edit" />
                    Sửa
                    </div>
                    <div className="btn btn-danger danger" onClick={(idUser) => this.deleteButtonClick(this.props.id)}>
                    <i className="fa fa-delicious" aria-hidden="true" />
                    Xóa
                    </div>
                </div>
                </td>
            </tr>
        );
    }
}

export default TableDataRow;