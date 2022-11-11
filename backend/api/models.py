from django.core.validators import FileExtensionValidator
from django.utils.translation import gettext_lazy as _
from django.db import models


# Create your models here.
class Division(models.Model):
    name = models.CharField(_('name'), max_length=10)

    def __str__(self):
        return self.name


class District(models.Model):
    division = models.ForeignKey(Division, on_delete=models.DO_NOTHING, related_name='districts', null=True)
    name = models.CharField(_('name'), max_length=10)

    def __str__(self):
        return self.name


class Location(models.Model):
    RATING_CHOICES = (
        (1, "★☆☆☆☆"),
        (2, "★★☆☆☆"),
        (3, "★★★☆☆"),
        (4, "★★★★☆"),
        (5, "★★★★★"),
    )
    district = models.ForeignKey(District, on_delete=models.DO_NOTHING, null=True, related_name='locations')
    title = models.CharField(_('place'), max_length=15)
    rating = models.CharField(_('rating'), max_length=1, choices=RATING_CHOICES)
    description = models.TextField(_('description'))

    def __str__(self):
        return self.title


class Media(models.Model):
    travel = models.ForeignKey(Location, on_delete=models.CASCADE, related_name='media')
    image = models.ImageField(_('image'), upload_to=_('places'))
    video = models.FileField(
        _('video'),
        upload_to=_('places'),
        validators=[
            FileExtensionValidator(
                allowed_extensions=['MOV', 'avi', 'mp4', 'webm', 'mkv']
            )
        ]
    )
