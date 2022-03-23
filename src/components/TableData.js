import React, { Component } from 'react';
import TableDataRow from './TableDataRow'

class TableData extends Component {

    deleteButtonClick = (idUser) => {
        this.props.deleteButtonClick(idUser)
    }

    PushTableData = () => 
        this.props.dataUser.map((value, key) => (
            <TableDataRow deleteButtonClick={(idUser) => {this.deleteButtonClick(idUser)}} editFunClick={(user) => this.props.editFun(value)} changeEditUserStatus={() => {this.props.changeEditUserStatus()}} permisstion={value.permisstion} tel={value.tel} id={value.id} userName={value.name} key={key} />
        ))
    
    render() {
        return (
            <div className="col">
                <table className="table table-striped table-hover">
                    <thead className="thead-inverse">
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Điện thoại</th>
                        <th>Quyền</th>
                        <th>Thao tác</th>  
                    </tr>
                    </thead>
                    <tbody>
                    
                    {this.PushTableData()}
                    
                    </tbody>
                </table>
            </div>
        );
    }
}

export default TableData;