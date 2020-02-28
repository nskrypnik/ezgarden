import React from 'react';
import {Profile} from 'store/types';
import {connect} from 'react-redux';
import './Header.css';

type HeaderProps = {
    logoImage: string
    title: string
    profile: Profile
};


class Header extends React.Component<HeaderProps> {

}

export default {};