# Audit screenshots moved out of the repo

On 10 October 2026, before the redesign launch, the 133 screenshots and PDFs under `docs/` (about 33 MB) were moved out of the repository to keep it small. They belonged to audits that were already finished: `audit-2026-07-20`, `research/ARCHIVE_2026-08`, `research/website-redesign-audit-2026-10-03`, `og-previews`, `baselines` and `product/free-audit-implementation-2026-09-19`.

The written notes stayed. An image link in one of those older notes will now show as broken.

Where they are:

- The owner's machine: `C:\Projects\pandagen-cleanup-2026-10-10\docs\`, same folder layout. `MANIFEST.txt` in that folder lists every moved file.
- Git history: screenshots that were on GitHub before 10 October are still in the history there, so `git show <commit>:<path>` restores any one of them. The `research/website-redesign-audit-2026-10-03` screenshots, along with crawl dumps and replaced images added after the last push, were stripped from the unpushed commits before launch so they never reach GitHub. Those exist only in the local backup folder, and on the local branch `backup/pre-history-cleanup-2026-10-10`.

The two screenshots in `research/copy-before-after-audit-2026-10-09/evidence/` were kept because the current audit links to them.
