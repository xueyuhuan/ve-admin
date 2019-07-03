<template>
    <div class="info">
        <el-card>
            <el-breadcrumb separator="/">
                <el-breadcrumb-item to="/">主页</el-breadcrumb-item>
                <el-breadcrumb-item>设置</el-breadcrumb-item>
                <el-breadcrumb-item>个人设置</el-breadcrumb-item>
                <el-breadcrumb-item>基本资料</el-breadcrumb-item>
            </el-breadcrumb>
        </el-card>
        <el-card>
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="用户类型">
                    <el-select v-model="form.region" placeholder="">
                        <el-option label="区域一" value="shanghai"></el-option>
                        <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="form.resource">
                        <el-radio label="男"></el-radio>
                        <el-radio label="女"></el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="手机">
                    <el-col :span="16">
                        <el-input v-model="form.name" disabled></el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-button>更改</el-button>
                    </el-col>
                </el-form-item>
                <el-form-item label="邮箱">
                    <el-col :span="16">
                        <el-input v-model="form.name" disabled></el-input>
                    </el-col>
                    <el-col :span="8">
                        <el-button>更改</el-button>
                    </el-col>
                </el-form-item>
                <el-form-item label="备注">
                    <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit">确认修改</el-button>
                    <el-button>重新填写</el-button>
                </el-form-item>
            </el-form>
        </el-card>
    </div>
</template>

<script>
    export default {
        name: "info",
        data() {
            return {
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                }
            }
        },
        methods: {
            onSubmit() {
                console.log('submit!');
            }
        }
    }
</script>

<style lang="scss">
    .info{
        .el-form{
            max-width: 600px;
            .el-col{
                margin: 0;
                .el-button{
                    margin-left: 20px;
                }
            }
        }
        .el-select{
            display: block;
        }
    }
</style>