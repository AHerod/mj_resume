<template>
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="contact">
        <h1>Porozmawiajmy</h1>
        <b-form @submit="onSubmit"
            name="contact"
            method="post"
            action="/success/"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
        >

            <input type="hidden" name="form-name" value="contact"/>
            <p hidden>
                <label>
                    Don’t fill this out: <input name="bot-field"/>
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

            <button type="submit" class="btn btn-primary">Wyślij</button>
        </b-form>
    </section>
</template>

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
