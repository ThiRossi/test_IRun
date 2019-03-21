var app = new Vue({
    el: '#app',
    data: {
      newSearchVille: '',
      newSearchCodeP:'',
      postes: [],
      search: false

  },
  methods: {
    searchVille: function () {
      this.$http.get(`https://datanova.legroupe.laposte.fr/api/records/1.0/search/?dataset=laposte_poincont&rows=10&refine.localite=`+this.newSearchVille   )
          .then(response => {
            // JSON responses are automatically parsed.
            this.postes = response.data.records
          })
          .catch(e => {
            this.errors.push(e)
          }),
      this.search = true
    },
    searchCodePostal: function () {
      this.$http.get(`https://datanova.legroupe.laposte.fr/api/records/1.0/search/?dataset=laposte_poincont&rows=10&refine.code_postal=`+this.newSearchCodeP   )
          .then(response => {
            // JSON responses are automatically parsed.
            this.postes = response.data.records
          })
          .catch(e => {
            this.errors.push(e)
          }),
      this.search = true
    },
  }
});
