import os
import json
from openai import OpenAI
from typing import Dict, Any

client = OpenAI(api_key=os.getenv("OPEN_AI_KEY"))