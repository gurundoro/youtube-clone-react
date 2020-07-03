import React from 'react'

import { Grid } from '@material-ui/core'

import youtube from './api/youtube'


class App extends React.Component {

    render(){
        return(
            <Grid justofy="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacing={16}>
                      <Grid item xs={12}>
                       {/*Search */}
                      </Grid>
                      <Grid item xs={8}>
                          {/*Video Detail */}
                      </Grid>
                      <Grid item xs={4}>
                          {/* Video List */}
                      </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App