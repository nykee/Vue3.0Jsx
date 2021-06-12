/*Vue3 jsx语法测试*/
import {defineComponent, reactive,onMounted} from 'vue';
import {queryPhrases} from "../api/Phrase";
import IntroHeader from "../component/IntroHeader";

const Phrase = defineComponent({
    setup() {
        const state = reactive({phrases: []});
        const getPhrase= ()=>{
            queryPhrases().then((res)=>{
                console.log(res);
                state.phrases =res
            }).catch((err)=>{
                console.log(err);
            })
        };
        onMounted(()=>{
            getPhrase()
        });
        return () => (
            <div >
                <IntroHeader Title="Phrase" route="phrase"></IntroHeader>
                <h2>简语</h2>
                <ul>
                    {state.phrases.map(item=>{
                        return <li>{item.content}</li>
                    })}
                </ul>
            </div>
        )
    }
});

export default Phrase;