import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
//initial empty state of albums
state = { albums: [] };

//after fecting data
componentWillMount() {
    axios.get('https://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
}

renderAlbums() {
    return this.state.albums.map(albums => 
    <AlbumDetail key={albums.title} data={albums} />
 );
}

 render() {
     console.log(this.state);
    return (
        <ScrollView>
            {this.renderAlbums()}
        </ScrollView>
    );
 }
}

export default AlbumList;