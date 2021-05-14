import React, {useContext, useEffect, useState} from 'react';
import {
    LinearProgress,

} from '@material-ui/core';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { DataGrid, SortDirection,getGridNumericColumnOperators,GridPreferencePanelsValue } from '@material-ui/data-grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import {Link} from "react-router-dom";

const columns = [
    { field: 'name', type: 'Number', headerName: 'Name', width: 250, headerClassName: 'header',},
    { field: 'creator', headerName: 'User', width: 200, headerClassName: 'header' },
    { field: 'details', headerName: 'Details', width: 200, headerClassName: 'header' },


];

const sortModel = [
    {
        field: 'name',
        sort: 'desc'  ,
    },
];

const OT_details = () => {

    const [movementLogs, setMovementLogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [id, setId] = useState([]);
    const [name, setotHrsMax] = useState([]);
    const [creator, setotHrsMin] = useState([]);
    const [details, setincharge_email] = useState([]);
    const [listData, setListData] = useState([]);
    const token = localStorage.getItem("Token")
    const onChangeMax_Hours = (e) => {
        setotHrsMax(e.target.value);
    };
    const onChangeMin_Hours = (e) => {
        setotHrsMin(e.target.value );
    };

    const onChangeInchemail = (e) => {
        setincharge_email(e.target.value );
    };

    const onChangeId = (e) => {
        setId(e.target.value );
    };

    const username = 'user';
    const password = 'user';
    const headers = {
        headers: {

            Authorization: "Basic " + btoa(username + ":" + password),
            'Access-Control-Allow-Origin': '*',
            mode: 'no-cors'
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(
                'http://localhost:3001/api/usersdata', headers);
            setListData(result.data);
            console.log(result.data)
        };
        fetchData();
    }, []);

    const submit = async (e) => {
        e.preventDefault();
        try{
            const body = ({name, creator,details} );
            const loginResponse = await axios.post("http://localhost:3001/api/updateresearch", headers,{ params: {
                    id,
                    name,
                    details
                }},{
                credentials: 'include',
            });
            console.log(loginResponse);
            setotHrsMax('')
            setotHrsMin('')
            setincharge_email('')
        } catch(err) {
            //err.response.data.message&& setErr(err.response.data.message)
        }
    };




    return (

        <div>

            <h1 variant="h4"  className='title'>User Research</h1>
            <Grid container justify="center" direction='row'  spacing={10}>
                <Grid item md={7}>
                    <Container  fixed>
                        <form onSubmit={submit} >
                            <label>Research ID :</label> <input type="text" value={id} onChange={onChangeId} placeholder="Research Id..." /><br />
                            <label>Research Name :</label> <input type="text" value={name} onChange={onChangeMax_Hours} placeholder="Research Name..." /><br />
                            <label>Researcher :</label> <input type="text" value={creator} onChange={onChangeMin_Hours} placeholder="Researcher..." /><br />
                            <label>Details :</label> <input type="text" value={details} onChange={onChangeInchemail} placeholder="Details..." /><br />


                            <input type="submit" value="Submit" />
                        </form>
                    </Container>
                </Grid>
                <Grid item md={8}>
                    <Container  fixed>
                        <div className="table">

                        </div>
                    </Container>
                </Grid>
            </Grid>
        </div>


    );
};

export default OT_details;