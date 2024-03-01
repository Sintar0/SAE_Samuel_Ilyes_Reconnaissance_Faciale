#!/bin/bash
pip install -r website/backend/requirements.txt
open website/websiteauth/build/index.html
python3 website/backend/api.py

