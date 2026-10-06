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
