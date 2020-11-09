<template>
    <section class="resume-section p-3 p-lg-5 d-flex flex-column align-items-center" id="about">

        <ClientOnly>
            <div class="w-100" v-for="edge in $static.personal.edges">
                <h1 class="mb-0" v-scroll-reveal.reset>
                    Martyna
                    <span class="text-primary">Jońca</span>
                </h1>
                <div class="subheading mb-5 d-flex align-items-center">
                    Wroclaw tel. {{ edge.node.phone }}
                    <a href="mailto:name@email.com" class="px-3">{{ edge.node.email }}</a>
                </div>
                <p class="lead mb-5" v-scroll-reveal.reset>
                    {{ edge.node.bio }}
                </p>
            </div>

            <div class="w-100">
                <div class="resume-item d-flex flex-column flex-md-row justify-content-between mb-5 mt-5">
                    <div class="resume-content d-flex justify-content-center flex-wrap skills"
                         v-for="edge in $static.skills.edges">
                        <div class="skill subheading mb-3 shadow" v-for="skill in edge.node.main_skills"
                             v-scroll-reveal.reset>{{
                                skill
                            }}
                        </div>
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
email
bio
linkedin_url
}
}
}

skills: allSkills {
edges {
node {
main_skills
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
