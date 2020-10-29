<template>
    <section class="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div class="w-100">
            <div v-for="edge in $static.content.edges">
                <h2>{{ edge.node.title }}</h2>
            </div>
            <h1 class="mb-0">
                Martyna
                <span class="text-primary">Jońca</span>
            </h1>
            <div class="subheading mb-5">
                Wroclaw tel. (123) 456-7890 ·
                <a href="mailto:name@email.com">mjonca@email.com</a>
            </div>
            <p class="lead mb-5"
            >Data-driven Digital Marketing Specialist with 3+ years of experience specializing in inbound marketing.
                Drives traffic and boosts audience engagement with dynamic marketing strategies and campaigns.
            </p>

            <div class="social-icons">
                <a href="" target="_blank" rel="noopener noreferrer"
                   aria-label="LinkedIn Profile">
                    <font-awesome :icon="['fab', 'linkedin']"/>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer"
                   aria-label="Facebook Profile">
                    <font-awesome :icon="['fab', 'facebook']"/>
                </a>
            </div>
        </div>
    </section>
</template>

<static-query>
query {
  content: allContent {
    edges {
      node {
        title
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
