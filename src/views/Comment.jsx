import {defineComponent, reactive} from 'vue';
import "../assets/center.scss"
import NavBar from "../component/NavBar";
import IntroHeader from "../component/IntroHeader";

const Comment = defineComponent({
    setup() {
        const state = reactive({count: 0});
        return () => (
            <div>
                <IntroHeader Title="comments" route="comments"></IntroHeader>
                <h2>留言</h2>
            </div>
        )
    }
});

export default Comment;