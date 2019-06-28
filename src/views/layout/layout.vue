<template>
    <div class="ve-layout">
        <Aside></Aside>
        <div class="main">
            <Header></Header>
        </div>
    </div>
</template>

<script>
    import Aside from "../../components/Aside";
    import Header from "../../components/Header";
    export default {
        name: "layout",
        components: {Header, Aside}
    }
</script>

<style lang="scss">
    .ve-layout{
        height: 100%;
        @include flex(flex-start,flex-start);
        .main{
            flex: 1;
        }
    }
</style>