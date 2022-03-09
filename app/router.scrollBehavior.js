export default function (to, from, savedPosition) {
    if (to.hash) {
        return {
            x: 0, // document.querySelector(to.hash).offsetTop + window.innerHeight,
            behavior: 'smooth'
        }
    }
    return { x: 0, y: 0, behavior: 'smooth' }
}
