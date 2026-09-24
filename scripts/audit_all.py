import os
import re
import glob
import urllib.parse

BASE_DIR = r"d:\PROJECT WEB\PORTOFOLIO SAYA\CV-YOSSIKA"

def audit_html_assets():
    html_files = glob.glob(os.path.join(BASE_DIR, "**", "*.html"), recursive=True)
    print(f"=== 1. AUDITING {len(html_files)} HTML FILES FOR ASSET LINKS ===")

    total_links = 0
    missing_assets = []

    for hf in html_files:
        rel_h = os.path.relpath(hf, BASE_DIR)
        h_dir = os.path.dirname(hf)
        with open(hf, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()

        # Regex for src, href, poster attributes
        links = re.findall(r'(?:src|href|poster)\s*=\s*["\']([^"\']+)["\']', content)
        for link in links:
            if link.startswith(("http://", "https://", "#", "data:", "mailto:", "tel:", "javascript:", "${")):
                continue
            clean_link = link.split("#")[0].split("?")[0]
            if not clean_link or clean_link.endswith((".html", ".php")):
                continue

            decoded = urllib.parse.unquote(clean_link)
            if decoded.startswith("/"):
                target_path = os.path.join(BASE_DIR, decoded.lstrip("/"))
            else:
                target_path = os.path.normpath(os.path.join(h_dir, decoded))

            total_links += 1
            if not os.path.exists(target_path):
                missing_assets.append((rel_h, link, target_path))

    print(f"Total internal asset links checked: {total_links}")
    if missing_assets:
        print(f"CRITICAL: {len(missing_assets)} missing asset links found:")
        for h, l, t in missing_assets:
            print(f"  - In [{h}]: '{l}' -> target not found")
    else:
        print("✅ SUCCESS: 100% of internal HTML asset links exist on disk!\n")

def audit_duplicate_ids():
    print("=== 2. AUDITING HTML ELEMENT IDs ===")
    html_files = ["index.html", "jasa.html", "projects.html", "details.html", "mubes-hipmi.html"]
    for rel_h in html_files:
        full_p = os.path.join(BASE_DIR, rel_h)
        if not os.path.exists(full_p):
            continue
        with open(full_p, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()

        ids = re.findall(r'id=["\']([^"\']+)["\']', content)
        seen = set()
        dupes = set()
        for i in ids:
            if i in seen:
                dupes.add(i)
            seen.add(i)

        if dupes:
            print(f"⚠️ WARNING: Duplicate IDs in [{rel_h}]: {list(dupes)}")
        else:
            print(f"✅ SUCCESS: No duplicate IDs in [{rel_h}]")
    print()

def audit_js_datasets():
    print("=== 3. AUDITING JS DATASETS & PATHS ===")
    js_files = [
        os.path.join(BASE_DIR, "js", "projects-data.js"),
        os.path.join(BASE_DIR, "js", "mubes-data.js")
    ]
    for jf in js_files:
        if not os.path.exists(jf):
            continue
        rel_j = os.path.relpath(jf, BASE_DIR)
        with open(jf, "r", encoding="utf-8", errors="ignore") as f:
            j_text = f.read()

        asset_paths = re.findall(r'["\'](assets/[^"\']+)["\']', j_text)
        missing_j = []
        for ap in asset_paths:
            decoded = urllib.parse.unquote(ap)
            full_p = os.path.join(BASE_DIR, decoded)
            if not os.path.exists(full_p):
                missing_j.append((ap, full_p))

        print(f"File [{rel_j}]: Checked {len(asset_paths)} asset paths.")
        if missing_j:
            print(f"⚠️ Missing assets in [{rel_j}]: {len(missing_j)}")
            for m, fp in missing_j:
                print(f"  - Missing: {m}")
        else:
            print(f"✅ SUCCESS: All {len(asset_paths)} assets in [{rel_j}] exist on disk!")
    print()

def audit_minified_files_sync():
    print("=== 4. AUDITING MINIFIED FILES SYNC ===")
    pairs = [
        ("css/style.css", "css/style.min.css"),
        ("js/main.js", "js/main.min.js"),
        ("js/i18n.js", "js/i18n.min.js"),
        ("js/projects-data.js", "js/projects-data.min.js"),
    ]
    for src, min_f in pairs:
        src_p = os.path.join(BASE_DIR, src)
        min_p = os.path.join(BASE_DIR, min_f)
        if os.path.exists(src_p) and os.path.exists(min_p):
            src_mtime = os.path.getmtime(src_p)
            min_mtime = os.path.getmtime(min_p)
            diff = abs(src_mtime - min_mtime)
            print(f"Comparing [{src}] vs [{min_f}]: mtime diff = {diff:.1f}s")
            if diff > 300:
                print(f"⚠️ NOTICE: [{min_f}] might be older than [{src}]. Synchronizing...")
                with open(src_p, "r", encoding="utf-8") as sf:
                    content = sf.read()
                with open(min_p, "w", encoding="utf-8") as mf:
                    mf.write(content)
                print(f"✅ Synced [{min_f}] with [{src}]")
            else:
                print(f"✅ Both files are in sync.")

if __name__ == "__main__":
    audit_html_assets()
    audit_duplicate_ids()
    audit_js_datasets()
    audit_minified_files_sync()
