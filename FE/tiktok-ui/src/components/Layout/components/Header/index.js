import classNames from "classnames/bind";
import styles from "./Header.module.scss"
import image from "~/assets/image"
import React, { useEffect, useState } from 'react';
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper"
import Button from "~/components/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faSpinner, faMagnifyingGlass, faSignIn } from "@fortawesome/free-solid-svg-icons";
import AccountItem from "~/components/AccountItem";

const cx = classNames.bind(styles);

function Header() {

    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0);
    });

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="tiktok-logo" />
                </div>

                <Tippy
                    interactive={true}
                    visible={searchResult.length > 0}
                    render={attrs => (

                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                               <h4 className={cx('search-title')}>
                                Accounts
                               </h4>
                               <AccountItem />
                               <AccountItem />
                               <AccountItem />
                            </PopperWrapper>
                        </div>

                    )}
                >
                    <div className={cx('search')}>
                        <input
                            spellCheck={false}
                            placeholder="Search accounts and videos" />

                        <button className={cx('search-clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>

                        <FontAwesomeIcon className={cx('search-spinner')} icon={faSpinner} />


                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>

                    </div>
                </Tippy>

                <div className={cx('action')}>
                        <Button text>Upload</Button>
                        <Button primary rightIcon={<FontAwesomeIcon icon={faSignIn} />}>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;