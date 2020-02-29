import React from 'react';
import {EZGardenState, Profile} from 'store/types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import './Header.css';

type HeaderProps = {
    logoImage: string
    title: string
    profile: Profile
};

const mapState = (state: EZGardenState): HeaderProps => {
    return {
        logoImage: state.site.logoImage,
        title: state.site.title,
        profile: state.profile
    };
}


class Header extends React.Component<HeaderProps> {
    render() {
        return (
            <header className="AppHeader">
                <div className="LogoHolder">
                    <Link to="/">
                        <img src={this.props.logoImage} alt="ezgarden-logo" />
                    </Link>
                </div>
                <div className="HeaderTitle">
                    <h1>{this.props.title}</h1>
                </div>
                <div className="Greeting">
                    <Link to="/profile">Wellcome {this.props.profile.firstName}</Link>
                </div>
            </header>
        );
    }
}

export default connect(mapState)(Header);