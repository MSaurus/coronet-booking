<template lang="pug">
    button(@click="clickButton") Click me
</template>

<script>
import Vue from 'vue'

// Connection opened
// $socket.addEventListener('open', function (event) {
//     socket.send('Hello Server!');
// });


export default Vue.extend({
    methods: {
        clickButton: function() {
            console.log('Sending...')
            this.$socket.send('This is my message!');
            console.log('Sent')
            // Listen for messages
            console.log('Listening for message...')
            this.$socket.addEventListener('message', function (event) {
                console.log('Message from server', event.data);
            });
        }
    }
})
</script>

