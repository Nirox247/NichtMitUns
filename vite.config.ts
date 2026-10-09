import path from "path"
import fs from "fs"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

// Die Bilder sind nicht im Git-Repo gespeichert (Binaerdateien). Sie werden
// beim ersten `npm run dev` / `npm run build` automatisch nach public/img/
// heruntergeladen. Dafuer ist einmalig eine Internetverbindung noetig.
const IMAGES: Record<string, string> = {
  "event.jpg": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F3a805c825c38c42f04a9693110441c98f74b7a3c3d447354492431564ec5fa02?filename=event.jpg&sig=R7Zy0hIJnK-2iC-12pBfE5mpM3QeFbaO5k6arGBinnk=&t=o",
  "handschlag-bg.jpg": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2Febcb0140395f5841547b1d91a377b6e5b221f7b06a62e179bf021759253ba94d?filename=handschlag-bg.jpg&sig=Q_f5QZu8K3HeqLzMJCzHqTmFrZpaeuA7G-4wnbv-t_o=&t=o",
  "handschlag.png": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F3f846d330966bb96c006467ab2e17802f60ae69a7d44d37362898d5cfa9441a1?filename=handschlag.png&sig=9jkTk8zxqlOvAVrYF4cUxNQuUpmSTmFVrwej8RlLq0s=&t=o",
  "handschlag.webp": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F1b2c5e2868bf04cdf6b8543c8a61e5cc94ce4ad3a565fcb8fac96e74d423a92b?filename=handschlag.webp&sig=_jg2qv_2YwREly8c40xPXYetMbWKUKrjIQAGM_evu-4=&t=o",
  "projekt.jpg": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F7d1bb001e37bfbe8dcacfd8dfa9d30f6036ea2d487fecdef2a7ee6e3b559c3a4?filename=projekt.jpg&sig=m-Yr8rW5g2OaV16TAAL8vHyCQoBOXrWyK7vpFjjmtpM=&t=o",
  "ron-williams.jpg": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F38f5f8d571a9a0e68cf1b2923da177369c04116e8dac988df7464b42b8f4a5f2?filename=ron-williams.jpg&sig=7BdqDuPxxhS9bCozziVPPrLY_rE3sfB8_OyGQFHBuO8=&t=o",
  "ehren-sebastian-roloff.webp": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F438dadfc5215e451a77e33821cb579f31f64e1b49d9de8810c63be3b3f3028a2?filename=ehren-sebastian-roloff.webp&sig=u1X0Phou4zQCPmkUYgDFvHiJ1rmuYOlpyup0kL89dSQ=&t=o",
  "ehren-uschi-glas.webp": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F686ccf5cf5fb0b94d41607edfa369fd5e268b85da4c4f212476bf38136d96bd8?filename=ehren-uschi-glas.webp&sig=aVsVylor8eUDCuNZ_ESkKwtZpgf-CCDSexauqojH9Zo=&t=o",
  "gruendung-alexander-wolfrum.webp": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F2fd77ad86527506f7473c6f4fd9c318582bc698859668685c0f872e8e9d1917b?filename=gruendung-alexander-wolfrum.webp&sig=JM93bdTMHNHWEpBaKO7UKBDb3euZV6ZnEO4H5Q8x0uU=&t=o",
  "gruendung-christian-ude.webp": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F82fdd6bad4c94b2b710afc5571e10790737fb0bb0de5264b320a67cc84cbf83c?filename=gruendung-christian-ude.webp&sig=MraSBuAaRLFxk2nG_K3A87ZJhibdw73GwX7kmHDQrSo=&t=o",
  "gruendung-marian-offman.webp": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F9a77458f6cf8d60e47ed5f21b131cc51597aab8a23d5307c10b30d20ab665260?filename=gruendung-marian-offman.webp&sig=uzdoCxZwNeYxmXCsAcNVMbW2C4yxbQgCeOzy2If8ahQ=&t=o",
  "gruendung-michael-dietmayr.webp": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F244201c757ac816272bf5f7996beb2baef0f8f6f92f8fc099ad8e91b7eb41e87?filename=gruendung-michael-dietmayr.webp&sig=f5IcV1FmBOgkg4kfqbj-rXWAsSNavscSESryFU7K7ao=&t=o",
  "gruendung-susanne-jell.webp": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F69a32d678d148c6a615aacb1e3b291ea83111a9c4a09fb5c21843909446593e2?filename=gruendung-susanne-jell.webp&sig=AyLBxdH114frtM-FReQC1FRfyQ1fWpR5ScS6jZAvFTU=&t=o",
  "vorstand-ali-kilic.webp": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F5dc3e283610fa04f61c86d1f4750551c3645aebdf26bfcab802a1ae97664c110?filename=vorstand-ali-kilic.webp&sig=FlYYbSNvfYnsLByof0iYxxfmLNlQufewfWpzLLrpWZU=&t=o",
  "vorstand-franziska-irl.webp": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F4ec27eb8b90df3cd6344298af73340c2c268ec50e542ed1255e5796eb32c6664?filename=vorstand-franziska-irl.webp&sig=j74_buoV8qbDpsENi0g-oocP62nEr2a4zEwYRcKITGg=&t=o",
  "vorstand-ron-williams.webp": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F45fb49528995cc9aaeeb0037d706bd29fdb63890c5396357692ded8e0363cada?filename=vorstand-ron-williams.webp&sig=ftxiM0otel53flC_w7bkN93FvvxVKvmqZFTz6C-79eY=&t=o",
  "vorstand-tobias-irl.webp": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2Fe5ed43ddc7d0d812b27f9cbb8a2f9ffb0458124307421b843494dac8526a0f80?filename=vorstand-tobias-irl.webp&sig=7njLYLPhvTJSEnjgSLS1J2EK9bmG85wTqP5ptVhwKr0=&t=o",
  "vorstand-viktor-worms.webp": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2Fb545425780d60054aa1f8f0705385c05a47bcb5b6a2b83be0ecaeb01f71f32e8?filename=vorstand-viktor-worms.webp&sig=lRxKmmcu9mcsQAyKeY7AOkCJjbwSYyFGmC2nobl-m9c=&t=o",
  "team.jpg": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2Fdd1694b4f71a631dc9ae72ed48dfa1ce14e98763e7130bb95fd9949f7fd5129d?filename=team.jpg&sig=TOhi1pVBoZmawKi_evC6nH7-bkP6sxsef6rnFQNhWZc=&t=o",
}

async function materializeImages(): Promise<void> {
  const dir = path.resolve(__dirname, "public/img")
  fs.mkdirSync(dir, { recursive: true })
  await Promise.all(
    Object.entries(IMAGES).map(async ([name, url]) => {
      const dest = path.join(dir, name)
      try {
        if (fs.existsSync(dest) && fs.statSync(dest).size > 0) return
        const res = await fetch(url, { signal: AbortSignal.timeout(60000) })
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()))
        console.log(`[img] ${name} heruntergeladen`)
      } catch (err) {
        console.warn(`[img] Warnung: ${name} konnte nicht geladen werden:`, err)
      }
    })
  )
}

// https://vite.dev/config/
export default defineConfig(async () => {
  await materializeImages()
  return {
    base: './',
    plugins: [react()],
    server: {
      port: 3000,
    },
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  }
});
