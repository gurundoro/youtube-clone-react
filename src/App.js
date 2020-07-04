import React, { useState, useEffect } from 'react'
import { Grid } from '@material-ui/core'
import youtube from './api/youtube'
import { SearchBar, VideoList, VideoDetail} from './components'

const App = () => {
    
    const [videos, setVideos ] = useState([])
    const [selectedVideo, setSelectedVideo] = useState(null)

    useEffect(() => {
        handleSubmit('nature is wild')
    },[null])

    const handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part:'snippet',
                maxResults: 5,
                key: 'AIzaSyCdvwL8Sh1i4xdOMdpcmBNdaSuGulTUyP8',
                q: searchTerm,
            }
        })

       setVideos(response.data.items) 
       setSelectedVideo(response.data.items[0])
    }

    const onVideoSelect = (video) => {
        setSelectedVideo(video)
    }


    return(
        <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                      <Grid item xs={12}>
                       <SearchBar onFormSubmit={handleSubmit}/>
                      </Grid>
                      <Grid item xs={8}>
                         <VideoDetail video={selectedVideo} />
                      </Grid>
                      <Grid item xs={4}>
                          <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
                      </Grid>
                    </Grid>
                </Grid>
            </Grid>
    )
}





// class App extends React.Component {

//     state = {
//         videos: [],
//         selectedVideo: null
//     }

//     componentDidMount(){
//         this.handleSubmit('nature is wild')
//     }

//     handleSubmit = async (searchTerm) => {
//         const response = await youtube.get('search', {
//             params: {
//                 part:'snippet',
//                 maxResults: 5,
//                 key: 'AIzaSyCdvwL8Sh1i4xdOMdpcmBNdaSuGulTUyP8',
//                 q: searchTerm,
//             }
//         })

//        this.setState({ videos: response.data.items, selectedVideo: response.data.items[0]})
//     }

//     onVideoSelect =(video) => {
//         this.setState({selectedVideo:video})
//     }

//     render(){
//         const { selectedVideo, videos } = this.state
//         return(
//             <Grid justify="center" container spacing={10}>
//                 <Grid item xs={12}>
//                     <Grid container spacing={10}>
//                       <Grid item xs={12}>
//                        <SearchBar onFormSubmit={this.handleSubmit}/>
//                       </Grid>
//                       <Grid item xs={8}>
//                          <VideoDetail video={selectedVideo} />
//                       </Grid>
//                       <Grid item xs={4}>
//                           <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
//                       </Grid>
//                     </Grid>
//                 </Grid>
//             </Grid>
//         )
//     }
// }

export default App