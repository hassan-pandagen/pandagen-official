# Git history privacy remediation

## Release gate

Sensitive customer/order screenshots and unverified identity images were
removed from the current working tree. A normal deletion does **not** remove
their bytes from existing Git commits, forks, clones, caches, pull requests, or
artifact stores. Do not make this repository public, add new collaborators, or
treat those files as erased until the repository owner completes and verifies a
coordinated history-remediation decision.

## Before rewriting history

1. Identify every affected path and whether any file contains a secret,
   customer/order identifier, personal data, or merely unapproved marketing
   material.
2. Revoke or rotate exposed credentials and identifiers where revocation is
   possible. History rewriting cannot undo access that already occurred.
3. Inventory every remote, fork, clone, open pull request, deployment artifact,
   package, backup, and search/cache location that may retain a copy.
4. Notify every collaborator. Freeze merges and pushes for the maintenance
   window, choose one new canonical history, and preserve any evidence required
   for incident or legal review outside the repository.
5. Obtain explicit owner approval for a destructive history rewrite and force
   push. Do not perform it as an incidental cleanup step.

## Coordinated procedure

Use a fresh mirror clone and a reviewed path list with `git filter-repo` (or an
equivalent maintained history-filtering tool). Verify the rewritten object
database before force-pushing every affected branch and tag. Repository hosts
may require support requests to purge cached objects, pull-request refs, or
large-file storage.

After the canonical remote is replaced:

- invalidate old deployment and CI artifacts where practical;
- require collaborators to delete old clones and clone the repository again;
- close or recreate pull requests that still reference the old object graph;
- run a full-history path/object scan and confirm the sensitive blobs cannot be
  fetched from any advertised ref;
- record approver, operator, scope, timestamps, verification evidence, and any
  residual third-party copies.

Never publish raw sensitive filenames, data, or blob contents in tickets or
chat while coordinating the cleanup. History remediation reduces future
exposure; it does not prove that earlier copies no longer exist.
