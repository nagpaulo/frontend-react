import React, { Component } from 'react';
import PageHeader from '../../template/pageHeader';
import Grid from '../../template/grid';
import IconButton from '../../template/iconButton';

export default props => (
    <div role="form" className="todoForm">
        <Grid cols="12 9 10">
            <input type="text" id="description" className="form-control"
                placeholder="Adcione uma tarefa" onChange={props.handleChange}
                value={props.description}/>
        </Grid>

        <Grid cols="12 3 2">
            <IconButton style="primary" icon="plus" 
                onClick={props.handleAdd}>
            </IconButton>
        </Grid>
    </div>
)