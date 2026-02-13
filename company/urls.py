from django.contrib import admin
from django.urls import path, include
from rest_framework import permissions
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from django.http import JsonResponse

schema_view = get_schema_view(
    openapi.Info(
        title="Company Employee API",
        default_version='v1',
        description="Production DRF API",
    ),
    public=True,
    permission_classes=[permissions.AllowAny],
)

def home(request):
    return JsonResponse({
        "message": "🚀 Company Employee API Live",
        "docs": "/docs/",
        "companies": "/api/v1/companies/",
        "employees": "/api/v1/employees/",
    })

urlpatterns = [
    path('', home),
    path('admin/', admin.site.urls),
    path('api/', include('api.urls')),
    path('docs/', schema_view.with_ui('swagger', cache_timeout=0)),
]
