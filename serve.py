#!/usr/bin/env python3
import os, sys
os.chdir(os.path.dirname(os.path.abspath(__file__)))
import http.server, socketserver
PORT = 3000
handler = http.server.SimpleHTTPRequestHandler
with socketserver.TCPServer(("", PORT), handler) as httpd:
    print(f"Serving at http://localhost:{PORT}", flush=True)
    httpd.serve_forever()
