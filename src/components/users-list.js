import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class UsersList extends Component {

    renderUsers() {
        if (!this.props.users.length) return (
            <div className="table-row">
                <div className="table-cell">Downloading data...</div>
                <div className="table-cell">Downloading data...</div>
                <div className="table-cell">Downloading data...</div>
            </div>
        )
        return this.props.users.map(user => {
            return (
                <Link to={`/user/${user.login}`} className="table-row" key={user.id}>
                    <div className="table-cell"><img src={user.avatar_url} /></div>
                    <div className="table-cell">{user.login}</div>
                    <div className="table-cell">{user.html_url}</div>
                </Link>
            )
        })
    }

    renderTableHeader() {
        return (
            <div className="table-row">
                <div className="table-cell">Profile Picture</div>
                <div className="table-cell">Login</div>
                <div className="table-cell">GitHub Link</div>
            </div>
        )
    }

    render() {
        return (
            <div>
                <div className="pseudo-table">
                    {this.renderTableHeader()}
                    {this.renderUsers()}
                </div>
            </div>
        )
    }
}