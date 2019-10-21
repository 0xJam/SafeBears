import * as React from 'react';
import classNames from 'classnames';
import styles from './button.component.scss'

const cx = classNames.bind(styles);

const ButtonComponent = () => (
    <div className={cx('Login')}>
        <div className={cx('Small')}>
            <span>Log in</span>
        </div>
        <div className={cx('Signup')}>
            <div className={cx('Small')}>
                <span>Sign up</span>
            </div>
        </div>
    </div>
)

export default ButtonComponent;