import time
def auth():
    # sleep 10 seconds
    time.sleep(1)
    return {"token": True}  # {"authenticated": False} if not authenticated