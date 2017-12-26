<template>
    <transition name="dmymodal">     
        <div class="modal-mask" v-if="show" @click="hidemodal">
                <div class="modal-wrap" @click.stop>
                    <!-- 标题 -->
                    <div class="modal-title" v-if="titleshow">{{title}}</div>
                    <!-- 内容 -->
                    <div class="modal-content">{{content}}</div>
                    <!-- 按钮 -->
                    <div class="modal-btn">
                        <button type="button" @click="success">{{submitText}}</button>
                    </div>
                </div>
        </div>
    </transition>
</template>
<script>
    export default {
        data () {
            return {
                name: 'my-alert',
                show: false,
                titleshow: true,
                title: '',
                content: '',
                submitText: '确定'
            }
        },
        computed: {},
        mounted () {
        },
        methods: {
            success(){
                this.show = false
            },
            hidemodal(){
                this.show = false
            }
        }
    }
</script>

<style lang="scss">
.modal-mask{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: #000000, $alpha: 0.2);
}
.modal-wrap{
    width: 400px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);    
    background-color: #ffffff;
    border-radius: 6px;
}
.modal-title{
    text-align: center;
    color: #333333;
    font-size: 16px;
    border-bottom: 1px solid #eeeeee;
    line-height: 40px;
}
.modal-content{
    font-size: 14px;
    color: #333;
    padding: 10px;
    line-height: 1.8;
}
.modal-btn{
    text-align: right;
    padding: 10px;
    button{
        border: none;
        background-color: #2475e0;
        color: #ffffff;
        padding: 6px 10px;
        border-radius: 4px;
    }
}
</style>

