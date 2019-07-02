<template>
    <div class="ve-layout">
        <Aside></Aside>
        <div class="main">
            <Header :class="{to64:fold,to220:!fold&&n!==1}"></Header>
            <div class="content">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    import Aside from "../../components/Aside";
    import Header from "../../components/Header";
    export default {
        name: "layout",
        components: {Header, Aside},
        data(){
            return{
                n:null
            }
        },
        computed:{
            fold(){//是否折叠
                return this.$store.state.fold;
            }
        },
        watch:{
            fold(){
                this.n++;
            }
        },
        created() {
            this.n=1;
        },
    }
</script>

<style lang="scss">
    .ve-layout{
        height: 100%;
        @include flex(flex-start,flex-start);
        .main{
            position: relative;
            flex: 1;
            height: 100%;
            overflow-y: auto;
            padding-top: 50px;
            .ve-header{
                position: fixed;
                top: 0;
                left: 220px;right: 0;
                z-index: 1;
                &.to64{
                    animation: to64 2s both;
                }
                &.to220{
                    animation: to220 2s both;
                }
            }
            .content{
                padding: 15px;
                .el-card{
                    height: 100%;
                    box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
                    header{
                        @include flex(space-between);
                        i{
                            color: #666;
                            cursor: pointer;
                        }
                    }
                }
            }
        }
    }
    @keyframes to220 {
        from{left: 64px}
        to{left: 220px}
    }
    @keyframes to64 {
        from{left: 220px}
        to{left: 64px}
    }
</style>