import React, { Component } from 'react';
import { fetchUsers } from '../actions';
import UserList from '../components/users-list';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

class UserIndex extends Component {
    componentDidMount() {
        if (!this.props.users.length) {
            this.props.fetchUsers();
        }
    }

    handlePageClick = (data) => {
        let page = data.selected;
        window.scrollTo(0, 0);
        this.props.fetchUsers(page * 50);
    };

    render() {
        return (
            <div>
                <UserList users={this.props.users} />
                <ReactPaginate previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={<a href="">...</a>}
                    breakClassName={"break-me"}
                    pageCount={20}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    pageClassName="page-item"
                    pageLinkClassName="page-link"
                    previousClassName="page-item"
                    nextClassName="page-item"
                    previousLinkClassName="page-link"
                    nextLinkClassName="page-link"
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    return { users };
}

export default connect(mapStateToProps, { fetchUsers })(UserIndex);