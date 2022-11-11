from django.contrib import admin
from django.db.models import Count
from django.urls import reverse
from django.utils.html import format_html, urlencode

from .models import Division, District, Location, Media


# Register your models here.
@admin.register(Division)
class DivisionAdmin(admin.ModelAdmin):
    list_display = ('name', 'districts')
    ordering = ('name',)

    @admin.display()
    def districts(self, division):
        url = reverse('admin:api_district_changelist') + '?' + urlencode({'division_id': division.id})
        return format_html(f'<a href="{url}">{division.districts_count}</a>')

    def get_queryset(self, request):
        return super().get_queryset(request).annotate(districts_count=Count('districts'))


@admin.register(District)
class District(admin.ModelAdmin):
    list_display = ('name', 'division', 'tourist_places')

    @admin.display()
    def tourist_places(self, obj):
        return Location.objects.count()


# Media Inline for location class
class MediaInline(admin.TabularInline):
    model = Media


# Tourist places/Location admin
@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ('title', 'district', 'rating')
    inlines = (MediaInline,)

