import os

BASE_DIR = os.path.dirname(os.path.abspath("stockAlarm"))

STATIC_URL = '/static/'

STATICFILES_DIRS = [
    os.path.join(BASE_DIR,"stockAlarm/src/static"),
    # '/var/www/static/',
]

STATIC_ROOT = os.path.join(os.path.dirname(BASE_DIR), "stockAlarm/src")
