<template>
    <div class="ve-header">
        <ul class="left">
            <li><i class="fold" :class="{'el-icon-s-unfold':fold,'el-icon-s-fold':!fold}" @click="toggleFold()"></i></li>
            <li><a href="https://cn.vuejs.org/" target="_blank"><i class="fab fa-vuejs"></i></a></li>
        </ul>
        <ul class="right">
            <li class="hidden-xs-only"><i class="far fa-bell"></i></li>
            <li class="hidden-xs-only"><i class="fas" :class="[fullscreen?'fa-compress-arrows-alt':'fa-compress']" @click="handleFullScreen()"></i></li>
            <li><el-dropdown>
                <span class="lang">hello<i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-t="'header.data'"></el-dropdown-item>
                    <el-dropdown-item v-t="'header.password'"></el-dropdown-item>
                    <el-dropdown-item divided v-t="'header.logout'"></el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown></li>
            <li><el-dropdown @command="handleCommand">
                <span class="lang">{{lang}}<i class="el-icon-arrow-down el-icon--right"></i></span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item v-for="(i,index) in langList" :key="index" :command="i">{{i.name}}</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown></li>
            <li class="hidden-xs-only"><theme-picker></theme-picker></li>
        </ul>
    </div>
</template>

<script>
    import ThemePicker from "./ThemePicker";
    export default {
        name: "Header",
        components: {ThemePicker},
        data(){
            return{
                langList:[
                    {name:'中文',value:'zh'},
                    {name:'English',value:'en'}
                ],
                fold:false,
                fullscreen: false,
            }
        },
        computed:{
            lang(){
                return this.$i18n.locale==='zh'?'中文':'English'
            }
        },
        methods:{
            toggleFold(){
                this.fold=!this.fold;
                this.$store.commit('setData',{
                    name:'fold',
                    value:this.fold
                })
            },
            handleFullScreen(){
                let element = document.documentElement;
                if (this.fullscreen) {
                    if (document.exitFullscreen) {
                        document.exitFullscreen();
                    } else if (document.webkitCancelFullScreen) {
                        document.webkitCancelFullScreen();
                    } else if (document.mozCancelFullScreen) {
                        document.mozCancelFullScreen();
                    } else if (document.msExitFullscreen) {
                        document.msExitFullscreen();
                    }
                } else {
                    if (element.requestFullscreen) {
                        element.requestFullscreen();
                    } else if (element.webkitRequestFullScreen) {
                        element.webkitRequestFullScreen();
                    } else if (element.mozRequestFullScreen) {
                        element.mozRequestFullScreen();
                    } else if (element.msRequestFullscreen) {
                        // IE11
                        element.msRequestFullscreen();
                    }
                }
                this.fullscreen = !this.fullscreen;
            },
            handleCommand(command){
                this.$i18n.locale=command.value;
            }
        }
    }
</script>

<style lang="scss">
    .ve-header{
        @include flex(space-between);
        height: 50px;
        background-color: #fff;
        box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
        padding: 0 30px;
        .left{
            @include flex();
            li{
                cursor: pointer;
                margin-right: 30px;
                i{
                    font-size: 16px;
                }
            }

        }
        .right{
            @include flex();
            li{
                cursor: pointer;
                margin-left: 30px;
            }
        }

    }
</style>