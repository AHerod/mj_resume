<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top d-flex justify-content-center" id="sideNav">
        <div v-on:click.prevent="$scrollTo('#about')" class="navbar-brand">
            <span class="d-lg-none d-inline-block">Martyna Jońca</span>
            <span class="d-lg-none d-inline-block ml-2">Marketing Specialist</span>
            <span class="d-none d-lg-block">
        <g-image v-for="edge in $static.personal.edges"
                 alt="Image of Loke"
                 :src="edge.node.profile_photo"
                 class="img-fluid img-profile rounded-circle mx-auto mb-2 shadow"
                 quality="100"
        />
            </span>
        </div>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" v-on:click.prevent="$scrollTo('#about')">O mnie</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-on:click.prevent="$scrollTo('#experience')">Doświadczenie</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-on:click.prevent="$scrollTo('#education')">Wykształcenie</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-on:click.prevent="$scrollTo('#skills')">Umiejętności</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-on:click.prevent="$scrollTo('#interests')">Pasje</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" v-on:click.prevent="$scrollTo('#contact')">Kontakt</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<static-query>
query {
personal: allPersonal {
edges {
node {
profile_photo
}
}
}
}
</static-query>

<style scoped lang="scss">
.navbar-brand,
.nav-item {
    cursor: pointer;

    span {
        font-family: 'Oswald', sans-serif;
        font-size: 1rem;

        &:first-child {
            text-transform: uppercase;
        }

        &:nth-child(2) {
            color: rgba(255, 255, 255, .5);
        }
    }
}

#sideNav .navbar-nav .nav-item .nav-link {
    font-weight: 800;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
}

#sideNav .navbar-toggler:focus {
    outline-color: #d48a6e;
}

@media (min-width: 992px) {
    #sideNav {
        text-align: center;
        position: fixed;
        top: 0;
        left: 0;
        flex-direction: column;
        width: 17rem;
        height: 100vh;
    }
    #sideNav .navbar-brand {
        display: flex;
        margin: auto auto 0;
        padding: 0.5rem;
    }
    #sideNav .navbar-brand .img-profile {
        width: 10rem;
        height: 10rem;
        object-fit: cover;
        border: 0.5rem solid rgba(255, 255, 255, 0.2);
    }
    #sideNav .navbar-collapse {
        display: flex;
        align-items: flex-start;
        flex-grow: 0;
        width: 100%;
        margin-bottom: auto;
    }
    #sideNav .navbar-collapse .navbar-nav {
        flex-direction: column;
        width: 100%;
    }
    #sideNav .navbar-collapse .navbar-nav .nav-item {
        display: block;
    }
    #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
        display: block;
    }
}
</style>
