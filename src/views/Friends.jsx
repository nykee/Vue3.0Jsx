/*Vue3 jsx语法测试*/
import {defineComponent, reactive} from 'vue';
import "../assets/center.scss"
import NavBar from "../component/NavBar";
import IntroHeader from "../component/IntroHeader";

const Friends = defineComponent({
    setup() {
        const state = reactive({count: 0});
        return () => (
            <div >
                <IntroHeader Title="Friends" route="friends"></IntroHeader>
                <h2>Friends</h2>
            </div>
        )
    }
});

export default Friends;