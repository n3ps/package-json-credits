<template>
  <Layout>
    <div v-if="p" class="wrapper py-8">
      <header class="header text-center">
        <h1 v-if="p.name" class="text-xl capitalize mb-8">{{ p.name }}</h1>

        <div v-if="p.author" class="mb-8">
          <div class="smallcaps">Written by</div>
          <div v-if="typeof p.author === 'object'">{{ p.author.name }}</div>
          <div v-else>{{ p.author }}</div>
        </div>
      </header>
      <main class="mb-32">
        <Section heading="Cast" :data="p.dependencies" v-if="p.dependencies" />
        <Section heading="Supporting Cast" :data="p.devDependencies" v-if="p.devDependencies" />
        <Section heading="Crew" :data="p.peerDependencies" v-if="p.peerDependencies" />
        <Section heading="Second Unit" :data="p.bundledDependencies" v-if="p.bundledDependencies" />
        <Section heading="Effects" :data="p.optionalDependencies" v-if="p.optionalDependencies" />
      </main>
      <footer class="text-xs text-center pb-32 px-8">
        <div class="flex flex-wrap justify-center mb-32">
          <img class="logo opacity-80" src="~/assets/dolby.jpeg" alt="Dolby" width="670" height="377" />
          <img class="logo opacity-80" src="~/assets/ssds.png" alt="SSDS" width="200" height="164" />
          <img class="logo opacity-80" src="~/assets/mpaa.jpg" alt="MPAA" width="500" height="281" />
        </div>
        <p class="mb-4">This project &copy; 2020 Francis Nepomuceno</p>
        <p class="mb-4">All material is protected by {{ p.license }}. All rights reserved.</p>
        <p
          class="mb-4 max-w-xl mx-auto"
        >The persons and events in this motion picture are fictitious. Any similarity to actual
         persons or events is unintentional. This motion picture is protected under the laws
         of Canada and other countries. Unauthorized duplication, distribution or
         exhibition may result in civil liability and criminal prosecution.</p>
      </footer>
    </div>
    <form
      v-else
      class="h-screen text-center flex flex-col justify-center items-center px-4"
      @submit="handleSubmit"
    >
      <p class="mb-4 md:text-2xl">Turn any <code>package.json</code> into movie credits!</p>
      <p class="m-2 md:text-2xl">Paste the GitHub URL of an npm-based project:</p>
      <input
        class="md:text-2xl px-3 py-2 mb-2 w-full max-w-600 rounded text-black"
        placeholder="https://github.com/{user}/{project}"
        v-model="url"
      />
      <button class="mb-8 md:text-2xl" type="submit">Submit</button>

      <p>Or try some examples:
        <a @click="populate('https://github.com/Microsoft/vscode')">VSCode</a>,
        <a @click="populate('https://github.com/webpack/webpack')">Webpack</a>,
        <a @click="populate('https://github.com/vuejs/vue')">Vue</a>,
        <a @click="populate('https://github.com/eslint/eslint')">ESLint</a>,
        <a @click="populate('https://github.com/expressjs/express')">Express</a>,
        <a @click="populate('https://github.com/cypress-io/cypress')">Cypress</a>
      </p>
    </form>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Welcome'
  },
  data() {
    return {
      url: '',
      p: null
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();

      if (this.url.includes('raw.githubusercontent.com'))  {
        return this.getJson(this.url)
      }

      try {
        const repo = new URL(this.url).pathname.split('/').slice(1,3).join('/')
        const newUrl = `https://raw.githubusercontent.com/${repo}/master/package.json`
        this.getJson(newUrl)

      } catch (e) {
        // gulp
      }
    },
    async getJson (url) {
      this.p = await fetch(url).then(r => r.json())
    },
    populate (str) {
      this.url = str
    }
  }
};
</script>
