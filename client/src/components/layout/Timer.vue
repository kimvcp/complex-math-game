<template>
    <v-container fluid>
        <v-layout>
            <v-flex xs12 pa-3>
                <v-card>
                    <v-card-title class="secondary white--text font-weight-light display-2 text-uppercase justify-center">
                        {{timer}}
                    </v-card-title>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Timer',
    props: ['timer','state']
}
</script>