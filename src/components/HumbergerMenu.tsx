import React from 'react';
import { slide as Menu } from 'react-burger-menu'

class HumbergerMenu extends React.Component {
    showSettings(event: MouseEvent) {
        event.preventDefault();
    }

    render() {
        return (
            <div id='out-container' className='h-4/5'>
                <Menu pageWrapId='page-wrap' outerContainerId='out-container' width={"20%"} right>
                    <main id='page-wrap' className='content-full content-full flex justify-center items-center flex-col p-2 space-y-2'>
                        <div className='w-full bg-slate-200 card-sm p-2 text-center'>Home</div>
                        <div className='w-full bg-slate-200 card-sm p-2 text-center'>Map</div>
                        <div className='w-full bg-slate-200 card-sm p-2 text-center'>Information</div>
                    </main>
                </Menu>
            </div>
        );
    }
}
export default HumbergerMenu;