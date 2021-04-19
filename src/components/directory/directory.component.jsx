import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import Miyuki from '../../image/1.jpg';
import Mai from '../../image/2.jpg';
import Sarii from '../../image/3.jpg';
import Rino from '../../image/4.jpg';
import Yuki from '../../image/5.jpg';


import './directory.styles.scss';

class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'watanabe miyuki',
                    imageUrl: Miyuki,
                    id: 1,
                    linkUrl: 'miyuki'
                },
                {
                    title: 'shiraishi mai',
                    imageUrl: Mai,
                    id: 2,
                    linkUrl: ''
                },
                {
                    title: 'ikegami sarii',
                    imageUrl: Sarii,
                    id: 3,
                    linkUrl: ''
                },
                {
                    title: 'sashihara rino',
                    imageUrl: Rino,
                    size: 'large',
                    id: 4,
                    linkUrl: ''
                },
                {
                    title: 'kashiwagi yuki',
                    imageUrl: Yuki,
                    size: 'large',
                    id: 5,
                    linkUrl: ''
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>

                {
                    this.state.sections.map(({ title, imageUrl, id, size, linkUrl }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} linkUrl={linkUrl} history={this.props.history}/>
                    )
                    )
                }
            </div>
        )
    }
}

export default Directory;