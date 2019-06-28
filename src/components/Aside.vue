<template>
    <div class="ve-aside" :class="classAside">
        <div class="logo"><i class="fab fa-penny-arcade"></i></div>
        <el-menu :collapse="fold"
                 background-color="#20222A" text-color="#ccc" active-text-color="#ffd04b">
            <el-submenu index="1">
                <template slot="title"><i class="fas fa-home fa-fw"></i>
                    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
                        <span v-show="!fold">{{ $t("aside.homepage") }}</span>
                    </transition>
                </template>
                <el-menu-item index="1-1">
                    {{$t('aside.homepage')}}1
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        name: "Aside",
        data(){
            return{
                hide:false,//是否隐藏
            }
        },
        computed:{
            fold(){//是否折叠
                return this.$store.state.fold;
            },
            classAside(){
                return {
                    isFold:this.fold,
                }
            }
        },
    }
</script>

<style lang="scss">
    .isFold{
        width: 64px!important;
    }
    .ve-aside{
        @include flex(flex-start,stretch);
        flex-flow: column;
        flex: none;
        height: 100%;
        width: 220px;
        background-color: #20222A;
        transition: width 2s;
        .logo{
            @include flex(center);
            height: 50px;
            font-size: 26px;
            color: #eee;
            border-bottom: 1px rgba(0,0,0,.2) solid;
        }
        .el-menu{
            flex: 1;
            border-right: none;
            i.fas{
                color: #ccc;
                margin-right: 10px;
            }
        }

    }
</style>