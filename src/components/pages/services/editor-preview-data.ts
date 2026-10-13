export type PreviewStep = { label: string; detail: string; x: string; y: string; side: "left" | "right" };
export type PreviewAnnotations = { ratio: number; legendLabel?: string; steps: readonly PreviewStep[] };

const publish: PreviewStep = { label: "Publish your changes", detail: "Review your changes, then publish when ready.", x: "93%", y: "96%", side: "left" };
const choose = (label: string, detail: string, x: string, y: string): PreviewStep => ({ label, detail, x, y, side: "right" });
const edit = (label: string, detail: string, x: string, y: string): PreviewStep => ({ label, detail, x, y, side: "left" });

// Positions are checked against the original, uncropped owner-supplied images.
const editors: Record<string, PreviewAnnotations> = {
  "/work/ladies-4-jesus-editor-devotional.png": { ratio: 1912 / 914, steps: [
    choose("Choose a page or post", "Find the entry you want in the content menu.", "17%", "26%"),
    edit("Edit your content", "Update the selected entry in the editing panel.", "85%", "21%"), publish,
  ] },
  "/work/ladies-4-jesus-editor-settings.png": { ratio: 1912 / 914, steps: [
    choose("Open site settings", "Choose the settings shared across the website.", "16%", "12%"),
    edit("Edit site-wide details", "Update the site name, tagline and logo fields.", "83%", "33%"), publish,
  ] },
  "/work/panda-patches-editor.png": { ratio: 1920 / 902, steps: [
    choose("Choose a homepage section", "Select the process section in the content menu.", "17%", "17%"),
    edit("Edit headings and steps", "Update the heading, supporting text and process steps.", "84%", "18%"), publish,
  ] },
  "/work/panda-patches-editor-blog.png": { ratio: 1912 / 914, steps: [
    choose("Choose a blog post", "Select a guide from the blog post list.", "17%", "18%"),
    edit("Edit the post details", "Update its title, web address and main image.", "84%", "37%"), publish,
  ] },
  "/work/panda-patches-editor-case-study.png": { ratio: 1912 / 914, steps: [
    choose("Choose a case study", "Open a bulk-order case study from the content menu.", "17%", "83%"),
    edit("Edit the case study", "Update its title, description and patch photograph.", "84%", "40%"), publish,
  ] },
  "/work/a-step-above-medical-editor-locations.png": { ratio: 1912 / 914, steps: [
    choose("Choose a location", "Select a city from the location entries.", "17%", "30%"),
    edit("Edit location details", "Update the web address, availability and city photo.", "84%", "31%"), publish,
  ] },
  "/work/a-step-above-medical-editor-courses.png": { ratio: 1920 / 1032, steps: [
    choose("Choose a course", "Select a training course from the course entries.", "20%", "27%"),
    edit("Edit course details", "Update the course information, duration and photograph.", "90%", "49%"), { ...publish, x: "95%", y: "97%" },
  ] },
};

export function editorPreviewFor(src: string): PreviewAnnotations | undefined { return editors[src]; }
