import React from 'react';
import { slide as Menu } from 'react-burger-menu'

class HumbergerMenu extends React.Component {
    showSettings(event: MouseEvent) {
        event.preventDefault();
    }

    render() {
        return (
            <div id='out-container' className='h-4/5'>
                <Menu pageWrapId='page-wrap' outerContainerId='out-container' width={"35%"} right>
                    <main id='page-wrap' className='content-full content-full flex justify-center items-center flex-col px-2 pb-2 pt-10 space-y-2'>
                        <div className='humberger-item' >Home</div>
                        <div className='humberger-item' >Monitor</div>
                        <div className='humberger-item' >Information</div>
                    </main>
                </Menu>
            </div>
        );
    }
}
export default HumbergerMenu;