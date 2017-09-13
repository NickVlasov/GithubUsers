import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUser } from '../actions';
import { Link } from 'react-router-dom';

class UserInfo extends Component {
    componentDidMount() {
        const { login } = this.props.match.params;
        this.props.fetchUser(login);
    }

    isUnknown(field) {
        if (!field) return "Unknown"
        else return field;
    }

    showDate(date) {
        const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(date).toLocaleString('en-GB', dateOptions);
    }

    showBlog(site) {
        if (!!site) return <Link target="_blank" to={site}>{site}</Link>
        else return site;
    }

    renderUser() {
        const { user } = this.props;
        if (!user.id) return <div>Downloading data</div>;
        // if(!user) return <div>Downloading data</div>;
        return (
            <div>
                <div className="big-avatar-wrapper">
                    <img src={user.avatar_url} />
                </div>
                <div className="login-wrapper">{this.isUnknown(user.login)}</div>
                <div>Name: {this.isUnknown(user.name)}</div>
                <div>Followers: {this.isUnknown(user.followers)}</div>
                <div>Following: {this.isUnknown(user.following)}</div>
                <div>Created at: {this.showDate(user.created_at)}</div>
                <div>Company: {this.isUnknown(user.company)}</div>
                <div>Email: {this.isUnknown(user.email)}</div>
                <div>Location: {this.isUnknown(user.location)}</div>
                <div>Blog: {this.showBlog(user.blog)}</div>
                <div>Bio: {this.isUnknown(user.bio)}</div>
            </div>
        )
    }

    render() {
        console.log(this.props.user);
        return (
            <div className="center-wrapper">
                {this.renderUser()}
                <Link to="/" className="back-button">Back to main page</Link>
            </div>
        )
    }
}
function mapStateToProps(state, ownProps) {
    // return { user: state.user[ownProps.match.params.login] }
    return { user: state.user}
}

export default connect(mapStateToProps, { fetchUser })(UserInfo);