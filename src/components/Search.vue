<template>
  <ion-grid>
      <form @submit="onSubmit">
          <ion-col>
              <ion-item>
                  <ion-label>Zipcode: </ion-label>
                  <ion-input :value="zip"
                  @input="zip = $event.target.value"
                  placeholdet="Enter ZipCode"
                  name="zip"></ion-input>
              </ion-item>
          </ion-col>
          <ion-col>
              <ion-button type="submit" color="primary" expand="block">Find</ion-button>
          </ion-col>
      </form>
  </ion-grid>
</template>

<script>
export default {
    name: "Search",
    data () {
        return {
            zip: ""
        }
    },
    methods: {
        onSubmit(e) {
            e.preventDefault();
            console.log(this.zip);
             // Zip Regex
            const isValidZip = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(this.zip);
            // checking valid zip
            // if(!isValidZip) {
            //     this.
            // }
      
        },
        showAlert () {
            return this.$ionic.alerController
            .create({
                header: "Enter ZipCode",
                message: "please enter a valid ZipCode",
                button: ["OK"]
            }).then(a => a.present())
        }
    }
}
</script>
