# GSC MCP connection handoff

Status: Codex and Claude Code server registrations created. Google authorization and a real property read are still pending. Registration alone does not establish access.

Updated 22 September 2026: verified on this machine that the repository is cloned, the `.venv` and `search-console-mcp.exe` are built, and `scripts/mint_token.py` is present. `gsc-readonly-credentials.json` does **not** exist, so no call can succeed yet. The server was added to `~/.claude.json` under top-level `mcpServers`, merged alongside the existing `firecrawl` entry, with a timestamped backup of that file taken first. The only outstanding work is the Google OAuth grant below, which needs an interactive browser sign-in and cannot be done from a non-interactive agent session.

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
