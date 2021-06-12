import {defineComponent, reactive} from 'vue';
import "../assets/NavBar.scss"

const NavBar = defineComponent({
    setup() {
        const state = reactive({count: 0});
        return () => (
            <>
                <div className="menu-box">
                    <div default-active="activeIndex" className="menu" mode="horizontal"
                             onSelect="handleSelect">
                        <div className="menu-link">

                            <router-link to="/">首页</router-link>
                        </div>
                        <div index="2" className="menu-link">
                            <router-link to="/Blog">博客</router-link>
                        </div>
                        <div index="3" className="menu-link">
                            <router-link to="/Photo">随拍</router-link>
                        </div>
                        <div index="4" className="menu-link">
                            <router-link to="/Comment">留言</router-link>
                        </div>
                        <div index="5" className="menu-link">
                            <router-link to="/Friends">友链</router-link>
                        </div>
                        <div index="6" className="menu-link">
                            <router-link to="/Phrase">简语</router-link>
                        </div>
                        <div index="7" className="menu-link">
                            <router-link to="/About">关于</router-link>
                        </div>
                    </div>
                </div>

            </>
        )
    }
});

export default NavBar;