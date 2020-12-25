from django.contrib import admin

from import_export.admin import ExportActionMixin
from import_export import resources
from import_export.formats.base_formats import XLS, XLSX

from user.models import User


class UserResource(resources.ModelResource):
    class Meta:
        model = User
        fields = ('email', 'name', 'phone', 'date_of_birth', 'is_staff', 'subscriber', 'last_login')


@admin.register(User)
class UserAdmin(ExportActionMixin, admin.ModelAdmin):
    formats = (XLS, XLSX)
    list_display = ('email', 'name', 'phone', 'date_of_birth', 'is_staff', 'subscriber', 'last_login')
    list_filter = ('is_staff', 'subscriber', 'gender')
    resource_class = UserResource