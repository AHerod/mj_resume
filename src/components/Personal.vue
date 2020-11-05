<template>
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">

        <ClientOnly>
            <div class="w-100" v-for="edge in $static.personal.edges">
                <h1 class="mb-0" v-scroll-reveal.reset>
                    Martyna
                    <span class="text-primary">Jońca</span>
                </h1>
                <div class="subheading mb-5">
                    Wroclaw tel. {{ edge.node.phone }}
                    <a href="mailto:name@email.com">{{ edge.node.email }}</a>
                </div>
                <p class="lead mb-5" v-scroll-reveal.reset>
                    {{ edge.node.bio }}
                </p>

                <div class="social-icons">
                    <a :href="edge.node.linkedin_url" class="shadow" target="_blank" rel="noopener noreferrer"
                       aria-label="LinkedIn Profile">
                        <font-awesome :icon="['fab', 'linkedin']"/>
                    </a>
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
email
bio
linkedin_url
}
}
}
}
</static-query>

<style lang="scss" scoped>
.social-icons a {
    cursor: pointer;
    display: inline-block;
    height: 3.5rem;
    width: 3.5rem;
    background-color: var(--secondary);
    color: #fff !important;
    border-radius: 100%;
    text-align: center;
    font-size: 1.5rem;
    line-height: 3.5rem;
    margin-right: 1rem;

    @media (max-width: 380px) {
        margin-right: 0.5rem;
    }

    @media (max-width: 350px) {
        margin-right: 0.2rem;
    }
}

.social-icons a:last-child {
    margin-right: 0;
}

.social-icons a:hover {
    background-color: var(--primary);
}
</style>
