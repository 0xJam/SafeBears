import * as React from 'react';
import classNames from 'classnames';
import styles from './title.component.scss'

const cx = classNames.bind(styles);

const TitleComponent = () => (
    <div className={cx('contained')}>
        <span>SafeBears</span>
        <p>Small game to save the world</p>
    </div>
)

export default TitleComponent;