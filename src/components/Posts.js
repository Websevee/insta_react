import React, {Component} from 'react';
import Post from './Post'

export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post src="https://images.unsplash.com/photo-1496857239036-1fb137683000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="inst"/>
                <Post src="http://storage.inovaco.ru/media/project_mo_175/a0/03/24/db/61/67/vfr.jpg" alt="second"/>
            </div>
        )
    }
}