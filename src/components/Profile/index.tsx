import React from 'react';
import {connect} from 'react-redux';
import {EZGardenState, Profile} from 'store/types';
import './Profile.css';

type ProfileProps = {
    profile: Profile
};

const mapState = (state: EZGardenState): ProfileProps => {
    return {
        profile: state.profile
    };
};

const profileDetailsKeyTitleMap = [
    ['first name', 'firstName'],
    ['last name', 'lastName'],
    ['phone', 'phone'],
    ['email', 'email'],
    ['bio', 'bio']
]

const renderProfileDetails = (profile: Profile) => {
    return profileDetailsKeyTitleMap.map(([title, key]) => (
        <div className="ProfileDetailsItem" key={key}>
            <div className="ProfileDetailsItemKey">
                <strong>
                    {title}
                </strong>
            </div>
            <div className="ProfileDetailsItemValue">
                {profile[key]}
            </div>
        </div>
    ));
}

const ProfilePage: React.FC<ProfileProps> = (props: ProfileProps) => {
    return (
        <div className="ProfileContainer">
            <div className="ProfileTitle">
                <h2>Profile</h2>
            </div>
            <div className="ProfileBody">
                <div className="ProfileAvatar">
                    <img src={props.profile.avatarImage} alt="profile-avatar"/>
                </div>
                <div className="ProfileDetails">
                    {renderProfileDetails(props.profile)}
                </div>
            </div>
        </div>
    );
};

export default connect(mapState)(ProfilePage);