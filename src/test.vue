<template>
        <form class="form-inline" >
            <div class="form-row col-md-6" v-for="address in addressList" :key="address.id">
                <b-form-group>
                    <b-form-input class="form-control mb-2 mr-sm-2" id="address.id" v-model="address.countryName + ', ' + address.city + ', ' + address.streetAddress + ', ' + address.zip" />
                </b-form-group>
                <div class="btn-group mr-2" role="group">
                    <button type="button" class="btn btn-secondary mb-2">Edit</button>
                    <button type="button" class="btn btn-secondary mb-2">Delete</button>
                </div>
            </div>
        </form>
</template>

<script>
    data() {
        return {
            addressList: [],
        }
    },

    methods: {
        async initData() {
            await this.loadAddressList();
        },

        async loadAddressList() {
            this.addressList = await accountService.getAddressList();
        },
    }
}
</script>