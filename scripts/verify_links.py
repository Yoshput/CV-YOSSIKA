import os, re, json, urllib.parse

base_dir = r'd:\PROJECT WEB\PORTOFOLIO SAYA\CV-YOSSIKA'

# 1. Check index.html
with open(os.path.join(base_dir, 'index.html'), 'r', encoding='utf-8') as f:
    html = f.read()

srcs = re.findall(r'src=["\']([^"\']+)["\']', html)
hrefs = re.findall(r'href=["\'](assets/[^"\']+)["\']', html)
all_links = srcs + hrefs

missing = []
for link in all_links:
    if link.startswith(('http://', 'https://', '#', 'data:')):
        continue
    clean_link = link.split('#')[0].split('?')[0]
    decoded = urllib.parse.unquote(clean_link)
    full_path = os.path.join(base_dir, decoded.replace('/', os.sep))
    if not os.path.exists(full_path):
        missing.append((link, full_path))

print(f'Checked {len(all_links)} asset links in index.html. Missing: {len(missing)}')
for m in missing:
    print('MISSING in index.html:', m)

# 2. Check js/projects-data.js
with open(os.path.join(base_dir, 'js', 'projects-data.js'), 'r', encoding='utf-8') as f:
    pdata = f.read()

p_assets = re.findall(r'["\'](assets/[^"\']+)["\']', pdata)
p_missing = []
for link in p_assets:
    clean_link = link.split('#')[0].split('?')[0]
    decoded = urllib.parse.unquote(clean_link)
    full_path = os.path.join(base_dir, decoded.replace('/', os.sep))
    if not os.path.exists(full_path):
        p_missing.append((link, full_path))

print(f'Checked {len(p_assets)} asset links in projects-data.js. Missing: {len(p_missing)}')
for m in p_missing:
    print('MISSING in projects-data.js:', m)
