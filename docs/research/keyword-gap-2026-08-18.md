# Keyword gap audit, 18 August 2026

Source: Google Keyword Planner via the Percuity connector, through the Panda
Patches Google Ads account. US only (geo 2840), English (1000).

## METHOD LIMIT, READ THIS FIRST

Two things about this data are easy to misread and would lead to bad decisions.

1. `competition` is PAID competition, the number of advertisers bidding. It is
   NOT organic ranking difficulty. A term marked LOW can still be brutal to rank
   for organically.
2. The `page_url` mode returns keyword IDEAS derived from Google's reading of a
   page's content. It is NOT a ranking report and NOT "keywords this site ranks
   for". It shows the topical space Google associates with the page, which is
   useful for comparing positioning and nothing more.

Volumes are bucketed estimates (10, 20, 90, 170, 590, 2400). Treat as orders of
magnitude, not counts.

## 1. Commercial terms, by seed

| Term | Vol/mo | Paid comp | Top-of-page bid |
|---|---|---|---|
| custom web site | 2,400 | MED 45 | $6.38 - $26.95 |
| custom web site design | 1,900 | LOW 15 | $6.15 - $29.17 |
| custom web development | 1,000 | LOW 7 | $1.36 - $24.08 |
| custom web development services | 1,000 | LOW 7 | $10.00 - $27.50 |
| custom website developer | 880 | LOW 8 | $4.91 - $25.00 |
| custom web design agency | 880 | LOW 4 | $5.31 - $30.00 |
| shopify development company | 720 | LOW 7 | $8.82 - $32.81 |
| shopify development agency | 590 | LOW 9 | $0.91 - $34.81 |
| custom web design company | 590 | LOW 1 | $8.05 - $21.00 |
| next js development agency | 140 | LOW 18 | not stated |

## 2. Headless cluster

shopify headless 590 (LOW 23) - wix headless 110 - headless woocommerce 110 -
shopify headless commerce 110 - webflow cms api 70 - headless website builder 30
- webflow headless 10. `squarespace headless` did not return as a seed, so it is
below the reporting floor.

## 3. Speed / problem cluster

why is wix so slow 170 (LOW 1) - why is my wordpress site so slow 90 - why is my
website so slow 40 - squarespace slow 20 - woocommerce slow 10 - shopify store
slow 10.

## 4. Migration cluster, note the direction

migrate wix to wordpress 170 (five phrasings, same cluster) - wordpress to
squarespace 90 - squarespace to wordpress 90 - squarespace to shopify 90 -
website migration cost 40. `wordpress to nextjs migration` did not return as a
seed. Demand is builder-to-builder, not builder-to-custom.

## 5. Topical signature, ours vs competitors

pandacodegen.com/services/custom-engineering reads as: develop web (201,000),
next js (49,500), web application (27,100), build a site (18,100), no code
(6,600). Commercial terms it does touch: web development agency 4,400 (LOW 5),
website development agency 4,400 (LOW 5), web app development company 1,300
(LOW 9), web app development agency 1,300 (LOW 9).

pagepro.co reads as: mobile app development (201,000), react native (22,200),
react native app development (6,600), mobile app development agency (1,900).

blazity.com reads as: agentic ai (110,000), ai agency (90,500), ai agents
(90,500), enterprise ai (33,100), ai sdk (4,400).

## 6. What that means

Both Next.js competitors named in our own posts have repositioned. Pagepro's
front door is React Native and mobile. Blazity's is agentic AI. Neither presents
as a Next.js web shop any more, which dates `pagepro-alternatives` and
`top-nextjs-agencies-2026`.

The gap this exposes is ours, not theirs: we hold the best-cited asset on the
site in /ai-info and publish extensively on AI search, but we sell "custom web
development". Blazity turned the adjacent skillset into a service sitting in
front of 90,500 searches a month. We give the AI expertise away as content.
