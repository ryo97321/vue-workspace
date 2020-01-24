var obj = {
    foo: 'bar'
}

Object.freeze(obj)

new Vue({
    el: '#app',
    data: obj,
    created: function() {
        console.log('foo')
    }
})