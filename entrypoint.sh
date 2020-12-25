#!/bin/bash

# Comment these commands after the success first launch for quicker further launches
#########################################################################
echo "Collect static files"
python manage.py collectstatic --noinput
echo "Apply database migrations"
python manage.py makemigrations
python manage.py migrate
python manage.py add_admin
##########################################################################

python manage.py runserver 0.0.0.0:8000