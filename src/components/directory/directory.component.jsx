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
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'shiraishi mai',
                    imageUrl: Mai,
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'ikegami sarii',
                    imageUrl: Sarii,
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'sashihara rino',
                    imageUrl: Rino,
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'kashiwagi yuki',
                    imageUrl: Yuki,
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        }
    }

    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(({ title, imageUrl, id, size }) => (
                        <MenuItem key={id} title={title} imageUrl={imageUrl} size={size} />
                    )
                    )
                }
            </div>
        )
    }
}

export default Directory;