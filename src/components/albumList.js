import React, { Component } from 'react';
import {  ScrollView } from 'react-native';
import axios from 'axios';
import AlbumDetail from './albumDetail';


class AlbumList extends Component {


    state = {
        albums: []
    }

    componentWillMount() {
        // console.log('This called in album list');
        axios.get('http://rallycoding.herokuapp.com/api/music_albums').then(response =>
        this.setState({albums: response.data}));
    }

    renderAlbums() {
        let albumArr = [];
        this.state.albums.map((album, key) => {
            return (
                albumArr.push(
                    <AlbumDetail key={key} record={album}/>
                )
            )
        })
        return albumArr;
    }

    render() {
        console.log('sugar', this.state);
        return (
            <ScrollView>
                { this.renderAlbums() }
            </ScrollView>
        )
    }
}

export default AlbumList;