import json

for mode, file_name in [('MOBILE', 'report-mobile.json'), ('DESKTOP', 'report-desktop.json')]:
    try:
        with open(file_name, 'r', encoding='utf-8') as f:
            data = json.load(f)
        cats = data['categories']
        print(f'=== LIGHTHOUSE {mode} SCORES ===')
        for c in ['performance', 'accessibility', 'best-practices', 'seo']:
            score = int(cats[c]['score'] * 100)
            print(f'{c.capitalize():16}: {score}/100')

        audits = data['audits']
        print(f'\n=== KEY CORE WEB VITALS ({mode}) ===')
        for m in ['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index']:
            print(f"{m:26}: {audits[m].get('displayValue', 'N/A')}")
        print('-'*50)
    except Exception as e:
        print(f'Error reading {file_name}: {e}')
