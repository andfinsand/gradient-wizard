from django.urls import path
from .views import IndexView, InputView

urlpatterns = [
    path('', IndexView.as_view(), name='index'),
    path('input-word', InputView.as_view(), name='input-word'),
]