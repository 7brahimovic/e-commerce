import React from 'react';

import Directory from'../../components/directory/directory.component';

import './homepage.styles.scss';

const HomePage = ({history}) => (
    <div className='homepage'>
        <h1>SNEAKERS SHOP</h1>
        <Directory history={history} />
    </div>
)

export default HomePage;