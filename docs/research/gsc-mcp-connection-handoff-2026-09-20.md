# GSC MCP connection handoff

Status: **CONNECTED AND VERIFIED, 22 September 2026.**

Google Cloud project `gsc-readonly-509416`, Search Console API enabled, OAuth consent screen External with publishing status Testing and `hassanjamal5004@gmail.com` as the single test user, Desktop OAuth client `gsc-readonly-desktop`. Token minted to `gsc-readonly-credentials.json`. The server is registered in `~/.claude.json` alongside the existing `firecrawl` entry.

Verified rather than assumed, in this order: the credential file carries a refresh token; Google's `tokeninfo` endpoint reports the granted scope as exactly `https://www.googleapis.com/auth/webmasters.readonly` and nothing broader; a direct `sites.list` call returns three properties, all `siteOwner` — `pandacodegen.com`, `pandapatches.com`, `astepabovemed.com`; and finally the MCP server itself was driven over stdio through `initialize` → `tools/list` → `tools/call list_sites`, which returned the same three properties.

## The one thing that breaks a fresh install

`pyproject.toml` declares `mcp>=1.2.0` with **no upper bound**, so a clean install resolves to mcp 2.x, where `FastMCP` was renamed to `MCPServer`. `server.py` still imports `from mcp.server.fastmcp import FastMCP`, so the binary dies on startup with `ModuleNotFoundError: No module named 'mcp.server.fastmcp'`.

This fails *silently* from the client's point of view — the MCP server simply never appears, with no error surfaced in chat. Fix:

```
.venv\Scripts\python.exe -m pip install "mcp<2"
```

This machine is pinned to mcp 1.30.0. If the server ever disappears after an upgrade, check this first.

## Publishing status: In production, so the token does not expire

Resolved 22 September 2026. While the app sat on **Testing**, refresh tokens expired after 7 days and the mint command would have needed re-running every week.

Publishing requires more than the greyed-out button suggests. The tooltip on that button is the only place Google states the actual requirement: **a valid app name, support email, homepage URL and privacy policy URL**. The Branding page presents the last two as optional. They are not, for production. Entering them then fails validation a second time with "Missing domain", because every URL must sit on a domain listed under **Authorised domains** — add the bare `pandacodegen.com`, no scheme and no `www`.

Do **not** upload an app logo. The Branding page says plainly that uploading one forces the app into verification, and it is not required to publish.

The token then has to be minted **again**. A refresh token carries its expiry from the moment it is issued, so the one minted under Testing kept its 7-day life even after the app went to production. Re-verified after re-minting: granted scope still exactly `webmasters.readonly`, same three properties.

`webmasters.readonly` is a sensitive scope, so sign-in still shows the "unverified app" interstitial regardless of publishing status — pass it with Advanced → Go to gsc-readonly. Verification only removes that screen and lifts the 100-user cap; neither matters for single-owner use. **Back to testing** on the Audience page reverses all of this if it ever becomes a nuisance.

## Secret handling

The client secret was pasted into a chat transcript during setup on 22 Sep 2026. Google treats Desktop-app client secrets as non-confidential and the app is restricted to one test user, so exposure is low-risk, but the client should be deleted and recreated when convenient. `client_secret.json` and `gsc-readonly-credentials.json` both live in the server clone, which `.gitignore`s `client_secret*`, `credentials*` and `*.json` — confirmed with `git check-ignore`.

## Local installation

- Repository: https://github.com/jurgisgavenas/search-console-mcp
- Installed source commit: `87db9f315d27d63fef126d958dd9caac7505392d`
- Folder: `C:\Users\hassa\.local\share\gsc-mcp`
- Isolated Python environment: `.venv` in that folder.
- Codex MCP name: `gsc-readonly`, registered in the user's Codex config, preserving existing connections.
- Transport: stdio; each client starts its own process.
- Intended credential path: `C:\Users\hassa\.local\share\gsc-mcp\gsc-readonly-credentials.json`

The credential file is not created yet. Never store it in this repository, `.env.local`, or Vercel.

## Finish Google authorization

1. Select or create a Google Cloud project and enable Google Search Console API.
2. Configure Google Auth Platform branding/audience. If the app is in Testing, add the Google account with GSC access as a test user.
3. Create an OAuth client of type **Desktop app** and download its JSON outside the repository.
4. Run the installed `scripts/mint_token.py` with `--client-secrets` pointing at that downloaded JSON and `--output` pointing at the intended credential path above.
5. Sign in with the Google account that has access to `sc-domain:pandacodegen.com`. Request only `https://www.googleapis.com/auth/webmasters.readonly`.
6. Verify actual granted scope, then run `list_sites` and a small `search_analytics` query. Do not claim connection success before these succeed.

The upstream comment about automatically downscoping broader existing credentials is not a security guarantee. Use a fresh read-only grant.

## Configuration to give Claude

Ask Claude to register this existing local server using its client's MCP configuration, merging rather than replacing other servers:

```json
{
  "mcpServers": {
    "gsc-readonly": {
      "command": "C:\\Users\\hassa\\.local\\share\\gsc-mcp\\.venv\\Scripts\\search-console-mcp.exe",
      "args": [],
      "env": {
        "GOOGLE_APPLICATION_CREDENTIALS": "C:\\Users\\hassa\\.local\\share\\gsc-mcp\\gsc-readonly-credentials.json"
      }
    }
  }
}
```

This configuration is for a local MCP-capable client on this Windows computer. A hosted Claude web connector cannot directly launch this local executable. Both local clients can use the same credential file after authorization; neither needs the credential contents pasted in chat.

## Available tools and limits

`list_sites`, `search_analytics`, `list_sitemaps`, `get_sitemap`, `inspect_url`.

The Google API does not expose every GSC dashboard: Links and complete indexing-report tables still need exports or browser access. URL Inspection returns stored index information, not a live crawl. Query-to-page attribution should be queried with both dimensions together.

References: [Codex MCP setup](https://learn.chatgpt.com/docs/extend/mcp?surface=cli), [Google OAuth client creation](https://developers.google.com/workspace/guides/create-credentials), [GSC API](https://developers.google.com/webmaster-tools/v1/api_reference_index).
