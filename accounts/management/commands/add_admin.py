import os

from django.contrib.auth.hashers import make_password
from django.contrib.auth.management.commands import createsuperuser

from accounts.models import User


class Command(createsuperuser.Command):

    def handle(self, *args, **options):
        email = os.getenv('ADMIN_EMAIL', 'admin@gmail.com')
        password = os.getenv('ADMIN_PASSWORD', '1q2w3e4r5t')
        if not password or not email:
            raise Exception('Phone or password are not provided.')

        try:
            user = User.objects.get(
                email=email,
            )
        except User.DoesNotExist:
            user = User.objects.create(
                email=email,
                password=make_password(password),
                name='ADMIN',
                is_staff=True,
                is_superuser=True
            )
        else:
            user.password = make_password(password)
            user.name = 'ADMIN'
            user.is_staff = True
            user.is_superuser = True
            user.save()
        finally:
            print(f'Admin({user.email}) was added.')
