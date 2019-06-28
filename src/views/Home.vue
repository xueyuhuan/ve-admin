<template>
    <layout>
<!--        <Header></Header>-->
<!--        <theme-picker></theme-picker>-->
<!--        <el-button type="primary">{{ $t("homepage") }}</el-button>-->
    </layout>
</template>

<script>
// @ is an alias to /src
import ThemePicker from "../components/ThemePicker";
import Header from "../components/Header";
import Layout from "./layout/layout";

export default {
  name: 'home',
  components: {
      Layout,
      Header,
      ThemePicker,
  },
    created() {
        console.log(this.$i18n.locale)
    }
}
</script>
