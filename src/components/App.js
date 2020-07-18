import React from 'react';
import SearchBar from '../components/SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail'


const KEY = 'AIzaSyBlPHkp2GhMPTv6dIWeY7VAh-WugnDVlEQ';

class App extends React.Component{
    state={videos:[],selectedVideo:''}

    componentDidMount(){
        this.onTermSubmit('tech lead')
    }

    onTermSubmit = async (term)=>{
        const response = await youtube.get('/search',{
            params:{
                part:'snippet',
                type:'video',
                maxResults :5,
                key: KEY,
                q:term
            }
        })
        console.log (response.data.items)
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
    }

    onVideoSelect= (video)=>{
        this.setState({selectedVideo:video})
    }

    render(){
        return(
            <div className="ui container" style={{marginTop:'10px'}}>
                <SearchBar onFormSubmit = {this.onTermSubmit} />

                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>
                        <div className="five wide column">
                            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                        
                    </div>
                </div>
                
            </div>
        )
    }
}

export default App;