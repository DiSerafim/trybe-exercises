import requests
import time


try:
    for _ in range(15):
        response = requests.get("https://www.facebook.com/stories/1799758010094612/UzpfSVNDOjI1MTc4NDQxMzY5NDQ0MQ==/?bucket_count=9&source=story_tray", timeout=1)
        print(response.status_code)
        time.sleep(0.1)
except requests.Timeout:
    response = requests.get("https://www.facebook.com/stories/1799758010094612/UzpfSVNDOjI1MTc4NDQxMzY5NDQ0MQ==/?bucket_count=9&source=story_tray", timeout=1)
finally:
    print(response.status_code)
