import re
import os

files = ['index.html', 'projects.html', 'jasa.html', 'jasa/index.html', 'dokumentasi/index.html', 'details.html']

print("=================== SEO TECHNICAL AUDIT REPORT ===================")
for f in files:
    if not os.path.exists(f):
        continue
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    
    titles = re.findall(r'<title>(.*?)</title>', c, re.I | re.DOTALL)
    descriptions = re.findall(r'<meta[^>]+name=["\']description["\'][^>]+content=["\'](.*?)["\']', c, re.I | re.DOTALL)
    if not descriptions:
        descriptions = re.findall(r'<meta[^>]+content=["\'](.*?)["\'][^>]+name=["\']description["\']', c, re.I | re.DOTALL)
    canonicals = re.findall(r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\'](.*?)["\']', c, re.I)
    h1s = re.findall(r'<h1[^>]*>(.*?)</h1>', c, re.I | re.DOTALL)
    html_langs = re.findall(r'<html[^>]*lang=["\'](.*?)["\']', c, re.I)
    hreflangs = re.findall(r'<link[^>]+hreflang=["\'](.*?)["\']', c, re.I)
    bing = 'msvalidate.01' in c
    schema = 'application/ld+json' in c

    print(f"\nPAGE: {f}")
    print(f"  • Lang: {html_langs[0] if html_langs else 'N/A'}")
    print(f"  • Title ({len(titles)}): {titles[0].strip() if titles else 'MISSING'}")
    print(f"  • Meta Description ({len(descriptions)}): {descriptions[0].strip()[:90]}..." if descriptions else "  • Meta Description: MISSING")
    print(f"  • Canonical: {canonicals[0] if canonicals else 'MISSING'}")
    print(f"  • H1 Count: {len(h1s)} (Expected: 1)")
    for i, h in enumerate(h1s):
        clean_h = re.sub(r'<[^>]+>', ' ', h)
        clean_h = re.sub(r'\s+', ' ', clean_h).strip()
        print(f"      H1[{i+1}]: {clean_h[:80]}")
    print(f"  • Hreflangs ({len(hreflangs)}): {hreflangs}")
    print(f"  • Bing Verification (<meta msvalidate.01>): {'PASSED' if bing else 'FAILED'}")
    print(f"  • Schema JSON-LD: {'PASSED' if schema else 'FAILED'}")

print("\n==================================================================")
