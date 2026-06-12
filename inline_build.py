#!/usr/bin/env python3
"""Inline JS and CSS into a single HTML file for offline use."""

import re
from pathlib import Path

dist = Path('/root/.openclaw/workspace/cine-engine/dist')
html_path = dist / 'index.html'

html = html_path.read_text(encoding='utf-8')

# Inline CSS
for css_match in re.finditer(r'<link rel="stylesheet" crossorigin href="([^"]+)">', html):
    css_path = dist / css_match.group(1)
    if css_path.exists():
        css = css_path.read_text(encoding='utf-8')
        html = html.replace(css_match.group(0), f'<style>{css}</style>')

# Inline JS
for js_match in re.finditer(r'<script type="module" crossorigin src="([^"]+)"></script>', html):
    js_path = dist / js_match.group(1)
    if js_path.exists():
        js = js_path.read_text(encoding='utf-8')
        html = html.replace(js_match.group(0), f'<script type="module">{js}</script>')

# Write output
output = dist / 'cine-engine-offline.html'
output.write_text(html, encoding='utf-8')
print(f"Created: {output}")
print(f"Size: {output.stat().st_size / 1024:.1f} KB")
