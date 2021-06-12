/*Vue3 jsx语法测试*/
import {defineComponent, reactive} from 'vue';
import IntroHeader from '../component/IntroHeader'


const Index = defineComponent({
    setup() {
        const state = reactive({count: 0});
        const handleClick = () => state.count++;
        return () => (
            <div >
                <IntroHeader Title="Nykee" route="index"></IntroHeader>
                <h2>Index</h2>
            </div>
        )
    }
});

export default Index;