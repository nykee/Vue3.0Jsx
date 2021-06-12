/*Vue3 jsx语法测试*/
import {defineComponent, reactive} from 'vue';
import "../assets/center.scss"
import NavBar from "../component/NavBar";
import IntroHeader from "../component/IntroHeader";

const About = defineComponent({
    setup() {
        const state = reactive({count: 0});
        const handleClick = () => state.count++;
        return () => (
            <div >
                <IntroHeader Title="About" route="about"></IntroHeader>
                <h2>About</h2>
            </div>
        )
    }
});

export default About;