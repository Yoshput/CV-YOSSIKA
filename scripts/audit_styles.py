import re

with open('index.html', 'r', encoding='utf-8') as f:
    html = f.read()

links = re.findall(r'<link[^>]+>', html)
print("=== LINK TAGS ===")
for l in links:
    if 'stylesheet' in l or 'preload' in l:
        print(l)

styles = list(re.finditer(r'<style[^>]*>', html))
print(f"\nTotal style tags: {len(styles)}")
for idx, s in enumerate(styles):
    end_tag = html.find('</style>', s.end())
    length = end_tag - s.end() if end_tag != -1 else 0
    print(f"Style #{idx+1} at index {s.start()}: length {length} chars")
