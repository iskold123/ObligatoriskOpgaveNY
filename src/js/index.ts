new Vue({
    // TypeScript compiler complains about Vue because the CDN link to Vue is in the html file.
    // Before the application runs this TypeScript file will be compiled into bundle.js
    // which is included at the bottom of the html file.
    el: "#app",
    data: {
        input: "",
        output: "",
        text: ""
    },
    methods: {
        stringToUpper() {
            console.log("input " + this.input)
            if (this.input == ""){
                this.output = "no input."
            }
            else{
                console.log(this.text)
                "toUpperCase"; console.log("toUpperCase")
                this.output = this.input.toUpperCase()
            }
        },

        stringToLower(){
            console.log("input " + this.input)
            if (this.input == ""){
                this.output = "no input."
            }
            else{
                console.log(this.text)
                "toLowerCase"; console.log("toLowerCase")
                this.output = this.input.toLowerCase()
                }
            }
        }
    }
})