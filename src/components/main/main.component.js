import * as React from 'react';
import Title from '../title/'
import Button from '../button/'
import classNames from 'classnames';
import styles from './main.component.scss'

const cx = classNames.bind(styles);

const MainComponent = () => (
    <div className={cx('Main')}>
        <Title />
        <Button />
    </div>
)

export default MainComponent;