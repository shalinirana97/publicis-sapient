import React, { PureComponent } from 'react';
import {
    Grid,
    Typography
} from '@material-ui/core';
import axios from 'axios';
import config from '../config';
import Layout from '../components/Layout';
import CustomCard from '../components/CustomCard';
import ContentLoader from '../components/ContentLoader';
import CustomFilters from '../components/CustomFilters';
import { toast } from "react-toastify";
import qs from 'query-string';

const apiUrl = config.apiUrl;

export default class LandingPage extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            filters: {
                limit: 100
            },
            data: [],
            loading: false,
            activeYear: "",
            activeLaunch: "",
            activeLand: ""
        }
    }
    componentDidMount() {
        this.getSpaceXdata(this.state.filters);
    }

    getSpaceXdata = (filters) => {
        this.setState({
            loading: true
        })
        axios.get(apiUrl, {
            params: filters
        })
            .then(res => {
                const data = res.data;
                this.setState({
                    data,
                    loading: false
                });
            }).catch(err => {
                const data = err && err.response && err.response.data ? err.response.data.message : "Something went wrong."
                toast.error(data, {
                    position: toast.POSITION.TOP_RIGHT
                });
            });
    }

    changeFilter = (name, value, active) => {
        this.setState({
            filters: {
                ...this.state.filters,
                [name]: value
            },
            [active]: value
        }, () => {
            const { filters } = this.state
            const routeParams = filters
            const searchString = qs.stringify(routeParams);
            this.props.history.push('/?' + searchString)
            this.getSpaceXdata(this.state.filters)
        }
        )
    }

    renderCardData = (data) => {
        const { land_success = "" } = data && data.rocket.first_stage && data.rocket.first_stage.cores[0]
        return (
            <div>
                <Typography variant="subtitle1" className="font-weight-bold mr-1" >Mission Ids:</Typography>
                {data.mission_id.length > 0 && (
                    <ul className="m-0" style={{ color: "#3f51b5" }}>
                        {data.mission_id.map((mid, index) =>
                            <li key={index}>{mid}</li>
                        )
                        }
                    </ul>)
                }
                <div className="d-flex">
                    <Typography variant="subtitle1" className="font-weight-bold mr-1" >Launch Year: </Typography>
                    <Typography variant="subtitle1" color="primary" className="font-weight-bold" >{data.launch_year || "-"}</Typography>
                </div>
                <div className="d-flex">
                    <Typography variant="subtitle1" className="font-weight-bold mr-1" >Successful Launch: </Typography>
                    <Typography variant="subtitle1" color="primary" className="font-weight-bold" >{data.launch_success ? 'true' : !data.launch_success ? 'false' : "-"}</Typography>
                </div>
                <div className="d-flex">
                    <Typography variant="subtitle1" className="font-weight-bold mr-1" >Successful Landing: </Typography>
                    <Typography variant="subtitle1" color="primary" className="font-weight-bold" >{land_success ? 'true' : !land_success ? 'false' : "-"}</Typography>
                </div>
            </div>
        )
    }

    render() {
        const { loading, data, activeYear, activeLaunch, activeLand } = this.state
        return (
            <Layout>
                <Grid container className='landing-page-wrap' >
                    <CustomFilters
                        changeFilter={this.changeFilter}
                        activeYear={activeYear}
                        activeLaunch={activeLaunch}
                        activeLand={activeLand}
                    />
                    <Grid item xs={12} sm={8} lg={9} className="custom-col-width" >
                        {loading ?
                            <div className="d-flex align-items-center h-100 justify-content-center">
                                <ContentLoader loading />
                            </div>
                            :
                            data.length > 0 ?
                                <Grid container >
                                    {data ? data.map((item, index) => {
                                        return (
                                            <Grid item xs={12} sm={6} lg={3} key={index}>
                                                <CustomCard
                                                    image={item.links && item.links.mission_patch}
                                                    title={`${item.mission_name && item.mission_name || ""} #${item.flight_number || ""}`}
                                                    child={this.renderCardData(item)}
                                                />
                                            </Grid>
                                        )
                                    })
                                        : null
                                    }
                                </Grid>
                                : <div className="d-flex align-items-center h-100 justify-content-center">
                                    <p>No data found</p>
                                </div>
                        }
                    </Grid>
                </Grid>
            </Layout>
        )
    }
}