from django.shortcuts import render

# Create your views here.
from django.http import Http404

# Create your views here.
def root(request):
    return render(request, 'base.html')
