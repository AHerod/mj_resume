<template>
    <section class="resume-section p-3 p-lg-5 d-flex" id="contact">
        <ClientOnly>
            <div class="w-100">
                <h2 class="mb-4 mb-md-5">Pozostańmy w kontakcie</h2>
                <div class="w-100 resume-item d-flex flex-column flex-md-row justify-content-around mb-5">
                    <b-form @submit="onSubmit"
                            name="contact"
                            method="post"
                            action="/success/"
                            data-netlify="true"
                            data-netlify-honeypot="bot-field"
                            class="shadow p-4 mr-md-3"
                            v-scroll-reveal.reset
                    >

                        <input type="hidden" name="form-name" value="contact"/>
                        <p hidden>
                            <label>
                                <input name="bot-field"/>
                            </label>
                        </p>

                        <b-form-group>
                            <div class="sender-info">
                                <div>
                                    <label for="name" class="label">Imię</label>
                                    <input type="text" name="name" class="form-control" v-model="formData.name"/>
                                </div>
                                <div>
                                    <label for="email">Email</label>
                                    <input type="email" name="email" class="form-control" v-model="formData.email"/>
                                </div>
                            </div>

                            <div class="message-wrapper">
                                <label for="message">Wiadomość</label>
                                <textarea name="message" class="form-control" v-model="formData.message"></textarea>
                            </div>

                        </b-form-group>

                        <button type="submit" class="btn btn-primary w-50 float-right">Wyślij</button>
                    </b-form>
                    <div class="d-flex flex-column mt-5 ml-md-3" v-scroll-reveal.reset>
                        <h4> zostaw wiadomość lub zadzwoń </h4>
                        <h2 class="text-primary" v-for="edge in $static.personal.edges"> {{ edge.node.phone }}</h2>
                    </div>
                </div>
            </div>
        </ClientOnly>

    </section>
</template>

<static-query>
query {
personal: allPersonal {
edges {
node {
phone
}
}
}
}
</static-query>

<script>
export default {
    data() {
        return {
            formData: {},
        }
    },

    methods: {
        encode(data) {
            return Object.keys(data)
                .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
                .join('&')
        },
        onSubmit(e) {
            fetch('/', {
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                body: this.encode({
                    'form-name': e.target.getAttribute('name'),
                    ...this.formData,
                }),
            })
                .then(() => this.$router.push('/success'))
                .catch(error => alert(error))
        }
    }
}

</script>

<style lang="scss" scoped>
form {
    width: 100%;
    height: fit-content;
    @media screen and (min-width: 768px) {
        max-width: 50%;
    }
}
</style>
