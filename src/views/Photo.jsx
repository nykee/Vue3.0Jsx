import {defineComponent, reactive} from 'vue';
import "../assets/center.scss"
import NavBar from "../component/NavBar";
import IntroHeader from "../component/IntroHeader";

const Photo = defineComponent({
    setup() {
        const state = reactive({count: 0});
        return () => (
            <div>
                <IntroHeader Title="Photo" route="photo"></IntroHeader>
                <h2>相册</h2>
            </div>
        )
    }
});

export default Photo;