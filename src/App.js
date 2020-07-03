import React from 'react'

import { Grid } from '@material-ui/core'

import youtube from './api/youtube'

import { SearchBar, VideoList, VideoDetail} from './components'


class App extends React.Component {

    state = {
        video: [],
        selectedVideo: null
    }


    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part:'snippet',
                maxResults: 5,
                key: 'AIzaSyCdvwL8Sh1i4xdOMdpcmBNdaSuGulTUyP8',
                q: searchTerm,
            }
        })

       this.setState({ videos: response.data.items, selectedVideo: response.date.items[0]})
    }

    render(){
        const { selectedVideo } = this.state
        return(
            <Grid justofy="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                      <Grid item xs={12}>
                       <SearchBar onFormSubmit={this.handleSubmit}/>
                      </Grid>
                      <Grid item xs={8}>
                         <VideoDetail video={selectedVideo} />
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