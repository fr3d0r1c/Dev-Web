export default {
    data : () => ({
        count : 0,
    }),
    props : {
        'bkgcss': String,
        'my_message': String,
    },
    template: `
    <div style="border:1px solid black;" :style="{background:bkgcss}"
    @mouseover="incrementCounter">
        Vous êtes passez {{count}} fois par ici.
        msg:{{my_message}}
    </div>`,
    methods : {
        incrementCounter : function(e){
            this.count++;
            this.$emit('update_counter',this._uid)
        }
    },
}