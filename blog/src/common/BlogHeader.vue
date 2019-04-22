<template>
    <nav>
        <ul>
            <li>
                <router-link to='/' exact>博客</router-link>
                 <router-link to='/add' exact>写博客</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name:"blog-header"
}
</script>

<style  scoped>
    .router-link-active{color: red;}
</style>

