<template>
    <div>
        <Head>
            <Title>Alfajiri Sales | {{ product.title }}</Title>
            <Meta name="description" :content="product.description"></Meta>
        </Head>
        <product-detail :product="product"></product-detail>
    </div>
</template>

<script setup>
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    // fetch the product
    const { data: product } = await useFetch(uri)

    if(!product.value){
        throw createError({ statusCode: 404, statusMessage: 'Product not found.', fatal: true })
    }

    definePageMeta({
        layout: 'products'
    })

</script>

<style scoped>

</style>