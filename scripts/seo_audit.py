import re
import os
from urllib.parse import urlparse

files = ['index.html', 'projects.html', 'jasa.html', 'jasa/index.html', 'dokumentasi/index.html', 'details.html']
root = os.getcwd()

print("--- AUDITING DUPLICATE META & TITLE TAGS ---")
for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        c = fp.read()
    
    titles = re.findall(r'<title>(.*?)</title>', c, re.I | re.DOTALL)
    if len(titles) > 1:
        print(f"WARNING: {f} has {len(titles)} <title> tags!")
    
    descriptions = re.findall(r'<meta[^>]+name=["\']description["\'][^>]*>', c, re.I)
    if len(descriptions) > 1:
        print(f"WARNING: {f} has {len(descriptions)} description meta tags!")

    canonicals = re.findall(r'<link[^>]+rel=["\']canonical["\'][^>]*>', c, re.I)
    if len(canonicals) > 1:
        print(f"WARNING: {f} has {len(canonicals)} canonical tags!")

    # Check internal links
    links = re.findall(r'href=["\']([^"\'#]+?)["\']', c, re.I)
    for l in set(links):
        if l.startswith('http') or l.startswith('mailto:') or l.startswith('tel:') or l.startswith('javascript:'):
            continue
        clean_path = l.split('?')[0]
        if not clean_path:
            continue
        file_dir = os.path.dirname(f)
        target = os.path.normpath(os.path.join(file_dir, clean_path))
        target_root = os.path.normpath(os.path.join(root, clean_path.lstrip('/')))
        exists = (
            os.path.exists(target) or 
            os.path.exists(target_root) or 
            os.path.exists(target + '.html') or 
            os.path.exists(target_root + '.html') or 
            os.path.exists(os.path.join(target, 'index.html')) or 
            os.path.exists(os.path.join(target_root, 'index.html'))
        )
        if not exists:
            print(f"POTENTIAL BROKEN LINK in {f}: {l}")

print("Audit finished successfully.")
