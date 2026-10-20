// Downloads site media from Runware at build time into public/media.
import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const IMG = "https://im.runware.ai/image/os/";
const VID = "https://vm.runware.ai/video/os/";
const media = {
  "hero-owner-van.jpg": IMG + "a04d20/ws/3/ii/e0efbbc8-86c7-4191-b631-48d8f75f84f7.jpg",
  "resin.jpg": IMG + "a09dlim3/ws/3/ii/6bc52d92-0b46-45ae-aae3-ff8983289f67.jpg",
  "biohazard.jpg": IMG + "a06dlim3/ws/3/ii/4ce50c76-a263-43fb-b538-7fa98d19b2f3.jpg",
  "seg-first.jpg": IMG + "a01d21/ws/3/ii/049491f4-1d4b-4386-a3a1-9fda04a36819.jpg",
  "seg-shopper.jpg": IMG + "a07dlim3/ws/3/ii/13504231-0a53-46c5-9e01-b84331b0bb1d.jpg",
  "seg-owner.jpg": IMG + "a06dlim3/ws/3/ii/eb85df70-c3e7-4840-9e3e-364f4cc1b896.jpg",
  "value-handoff.jpg": IMG + "a02d21/ws/3/ii/dc40bcfd-f0f6-4a98-91fd-46fed693e149.jpg",
  "how-plan.jpg": IMG + "a01d21/ws/3/ii/04b104bf-11e8-4dd7-9db9-1debc5b98064.jpg",
  "hero-loop.mp4": VID + "a01d21/ws/5/vi/e9f271b5-7ec8-4b38-866c-028866dc4ccb.mp4",
  "resin-loop.mp4": VID + "a10dlim3/ws/5/vi/29f3a963-bd49-4a0a-87a9-aa1f4a79b494.mp4",
};

mkdirSync("public/media", { recursive: true });
for (const [name, url] of Object.entries(media)) {
  const out = `public/media/${name}`;
  if (existsSync(out)) continue;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    writeFileSync(out, Buffer.from(await res.arrayBuffer()));
    console.log("media:", name);
  } catch (e) {
    if (name.endsWith(".mp4")) console.warn("media: skipped", name, e.message);
    else throw new Error(`media: failed ${name}: ${e.message}`);
  }
}
