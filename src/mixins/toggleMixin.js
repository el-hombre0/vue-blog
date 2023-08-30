export default {
    props: {
        show: {
            type: Boolean,
            default: false,
        }
    },
    methods: {
        hideModalbox() {
            this.$emit("update:show", false);
          },
    },
    mounted(){
        console.log('mixin mounted')
    },
}