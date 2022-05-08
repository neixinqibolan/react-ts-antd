import * as React from 'react';
import '@/styles/footer.less';

export default class Footer extends React.Component {
    render () {
        return (
            <div className="footer-container">
                <div className="footer">
                    <div className="copyright">
                        Copyright@2020-2025 湘ICP备19016532号-1
                    </div>
                </div>
            </div>
        )
    }
}