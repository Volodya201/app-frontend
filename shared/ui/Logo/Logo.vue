<template>
    <div class="logo">
        <router-link to="/">
            <!-- <svg class="logo-svg" width="179" height="70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="V" d="M5 15L25 55" stroke="black" stroke-width="10" stroke-linecap="round"/>
                <path class="V" d="M45 15L25 55" stroke="black" stroke-width="10" stroke-linecap="round"/>

                <path class="o" d="M58.167 31C41.9443 31 41.9443 55 58.167 55" stroke="black" stroke-width="10" stroke-linecap="round"/>
                <path class="o" d="M57.9443 55C74.167 55 74.167 31 57.9443 31" stroke="black" stroke-width="10" stroke-linecap="round"/>

                <path class="O" d="M94 15C109.5 15 113.5 53.5 94 55" stroke="black" stroke-width="10" stroke-linecap="round"/>
                <path class="O" d="M94.1676 55C78.6676 55 74.6676 16.5 94.1676 15" stroke="black" stroke-width="10" stroke-linecap="round"/>

                <path class="n1" d="M119 55V31" stroke="black" stroke-width="10" stroke-linecap="round"/>
                <path class="n2" d="M120 40C129 29.5 142.5 29.2 142.5 40C142.5 50.8 142.5 52.6667 142.5 55" stroke="black" stroke-width="10" stroke-linecap="round"/>

                <path class="e1" d="M155 55V31" stroke="black" stroke-width="10" stroke-linecap="round"/>           
                <path class="e2" d="M155 31H171" stroke="black" stroke-width="10" stroke-linecap="round"/>
                <path class="e3" d="M155 43H165" stroke="black" stroke-width="8" stroke-linecap="round"/>
                <path class="e2" d="M155 55H171" stroke="black" stroke-width="10" stroke-linecap="round"/>
            
            </svg> -->

            <h1>Logo</h1>
        </router-link>
    </div>
</template>

<style scoped>

    .logo {
        float: left;
        line-height: 70px;
        height: 70px;
    }

    .logo-svg {
        width: 220px;
        height: 70px;
    }

    .logo-svg * {
        animation: dash 0.7s linear forwards;
    }

    path.V {
        stroke-dasharray: 43;
        stroke-dashoffset: 43;
    }

    path.o {
        stroke-dasharray: 38;
        stroke-dashoffset: 38;
    }

    path.O {
        stroke-dasharray: 50;
        stroke-dashoffset: 50;
    }

    path.n1 {
        stroke-dasharray: 28;
        stroke-dashoffset: 28;
    }

    path.n2 {
        stroke-dasharray: 48;
        stroke-dashoffset: 48;
    }

    path.e1 {
        stroke-dasharray: 25;
        stroke-dashoffset: 25;
    }

    path.e2 {
        stroke-dasharray: 15;
        stroke-dashoffset: 15;
    }

    path.e3 {
        stroke-dasharray: 10;
        stroke-dashoffset: 10;
    }

    @keyframes dash {
        from {
            
        }
        to {
            stroke-dashoffset: 0;
        }
    }
</style>