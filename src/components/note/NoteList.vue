<template>
    <div>
        <template v-for="(note, idx) in notes">
            <note-item :note="note"></note-item>
        </template>
    </div>
</template>

<script>
    import NoteItem from '@com/note/NoteItem'
    export default {
        props: {
            notes: Array
        },
        data () {
            return {

            }
        },
        components: {
            NoteItem
        }
    }
</script>

<style lang="stylus" scoped>

</style>