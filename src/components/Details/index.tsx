import React from 'react';
import {connect} from 'react-redux';
import { Feature, EZGardenState } from 'store/types';
import './Details.css';


type DetailsProps = {
    feature: Feature | null
};

const mapState = (state: EZGardenState): DetailsProps => {
    return {
        feature: state.currentFeature
    };
};

const featureKeyTitleMap = [
    ['place', 'Place'],
    ['mag', 'Magnitude'],
    ['time', 'time'],
    ['status', 'status'],
    ['tsunami', 'tsunami'],
    ['type', 'type']
];

const renderFeatureDetails = (feature: Feature | null) => {
    if (!feature) {
        return (<></>);
    }
    return featureKeyTitleMap.map(([key, title]) => (
        <div className="FeatureDetailsItem" key={key}>
            <div className="FeatureDetailsItemKey">
                <strong>{title}</strong>
            </div>
            <div className="FeatureDetailsItemValue">
                {feature.properties[key]}
            </div>
        </div>
    ));
};

const Details: React.FC<DetailsProps> = (props: DetailsProps) => {
    return (
        <div className="DetailsContainer">
            <div className="FeatureTitle">
                <h2>{props.feature?.properties.title}</h2>
            </div>
            <div className="FeatureDetails">
                {renderFeatureDetails(props.feature)}
            </div>
        </div>
    );
};

export default connect(mapState)(Details);
