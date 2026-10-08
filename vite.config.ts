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
  "vorstand-ron-williams.png": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2Fdd7bc43c7c0ed0f23f20db8edd604d17be61700a703347450648a671e5af3176?filename=vorstand-ron-williams.png&sig=VepoiNMNzcJLG5PLzQOsIB22I89xQ7Ej79_FtYhoKj8=&t=o",
  "vorstand-viktor-worms.png": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F9a82cdaf8443d148113e47f47c181fe9ca148040dedc8adf76bdae65691941fb?filename=vorstand-viktor-worms.png&sig=0PBfo974DNYhog4p_HI4fFeibviDFsjSS9l_RJ91KWs=&t=o",
  "vorstand-tobias-irl.png": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2Fd77fcb9046d3ff2ae42148d35ac265614a63dfb73c61a2532265162f9d1dcd53?filename=vorstand-tobias-irl.png&sig=nHa3Em6LgLd1Ks5Rs64w0MraO0zFv7LqNM4D-lanbqg=&t=o",
  "vorstand-ali-kilic.png": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2Fe59082c75cd84fb6c47dd1e3d73ba609784872c99afee587b96a794fe2e1cf73?filename=vorstand-ali-kilic.png&sig=ZyE8AZQNwEkCh-7ZAxkn7MMGIXzaVzHr3sxqztL7maM=&t=o",
  "vorstand-franziska-irl.png": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F288f07feb667c7b875b0b34b898d5dccf64cbe0c2fa7ffa5f9fb361c7dd36504?filename=vorstand-franziska-irl.png&sig=DrYE0L335736u2JOBxbgw40CBwK6lpww4N3ENP57cMM=&t=o",
  "gruendung-christian-ude.png": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F88d05b1b9a95a9be307ea5dace970ddfdef4aab3b924740863e340072750b91d?filename=gruendung-christian-ude.png&sig=PEkgXrCAeBRUQSU5iKPULI5B1sJawSdi7U2yC3Fe3Io=&t=o",
  "gruendung-susanne-jell.png": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2Fa2a3850fdc93d95a05b4926084f6768d5cd47ebca707713b41ec0a0672dab57b?filename=gruendung-susanne-jell.png&sig=LDsa4SBAX5o-q1FpIPdu8fdvBQztsdL8rjIFRfirGEc=&t=o",
  "gruendung-michael-dietmayr.png": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F64451ed1111109ff8f664bfe8290e6566d78873f80e96ecd72354bab5854b404?filename=gruendung-michael-dietmayr.png&sig=1FhYi6-XHGr9sWcZhg8VgptVqpTHwAlfAsWAoBLBzmg=&t=o",
  "gruendung-alexander-wolfrum.png": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2Faa194c126d1dfd51f721684ec0b389b83962ced677f49008c15e5baf310471f6?filename=gruendung-alexander-wolfrum.png&sig=i8z_45476Q6Zx7EWVbBdtwn8QDAJy3gMZEEwSEeMV20=&t=o",
  "gruendung-marian-offman.png": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F6831c6b4d9ecfa0db5fe467e4af88eb4d6ca5ed465b764c843cf0deff9a85438?filename=gruendung-marian-offman.png&sig=M2PCh-IVZH5c5spxVdzt6ccdXILTzGPSKsAy7qq120w=&t=o",
  "ehren-sebastian-roloff.png": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F662c890addf4e1ef15677867a4286d3f7a134a7b781de5685ca9985d0e7ab516?filename=ehren-sebastian-roloff.png&sig=JF0Dsh9arr6pxFu2_7ec5miZZS-s-sho2W9AaNhJWr0=&t=o",
  "ehren-uschi-glas.png": "https://www.kimi.com/apiv2-files/sign-obj/kimi-fs%2Ffiles%2Fblob%2F715fbcf8cd5453312c6bd961084ffd384870842524b80028ef4b2cd5ff839ff0?filename=ehren-uschi-glas.png&sig=r1OT_0aXa0gG98hgeD92_ZiB5ai35OJ7fbx96m0sJ6w=&t=o",
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
