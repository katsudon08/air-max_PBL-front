import React from 'react';
import { slide as Menu } from 'react-burger-menu'
import { PAGE_URLS } from '@/types/page-urls';

class HumbergerMenu extends React.Component {
    showSettings(event: MouseEvent) {
        event.preventDefault();
    }

    render() {
        return (
            <div id='out-container' className='h-4/5'>
                <Menu pageWrapId='page-wrap' outerContainerId='out-container' width={"35%"} right>
                    <main id='page-wrap' className='content-full content-full flex justify-center items-center flex-col px-2 pb-2 pt-10 space-y-2'>
                        <a href={PAGE_URLS.HOME} className='humberger-item'>Home</a>
                        <a href={PAGE_URLS.MONITOR} className='humberger-item'>Monitor</a>
                        <a href={PAGE_URLS.INFORMATION} className='humberger-item'>Information</a>
                    </main>
                </Menu>
            </div>
        );
    }
}
export default HumbergerMenu;