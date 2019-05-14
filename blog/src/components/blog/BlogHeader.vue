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
    
}
</script>

<style lang='less' scoped>
    nav{
    padding: 30px 0;box-sizing: border-box; text-align: center;font-size: 16px;background: #2e3238;
        a{color: #666;margin:0 10px;padding: 0 5px;}
        a:hover{color: #1695DE;transition: all 0.3s ease;}
    }
    
    .router-link-active{color: #1695DE;border-bottom: 1px solid #1695DE;transition: all 0.3s ease; padding-bottom: 10px;}
</style>

