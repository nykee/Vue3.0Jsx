import {defineComponent, reactive} from 'vue';
import "../assets/IntroHeader.css"
const props = {
    Title: String,
    route:String

};
const IntroHeader = defineComponent({
    props:props,
    setup(props) {
        return () => (
            <header>
                <div className={`intro-container intro-header-${props.route}`}>
                    <div className="site-heading">
                        <h1 className="siteHeadTitleClass" mouseenter="addShake" mouseleave="removeShake">{props.Title}</h1>
                    </div>
                </div>
            </header>
        )
    }
});

export default IntroHeader;