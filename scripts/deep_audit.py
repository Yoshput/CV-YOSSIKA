import re

with open('index.html', 'r', encoding='utf-8') as f:
    text = f.read()

print("--- ABOUT SECTION LINES ---")
about_start = text.find('id="about"')
if about_start != -1:
    line_start = text[:about_start].count('\n') + 1
    print("About starts at line:", line_start)
    about_snippet = text[about_start:about_start + 4000]
    # find about-meta-grid
    m = re.search(r'<div class="about-meta-grid">.*?</div>\s*</div>', about_snippet, re.DOTALL)
    if m:
        sub_line = line_start + about_snippet[:m.start()].count('\n')
        print(f"about-meta-grid is at line {sub_line}:")
        print(m.group(0))
