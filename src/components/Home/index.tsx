import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import { Link } from 'react-router-dom';
import {EZGardenState, Feature, EarthquakeMetaData} from 'store/types';
import {selectFeature} from 'store/actions';
import './Home.css';

type HomeStateProps = {
    features: Feature[],
    metaData: EarthquakeMetaData
};

const mapState = (state: EZGardenState): HomeStateProps => {
    return {
        features: state.features,
        metaData: state.metaData
    };
};

const mapDispatch = {
    selectFeature: (id: string) => selectFeature(id)
};

const connector = connect(mapState, mapDispatch);

type HomeProps = ConnectedProps<typeof connector>;

class Home extends React.Component<HomeProps> {

    getEarthQuakeList() {
        return this.props.features.map((feature) => 
            <div className="FeatureItem" key={feature.id}>
                <div className="Place">
                    <Link to={`/details/${feature.id}`} onClick={() => this.props.selectFeature(feature.id)}>
                        {feature.properties.place}
                    </Link>
                </div>
                <div className="Magnitude">{feature.properties.mag}</div>
                <div className="Time">{new Date(feature.properties.time).toISOString()}</div>
            </div>
        );
    }

    render() {
        return (
            <div className="HomeContainer">
                <div className="SiteTitle">
                    <h2> {this.props.metaData.title} </h2>
                </div>
                <div className="EarthQuakeList">
                    <div className="FeaturesHeader FeatureItem">
                        <div className="Place">
                            <strong>Place</strong>
                        </div>
                        <div className="Magnitude">
                            <strong>Magnitude</strong>
                        </div>
                        <div className="Time">
                            <strong>Time</strong>
                        </div>
                    </div>
                    {this.getEarthQuakeList()}
                </div>
            </div>
        );
    }
}

export default connector(Home);