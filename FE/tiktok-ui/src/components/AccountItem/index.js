import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./AccountItem.module.scss"

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/77e76b501a89489d020d58fb649c96d4~c5_100x100.jpeg?x-expires=1680854400&x-signature=S5C7CgfkcyTWENpUl9fYG7PEKh4%3D" alt="" />
            <div className={cx('info')}>
                <div className={cx('info-name')}>
                    <h4>Nguyen Van A</h4>
                    <FontAwesomeIcon className={cx('info-name__check')} icon={faCheckCircle}></FontAwesomeIcon>
                </div>
                <span className={cx('info-username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;