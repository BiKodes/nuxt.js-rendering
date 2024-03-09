export default defineEventHandler(async (event) => {
    // handle query params
    // const { name } = useQuery(event)

    // handle post data
    // const { age } = await useQuery(event)

    // api call with private key
    const { data } = await $fetch('')

    return data
})