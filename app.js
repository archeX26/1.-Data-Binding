const app = Vue.createApp({
    data(){
        return{
            myName:"Giorgi",
            myAge:20,
            myImg: "https://images.unsplash.com/photo-1526547541286-73a7aaa08f2a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
        };
    },
    methods:{
        randomNumber(){
            const yourNumber = Math.random();
            return yourNumber;
        }

    }
});
app.mount('#assignment');