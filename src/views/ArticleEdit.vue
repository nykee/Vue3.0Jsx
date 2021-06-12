<template>
    <div v-if="!state.isEdit">
        <div>
            文章标题：{{state.article.title}}
        </div>
        <div>
            {{state.article.content}}
        </div>
        <div>
            {{state.article.description}}
        </div>
        <div>
            阅读数：{{state.article.readedCount}}
        </div>
    </div>
    <div v-else>
        <el-form ref="form" :model="state.article" label-width="80px">
            <el-form-item label="文章标题:">
                <el-input v-model="state.article.title"></el-input>
            </el-form-item>
            <el-form-item label="文章内容:">
                <el-input v-model="state.article.content"></el-input>
            </el-form-item>
            <el-form-item label="文章描述:">
                <el-input v-model="state.article.description"></el-input>
            </el-form-item>
            <el-form-item >
                <el-button
                        @click="cancel"
                        >
                    取消
                </el-button>
                <el-button
                        @click="submit"
                        type="primary"
                        >
                    提交
                </el-button>
            </el-form-item>
        </el-form>
    </div>

</template>

<script>
    import {GetArticleById,UpdateAtricle} from "../api/Articles";
    import { ElMessage } from 'element-plus'
    import {reactive,onMounted,getCurrentInstance,inject} from "vue"
    import {
        useRoute
    } from "vue-router";
    export default {
        setup(){
            const test = inject('$test');
            const { ctx } = getCurrentInstance();
            const route = useRoute();
            const state = reactive({
                article: {},
                isEdit:false
            });
            const goToList =()=>{
                ctx.$router.push(
                    {
                        path:"/articles"
                    }
                )
            };
            const cancel=()=>{
                goToList();
            };

            const submit = ()=>{
                state.article.tag = JSON.stringify(state.article.tag);
                UpdateAtricle(state.article).then((res)=>{
                    console.log(res);
                    if(res.code ===200){
                        ElMessage.success({
                            message: res.desc,
                            type: 'success'
                        });
                        goToList();
                    }
                }).catch((err)=>{
                    console.log(err);
                })
            };
            const getById = ()=>{
                GetArticleById({id:route.query.id}).then((res)=>{
                    if(typeof res.data.tag !=="object"){
                        res.data.tag = JSON.parse(res.data.tag);
                    }
                    state.article = res.data;
                }).catch((err)=>{
                    console.log(err);
                })
            };

            onMounted(()=>{
                test();
                state.isEdit = route.query.action === "edit";
                getById();
            });
            return {
                state,
                goToList,
                cancel,
                submit,
                getById,
                test

            }
        },

    }
</script>
<style>

</style>